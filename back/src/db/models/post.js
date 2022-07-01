import models from "./index";

class Post {
    static create({ newPost }) {
        return models.Post.create(newPost);
    }

    static findById({ id }) {
        return models.Post.findOne({ where: { id } });
    }

    static findOne(where) {
        return models.Post.findOne({ where });
    }

    static update({ id, toUpdate }) {
        return models.Post.update(toUpdate, { where: { id } });
    }

    static delete({ id }) {
        return models.Post.destroy({ where: { id } });
    }
}

export { Post };
