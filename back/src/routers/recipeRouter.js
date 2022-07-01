import is from "@sindresorhus/is";
import { Router } from "express";
import { recipeService } from "../services/recipeService";

const recipeRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Recipe
 */

/**
 * @swagger
 * paths:
 *   /recipes:
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

export { recipeRouter };
