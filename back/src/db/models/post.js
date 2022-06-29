import models from "./index";

class Post {
    static create({ newPost }) {
        return models.Post.create(newPost);
    }

    static findById({ __id }) {
        return models.Post.findOne({ where: { __id } });
    }

    static findOne(where) {
        return models.Post.findOne({ where });
    }

    static update({ __id, toUpdate }) {
        return models.Post.update(toUpdate, { where: { __id } });
    }

    static delete({ __id }) {
        return models.Post.destroy({ where: { __id } });
    }
}

export { Post };
