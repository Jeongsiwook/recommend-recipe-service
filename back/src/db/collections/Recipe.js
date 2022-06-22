import { RecipeModel } from "../schemas/recipe";
import { UserModel } from "../schemas/user";

class Recipe {
    static async create({ userId, newRecipe }) {
        const storedNewRecipe = await RecipeModel.create(newRecipe);

        await UserModel.findOneAndUpdate(
            { id: userId }, //
            { $push: { recipes: storedNewRecipe } },
        );

        return storedNewRecipe;
    }

    static async deleteById({ recipeId }) {
        const deleteResult = await RecipeModel.deleteOne({ id: recipeId });
        const isDataDeleted = deleteResult.deletedCount === 1;
        return isDataDeleted;
    }
}

export { Recipe };
