import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - _id
 *         - post
 *         - comment
 *         - author
 *         - createdAt
 *         - updatedAt
 *         - __v
 *       properties:
 *         _id:
 *           type: string
 *           format: ^[0-9a-f]{24}$
 *         post:
 *           type: string
 *           format: ^[0-9a-f]{24}$
 *         comment:
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
const CommentSchema = new Schema(
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        comment: {
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

const CommentModel = model("Comment", CommentSchema);

export { CommentModel };
