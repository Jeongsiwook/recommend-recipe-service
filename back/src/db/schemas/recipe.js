import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Recipe:
 *       type: object
 *       required:
 *         - _id
 *         - title
 *         - ingredients
 *         - recipe
 *         - createdAt
 *         - updatedAt
 *         - __v
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *         title:
 *           type: string
 *         ingredients:
 *           type: array
 *           example: [ingredient1, ingredient2]
 *         recipe:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         __v:
 *           type: integer
 */
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
        recipe: {
            type: String,
            trim: true,
            required: true,
        },
    },
    { timestamps: true },
);

const RecipeModel = model("Recipe", RecipeSchema);

export { RecipeModel };
