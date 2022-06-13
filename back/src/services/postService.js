import { Post } from "../db";

class postService {
    static addPost({ newPost }) {
        return Post.create({ newPost });
    }

    static getData({ id }) {
        return Post.findById({ id });
    }

    static getPost({ id }) {
        return Post.findById({ id }) //
            .populate("author", "name")
            .populate("comments", "comment author createdAt __v");
    }

    static getRank({ filter, page }) {
        return Post.find({ filter })
            .populate("author", "name")
            .skip((page - 1) * 10)
            .limit(10);
    }

    static async updatePost({ id, toUpdate }) {
        return Post.updateById({ id, toUpdate });
    }

    static async deletePost({ id }) {
        return Post.deleteById({ id });
    }
}

export { postService };
