import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - _id
 *         - email
 *         - name
 *         - password
 *         - createdAt
 *         - updatedAt
 *         - __v
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *         email:
 *           type: string
 *           format: email
 *         name:
 *           type: string
 *         password:
 *           type: string
 *           format: password
 *         description:
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
const UserSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: false,
        },
    },
    { timestamps: true },
);

const UserModel = model("User", UserSchema);

export { UserModel };
