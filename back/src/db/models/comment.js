import models from "./index";

class Comment {
    static create({ newComment }) {
        return models.Comment.create(newComment);
    }

    static findById({ __id }) {
        return models.Comment.findOne({ where: { __id } });
    }

    static findOne(where) {
        return models.Comment.findOne({ where });
    }

    static update({ __id, toUpdate }) {
        return models.Comment.update(toUpdate, { where: { __id } });
    }

    static delete({ __id }) {
        return models.Comment.destroy({ where: { __id } });
    }
}

export { Comment };
