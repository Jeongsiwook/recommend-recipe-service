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
        if (is.emptyObject(req.body)) {
            throw new Error("headers의 Content-Type을 application/json으로 설정해주세요");
        }
        // input 예시 : '시금치 비빔밥', ['간장', '밥', '계란', '시금치']
        const title = req.body.title;
        const ingredients = req.body.ingredients;

        const newRecipe = await recipeService.createRecipe({
            title,
            ingredients,
        });

        // if (newRecipe.errorMessage) {
        //   throw new Error(newUser.errorMessage);
        // }

        res.status(201).json(newRecipe);
    } catch (error) {
        next(error);
    }
});

export { recipeRouter };
