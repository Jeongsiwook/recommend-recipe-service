import { Router } from "express";
import { postController } from "../controllers/postController";
import { loginRequired } from "../middlewares/loginRequired";

const postRouter = Router();

postRouter.post("/posts", loginRequired, postController.addPost);

postRouter.get("/posts/rank", postController.getRank);

postRouter.get("/posts/:id", postController.getPost);

postRouter.put("/posts/:id", loginRequired, postController.updatePost);

postRouter.delete("/posts/:id", loginRequired, postController.deletePost);

postRouter.post("/posts/:id/likes", loginRequired, postController.likePost);

export { postRouter };
