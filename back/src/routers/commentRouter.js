import { Router } from "express";
import { commentController } from "../controllers/commentController";
import { loginRequired } from "../middlewares/loginRequired";

const commentRouter = Router();

commentRouter.post("/posts/comments", loginRequired, commentController.addComment);

commentRouter.put("/posts/comments/:id", loginRequired, commentController.updateComment);

commentRouter.delete("/posts/comments/:id", loginRequired, commentController.deleteComment);

export { commentRouter };
