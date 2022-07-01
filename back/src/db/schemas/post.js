import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - _id
 *         - title
 *         - recipe
 *         - review
 *         - author
 *         - createdAt
 *         - updatedAt
 *         - __v
 *       properties:
 *         _id:
 *           type: string
 *           format: ^[0-9a-f]{24}$
 *         title:
 *           type: string
 *         recipe:
 *           type: string
 *           format: ^[0-9a-f]{24}$
 *         review:
 *           type: string
 *         author:
 *           type: string
 *           format: ^[0-9a-f]{24}$
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         __v:
 *           type: integer
 */
const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        recipe: {
            type: Schema.Types.ObjectId,
            ref: "Recipe",
            required: true,
        },
        review: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true },
);

const PostModel = model("Post", PostSchema);

export { PostModel };
