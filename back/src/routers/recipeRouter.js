import is from "@sindresorhus/is";
import { Router } from "express";
import { recipeService } from "../services/recipeService";
import { loginRequired } from "../middlewares/loginRequired";

const recipeRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Recipe
 */

/*
recipeRouter.post("/recipes", async (req, res, next) => {
    try {
        const { title, ingredients } = req.body;
        if (is.emptyObject(req.body)) {
            throw new Error("headers의 Content-Type을 application/json으로 설정해주세요.");
        }

        const newRecipe = { title, ingredients };

        const createdRecipe = await recipeService.createRecipe(newRecipe);
        if (createdRecipe.errorMessage) {
            throw new Error(createdRecipe.errorMessage);
        }

        return res.status(201).json(createdRecipe);
    } catch (error) {
        next(error);
    }
});
*/

/**
 * @swagger
 * paths:
 *   /recipes:
 *     post:
 *       tags: [Recipe]
 *       summary: Show Recipe
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 ingredients:
 *                   type: array
 *                   example: [ingredient1, ingredient2]
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Recipe'
 */
recipeRouter.post("/recipes", async (req, res, next) => {
    try {
        const { title, ingredients } = req.body;

        const recipe = await recipeService.findOne({ title, ingredients });
        if (recipe.errorMessage) {
            throw new Error(recipe.errorMessage);
        }

        return res.status(200).json(recipe);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * paths:
 *   /recipes/register:
 *     post:
 *       tags: [Recipe]
 *       summary: Create Recipe
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 ingredients:
 *                   type: array
 *                   example: [ingredient1, ingredient2]
 *                 recipe:
 *                   type: string
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Recipe'
 */
recipeRouter.post("/recipes/register", loginRequired, async (req, res, next) => {
    try {
        const author = req.currentUserId;
        const { title, ingredients, recipe } = req.body;

        const newRecipe = { title, author, ingredients, recipe };

        const createdRecipe = await recipeService.addRecipe(newRecipe);

        return res.status(201).json(createdRecipe);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * paths:
 *   /recipes/:id:
 *     parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *     delete:
 *       tags: [Recipe]
 *       summary: Delete Recipe
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: OK
 */
recipeRouter.delete("/recipes/:id", loginRequired, async (req, res, next) => {
    try {
        const { id } = req.params;
        const user_id = req.currentUserId;

        const data = await recipeService.getRecipe({ id });
        if (!data) throw new Error("레시피를 찾을 수 없습니다.");
        if (data.author != user_id) throw new Error("접근 권한이 없습니다.");

        await recipeService.deleteRecipe({ recipeId: id });

        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

export { recipeRouter };
