import { Schema, model } from "mongoose";

const RecipeSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        ingredients: {
            type: Array,
            required: true,
        },
        content: {
            type: String,
            trim: true,
            required: true,
        },
    },
    { timestamps: true },
);

const RecipeModel = model("Recipe", RecipeSchema);

export { RecipeModel };
