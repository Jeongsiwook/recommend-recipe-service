import { Recipe } from "../db";
import { recipeAiModel } from "../utils/recipeAiModel";

class recipeService {
    static async createRecipe({ title, ingredients }) {
        const createdRecipe = await recipeAiModel({ title, ingredients });
        const recipe = createdRecipe.split("<unused4>")[1].slice(0, -15);
        return { title, ingredients, recipe };
    }

    static addRecipe({ newRecipe }) {
        return Recipe.create({ newRecipe });
    }

    static getRecipe({ id }) {
        return Recipe.findById({ id });
    }

    static deleteRecipe({ recipeId }) {
        return Recipe.delete({ recipeId });
    }
}

export { recipeService };
