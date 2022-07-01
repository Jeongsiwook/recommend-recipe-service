import { Recipe } from "../db";
import { recipeAiModel } from "../utils/recipeAiModel";

class recipeService {
    static async createRecipe({ title, ingredients }) {
        const createdRecipe = await recipeAiModel({ title, ingredients });

        const recipe = createdRecipe.split("<unused4>")[1].slice(0, -15);

        return { title, ingredients, recipe };
    }

    static addRecipe({ userId, title, ingredients, content }) {
        const newRecipe = { title, ingredients, content };
        return Recipe.create({ userId, newRecipe });
    }

    static deleteRecipe({ recipeId }) {
        return Recipe.deleteById({ recipeId });
    }
}

export { recipeService };
