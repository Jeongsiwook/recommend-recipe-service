import { Schema, model } from "mongoose";

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
