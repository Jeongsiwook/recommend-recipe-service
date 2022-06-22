import { recipeAiModel } from "../utils/recipeAiModel";

class recipeService {
    static async createRecipe({ title, ingredients }) {
        const createdRecipe = await recipeAiModel({ title, ingredients });
        return createdRecipe;
    }
}

export { recipeService };
