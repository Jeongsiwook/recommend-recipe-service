import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     post:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         title:
 *           type: string
 *         recipe:
 *           type: string
 *         review:
 *           type: string
 *         author:
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
const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        recipe: {
            type: String,
            required: true,
            immutable: true,
            trim: true,
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
