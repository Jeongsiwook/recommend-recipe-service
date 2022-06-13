import { Comment, Post } from "../db";

class commentService {
    static async addComment({ newComment }) {
        const comment = await Comment.create({ newComment });

        const id = newComment.post;
        const toUpdate = { $push: { comments: comment._id } };

        return Post.updateById({ id, toUpdate });
    }

    static getComment({ id }) {
        return Comment.findById({ id });
    }

    static updateComment({ id, toUpdate }) {
        return Comment.updateById({ id, toUpdate });
    }

    static async deleteComment({ id }) {
        const post = await Post.findOne({ comments: { $in: id } });

        const toUpdate = { $pull: { comments: id } };
        await console.log(post);
        return Promise.all([
            Post.updateById({ id: post._id, toUpdate }), //
            Comment.deleteById({ id }),
        ]);
    }
}

export { commentService };
