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
 *                 recipe:
 *                   type: string
 *                   format: objectId
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

/**
 * @swagger
 * paths:
 *   /posts/rank:
 *     get:
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *       tags: [Post]
 *       summary: Read Post by Rank
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Post'
 */
postRouter.get("/posts/rank", postController.getRank);

/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *     get:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *       tags: [Post]
 *       summary: Read Post
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Post'
 */
postRouter.get("/posts/:id", postController.getPost);

/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *     put:
 *       tags: [Post]
 *       summary: Update Post
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 review:
 *                   type: string
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Post'
 */
postRouter.put("/posts/:id", loginRequired, postController.updatePost);

/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *     delete:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *       tags: [Post]
 *       summary: Delete Post
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: OK
 */
postRouter.delete("/posts/:id", loginRequired, postController.deletePost);

postRouter.post("/posts/:id/like", loginRequired, postController.likePost);

export { postRouter };
