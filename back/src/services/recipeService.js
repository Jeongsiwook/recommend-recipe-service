import { recipeAiModel } from "../utils/recipeAiModel";

class recipeService {
    static async createRecipe({ title, ingredients }) {
        const createdRecipe = await recipeAiModel({ title, ingredients });

        const recipe = createdRecipe.split("<unused4>")[1].slice(0, -15);
        const result = {
            title,
            ingredients,
            recipe,
        };
        return result;
    }
}

export { recipeService };
