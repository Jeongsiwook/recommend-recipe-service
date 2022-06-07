import { Router } from "express";
import { commentController } from "../controllers/commentController";
// import { loginRequired } from "../middlewares/loginRequired";

const commentRouter = Router();

commentRouter.post("/posts/comments", commentController.addComment);

commentRouter.put("/posts/comments/:id", commentController.updateComment);

commentRouter.delete("/posts/comments/:id", commentController.deleteComment);

export { commentRouter };
