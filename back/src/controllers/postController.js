import { postService } from "../services/postService";
import { userService } from "../services/userService";

class postController {
    static async addPost(req, res, next) {
        try {
            const author = req.currentUserId;
            const { title, recipe, review } = req.body;

            const newPost = { title, recipe, review, author };
            const createdPost = await postService.newPost({ newPost });

            return res.status(200).json(createdPost);
        } catch (error) {
            next(error);
        }
    }

    static async getPost(req, res, next) {
        try {
            const { id } = req.param;

            const post = await postService.getPost({ id });

            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }

    static async getRank(req, res, next) {
        try {
            const { filter, page } = req.param;

            const post = await postService.getRank({ filter, page });

            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }

    static async updatePost(req, res, next) {
        try {
            const { id } = req.param;
            const user_id = req.currentUserId;
            const { title, review } = req.body;

            const author = await postService.getPost({ id }).then((data) => data.author);
            if (author != user_id) throw new Error("접근 권한이 없습니다.");

            const toUpdate = { title, review };
            const updatedPost = await postService.updatePost({ id, toUpdate });

            return res.status(200).json(updatedPost);
        } catch (error) {
            next(error);
        }
    }

    static async deletePost(req, res, next) {
        try {
            const { id } = req.param;
            const user_id = req.currentUserId;

            const author = await postService.getPost({ id }).then((data) => data.author);
            if (author != user_id) throw new Error("접근 권한이 없습니다.");

            await postService.deletePost({ id });

            return res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    static async likePost(req, res, next) {
        try {
        } catch (error) {
            next(error);
        }
    }
}
export { postController };
