import { RecipeModel } from "../schemas/recipe";

class Recipe {
    static create({ newRecipe }) {
        return RecipeModel.create(newRecipe);
    }

    static find(filter) {
        return RecipeModel.find(filter);
    }

    static delete({ recipeId }) {
        return RecipeModel.findByIdAndDelete(recipeId);
    }
}

export { Recipe };
