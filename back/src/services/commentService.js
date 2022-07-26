import { Comment } from "../db";

class commentService {
    static addComment({ newComment }) {
        return Comment.create({ newComment });
    }

    static getComment({ post, page }) {
        return Comment.find({ post })
            .populate("author", "name")
            .skip((page - 1) * 10)
            .limit(10);
    }

    static updateComment({ id, toUpdate }) {
        return Comment.update({ id, toUpdate });
    }

    static deleteComment({ id }) {
        return Comment.delete({ id });
    }
}

export { commentService };
