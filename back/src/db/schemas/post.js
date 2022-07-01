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
 *         - author
 *         - recipe
 *         - review
 *         - createdAt
 *         - updatedAt
 *         - __v
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *         title:
 *           type: string
 *         author:
 *           type: string
 *           format: objectId
 *         recipe:
 *           type: string
 *           format: objectId
 *         review:
 *           type: string
 *         likes:
 *           type: array
 *           items:
 *             type: string
 *             format: objectId
 *         views:
 *           type: array
 *           items:
 *             type: string
 *             format: objectId
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
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
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
        likes: {
            type: Array,
            required: true,
        },
        views: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true },
);

const PostModel = model("Post", PostSchema);

export { PostModel };
