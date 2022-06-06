import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        recipe: {
            type: String,
            required: true,
            immutable: true,
        },
        review: {
            type: String,
            required: false,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comments: {
            type: Array,
            required: false,
        },
    },
    { timestamps: true }
);

const PostModel = model("Post", PostSchema);

export { PostModel };
