import { Router } from "express";
import { commentController } from "../controllers/commentController";
import { loginRequired } from "../middlewares/loginRequired";

const commentRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Comment
 */

/**
 * @swagger
 * paths:
 *   /posts/comments:
 *     post:
 *       tags: [Comment]
 *       summary: Create Comment
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   type: string
 *                   format: objectId
 *                 comment:
 *                   type: string
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Comment'
 */
commentRouter.post("/posts/comments", loginRequired, commentController.addComment);

/**
 * @swagger
 * paths:
 *   /posts/{id}/comments:
 *     get:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *       tags: [Comment]
 *       summary: Read Comment by Post
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Comment'
 */
commentRouter.get("/posts/:id/comments", commentController.getComment);

/**
 * @swagger
 * paths:
 *   /posts/comments/{id}:
 *     put:
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *             format: objectId
 *       tags: [Comment]
 *       summary: Read Comment by Post
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comment:
 *                   type: string
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Comment'
 */
commentRouter.put("/posts/comments/:id", loginRequired, commentController.updateComment);

/**
 * @swagger
 * paths:
 *   /posts/comments/{id}:
 *     delete:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *       tags: [Comment]
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
commentRouter.delete("/posts/comments/:id", loginRequired, commentController.deleteComment);

export { commentRouter };
