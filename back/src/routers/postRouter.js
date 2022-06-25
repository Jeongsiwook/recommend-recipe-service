import { Router } from "express";
import { postController } from "../controllers/postController";
import { loginRequired } from "../middlewares/loginRequired";

const postRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Post
 */

/**
 * @swagger
 * paths:
 *   /posts:
 *     post:
 *       tags: [Post]
 *       summary: Create Post
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Pasta Recipe"
 *                 recipe:
 *                   type: string
 *                   pattern: "^[0-9a-f]{24}$"
 *                 review:
 *                   type: string
 *                   example: "Good"
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Post'
 */
postRouter.post("/posts", loginRequired, postController.addPost);

postRouter.get("/posts/rank", postController.getRank);

postRouter.get("/posts/:id", postController.getPost);

postRouter.put("/posts/:id", loginRequired, postController.updatePost);

postRouter.delete("/posts/:id", loginRequired, postController.deletePost);

postRouter.post("/posts/:id/likes", loginRequired, postController.likePost);

export { postRouter };
