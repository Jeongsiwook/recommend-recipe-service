import { PostModel } from "../schemas/post";

class Post {
    static create({ newPost }) {
        return PostModel.create(newPost);
    }

    static findById({ id }) {
        return PostModel.findById(id);
    }

    static findOne(filter) {
        return PostModel.findOne(filter);
    }

    static find({ filter }) {
        return PostModel.find(filter).sort({ createdAt: -1 });
    }

    static updateById({ id, toUpdate }) {
        return PostModel.findByIdAndUpdate(id, toUpdate, { new: true });
    }

    static deleteById({ id }) {
        return PostModel.findByIdAndDelete(id);
    }
}

export { Post };
