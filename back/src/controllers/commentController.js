import { commentService } from "../services/commentService";

class commentController {
    static async addComment(req, res, next) {
        try {
            const author = req.currentUserId;
            const { post, comment } = req.body;

            const newComment = { post, comment, author };
            const createdComment = await commentService.addComment({ newComment });

            return res.status(200).json(createdComment);
        } catch (error) {
            next(error);
        }
    }

    static async getComment(req, res, next) {
        try {
            const { page } = req.query;
            const { post } = req.params;

            const comment = await commentService.getComment({ post, page });

            return res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    }

    static async updateComment(req, res, next) {
        try {
            const { id } = req.params;
            const user_id = req.currentUserId;
            const { post, comment } = req.body;

            const data = await commentService.getComment({ id });
            if (!data) throw new Error("댓글을 찾을 수 없습니다.");
            if (data.author != user_id) throw new Error("접근 권한이 없습니다.");

            const toUpdate = { post, comment };
            const updatedComment = await commentService.updateComment({ id, toUpdate });

            return res.status(200).json(updatedComment);
        } catch (error) {
            next(error);
        }
    }

    static async deleteComment(req, res, next) {
        try {
            const { id } = req.params;
            const user_id = req.currentUserId;

            const data = await commentService.getComment({ id });
            if (!data) throw new Error("댓글을 찾을 수 없습니다.");
            if (data.author != user_id) throw new Error("접근 권한이 없습니다.");

            await commentService.deleteComment({ id });

            return res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }
}
export { commentController };
