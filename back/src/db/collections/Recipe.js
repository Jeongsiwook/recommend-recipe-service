import { RecipeModel } from "../schemas/recipe";

class Recipe {
    static create({ newRecipe }) {
        return RecipeModel.create(newRecipe);
    }

    static findById({ id }) {
        return RecipeModel.findById(id);
    }

    static delete({ recipeId }) {
        return RecipeModel.findByIdAndDelete(recipeId);
    }
}

export { Recipe };
