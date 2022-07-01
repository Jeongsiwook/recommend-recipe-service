import { CommentModel } from "../schemas/comment";

class Comment {
    static create({ newComment }) {
        return CommentModel.create(newComment);
    }

    static find(filter) {
        return CommentModel.find(filter);
    }

    static update({ id, toUpdate }) {
        return CommentModel.findByIdAndUpdate(id, toUpdate, { new: true });
    }

    static delete({ id }) {
        return CommentModel.findByIdAndDelete(id);
    }
}

export { Comment };
