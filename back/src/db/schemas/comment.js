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
 *           format: objectId
 *         post:
 *           type: string
 *           format: objectId
 *         author:
 *           type: string
 *           format: objectId
 *         comment:
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
const CommentSchema = new Schema(
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comment: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true },
);

const CommentModel = model("Comment", CommentSchema);

export { CommentModel };
