import { Schema, model } from "mongoose";

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
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    { timestamps: true },
);

const PostModel = model("Post", PostSchema);

export { PostModel };
