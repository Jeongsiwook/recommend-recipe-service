import { CommentModel } from "../schemas/comment";

class Comment {
    static create({ newComment }) {
        return CommentModel.create(newComment);
    }

    static findById({ id }) {
        return CommentModel.findById(id);
    }

    static updateById({ id, toUpdate }) {
        return CommentModel.findByIdAndUpdate(id, toUpdate, { new: true });
    }

    static deleteById({ id }) {
        return CommentModel.findByIdAndDelete(id);
    }
}

export { Comment };
