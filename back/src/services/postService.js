import { Post, Comment } from "../db";

class postService {
    static addPost({ newPost }) {
        return Post.create({ newPost });
    }

    static async getPost({ id }) {
        const post = await Post.findById({ id });
        post.comments = await Comment.find({ post: id });

        await Post.update({ id, toUpdate: { $inc: { views: 1 } } });

        return post;
    }

    static getRank({ page }) {
        return Post.find()
            .populate("author", "name")
            .sort({ views: -1 })
            .skip((page - 1) * 10)
            .limit(10);
    }

    static updatePost({ id, toUpdate }) {
        return Post.update({ id, toUpdate });
    }

    static deletePost({ id }) {
        return Post.delete({ id });
    }
}

export { postService };
