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

    static async getRecipe({ title, ingredients }) {
        const titles = await Recipe.find({ title });
        if (titles) return titles;

        const result = [];
        const recipes = await Recipe.find({});
        recipes.map((recipe) => {
            recipe.ingredients.map((alpha) => {
                const count = ingredients.filter((beta) => alpha === beta);
                if (count.length > 0) result.push(recipe);
            });
        });
        return result[Math.floor(Math.random() * result.length)];
    }
}

export { recipeService };
