import models from "./index";

class Comment {
    static create({ newComment }) {
        return models.Comment.create(newComment);
    }

    static findById({ id }) {
        return models.Comment.findOne({ where: { id } });
    }

    static findOne(where) {
        return models.Comment.findOne({ where });
    }

    static update({ id, toUpdate }) {
        return models.Comment.update(toUpdate, { where: { id } });
    }

    static delete({ id }) {
        return models.Comment.destroy({ where: { id } });
    }
}

export { Comment };
