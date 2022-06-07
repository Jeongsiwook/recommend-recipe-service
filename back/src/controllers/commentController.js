import { userService } from "../services/userService";
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

    static async updateComment(req, res, next) {
        try {
            const { id } = req.params;
            const user_id = req.currentUserId;
            const { post, comment } = req.body;

            const { author } = await commentService.getComment({ id });
            if (author != user_id) throw new Error("접근 권한이 없습니다.");

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

            const author = await commentService.getComment({ id }).then((data) => data.author);
            if (author != user_id) throw new Error("접근 권한이 없습니다.");

            await commentService.deleteComment({ id });

            return res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }
}
export { commentController };
