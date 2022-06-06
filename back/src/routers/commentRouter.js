import { Router } from "express";
import { commentController } from "../controllers/commentController";
// import { login_required } from "../middlewares/login_required";

const commentRouter = Router();

commentRouter.post("/posts/comments", commentController.addComment);

commentRouter.put("/posts/comments/:id", commentController.updateComment);

commentRouter.delete("/posts/comments/:id", commentController.deleteComment);
