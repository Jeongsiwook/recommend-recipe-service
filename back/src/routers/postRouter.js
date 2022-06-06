import { Router } from "express";
import { postController } from "../controllers/postController";
// import { login_required } from "../middlewares/login_required";

const postRouter = Router();

postRouter.post("/posts", postController.addPost);

postRouter.get("/posts/:id", postController.getPost);

postRouter.get("/posts/rank", postController.getRank);

postRouter.put("/posts/:id", postController.updatePost);

postRouter.delete("/posts/:id", postController.deletePost);

postRouter.post("/posts/:id/likes", postController.likePost);
