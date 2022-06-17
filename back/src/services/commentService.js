import { Comment, Post } from "../db";

class commentService {
    static addComment({ newComment }) {
        return Comment.create({ newComment });
    }

    static getComment({ id }) {
        return Comment.findById({ id });
    }

    static updateComment({ id, toUpdate }) {
        return Comment.updateById({ id, toUpdate });
    }

    static deleteComment({ id }) {
        return Comment.deleteById({ id });
    }
}

export { commentService };
