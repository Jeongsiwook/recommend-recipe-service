import { Comment, Post } from "../db";

class commentService {
    static async addComment({ newComment }) {
        const comment = await Comment.create({ newComment });

        const id = newComment.post;
        const toUpdate = { $push: { comments: comment._id } };

        return Post.updateById({ id, toUpdate });
    }

    static async getComment({ id }) {
        return Comment.findById({ id });
    }

    static async updateComment({ id, toUpdate }) {
        return Comment.updateById({ id, toUpdate });
    }

    static async deleteComment({ id }) {
        const { _id } = await Post.find({ filter: { comments: { $elemMatch: { id } } } });
        const toUpdate = { $pull: { comments: id } };
        await Post.updateById({ id: _id, toUpdate });

        return Comment.deleteById({ id });
    }
}

export { commentService };
