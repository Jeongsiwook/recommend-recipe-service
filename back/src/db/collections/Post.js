import { PostModel } from "../schemas/post";

class Post {
    static create({ newPost }) {
        return PostModel.create(newPost);
    }

    static findById({ id }) {
        return PostModel.findById(id);
    }

    static find({}) {
        return PostModel.find({});
    }

    static update({ id, toUpdate }) {
        return PostModel.findByIdAndUpdate(id, toUpdate, { new: true });
    }

    static delete({ id }) {
        return PostModel.findByIdAndDelete(id);
    }
}

export { Post };
