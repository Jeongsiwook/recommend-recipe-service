import { PostModel } from "../schemas/post";

class Post {
    static create({ newPost }) {
        return PostModel.create(newPost);
    }

    static findById({ id }) {
        return PostModel.findById({ id });
    }

    static find() {
        return PostModel.find();
    }

    static updateById({ id, toUpdate }) {
        return PostModel.findByIeAndUpdate({ id }, toUpdate, { new: true });
    }

    static deleteById({ id }) {
        return PostModel.findOneAndDelete({ id });
    }
}

export { Post };
