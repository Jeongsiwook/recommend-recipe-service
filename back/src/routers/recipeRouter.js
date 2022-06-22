import is from "@sindresorhus/is";
import { Router } from "express";
import { recipeService } from "../services/recipeService";

const recipeRouter = Router();

recipeRouter.post("/recipes", async (req, res, next) => {
    try {
        /*
         #swagger.tags = ['Recipes']
         #swagger.summary = 'ai 모델 기반 레시피 생성'
         #swagger.description = 'input 바탕으로 레시피를 생성한다.'
        */
        const { title, ingredients } = req.body;

        if (is.emptyObject(req.body)) {
            throw new Error("headers의 Content-Type을 application/json으로 설정해주세요");
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
