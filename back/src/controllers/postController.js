import { postService } from "../services/postService";

class postController {
    static async addPost(req, res, next) {
        try {
            const author = req.currentUserId;
            const { title, recipe, review } = req.body;

            const newPost = { title, author, recipe, review };
            const createdPost = await postService.addPost({ newPost });

            return res.status(200).json(createdPost);
        } catch (error) {
            next(error);
        }
    }

    static async getPost(req, res, next) {
        try {
            const { id } = req.params;

            const post = await postService.getPost({ id });

            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }

    static async getRank(req, res, next) {
        try {
            const page = req.query.page ?? 1;

            const posts = await postService.getRank({ page });

            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }

    static async updatePost(req, res, next) {
        try {
            const { id } = req.params;
            const user_id = req.currentUserId;
            const { title, review } = req.body;

            const post = await postService.getPost({ id });
            if (!post) throw new Error("게시물을 찾을 수 없습니다.");
            if (post.author._id != user_id) throw new Error("접근 권한이 없습니다.");

            const toUpdate = { title, review };
            const updatedPost = await postService.updatePost({ id, toUpdate });

            return res.status(200).json(updatedPost);
        } catch (error) {
            next(error);
        }
    }

    static async deletePost(req, res, next) {
        try {
            const { id } = req.params;
            const user_id = req.currentUserId;

            const post = await postService.getPost({ id });
            if (!post) throw new Error("게시물을 찾을 수 없습니다.");
            if (post.author._id != user_id) throw new Error("접근 권한이 없습니다.");

            await postService.deletePost({ id });

            return res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    static async likePost(req, res, next) {
        try {
            const { id } = req.params;
            const user_id = req.currentUserId;

            const post = await postService.getPost({ id });
            if (!post) throw new Error("게시물을 찾을 수 없습니다.");

            if (user_id in post.likes) var toUpdate = { $pull: { likes: user_id } };
            else var toUpdate = { $push: { likes: user_id } };

            const likedPost = await postService.updatePost({ id, toUpdate });

            return res.status(200).json(likedPost);
        } catch (error) {
            next(error);
        }
    }
}
export { postController };
