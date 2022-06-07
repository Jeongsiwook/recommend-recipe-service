import { Post } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class postService {
    static addPost({ newPost }) {
        return Post.create({ newPost });
    }

    static getAuthor({ id }) {
        return Post.findById({ id }).then((data) => data.author);
    }

    static getPost({ id }) {
        return Post.findById({ id }).populate("author").populate("comments");
    }

    static getRank({ filter, page }) {
        return Post.find({ filter, page })
            .populate("author")
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
