import is from "@sindresorhus/is";
import { Router } from "express";
import { userService } from "../services/userService";
import { loginRequired } from "../middlewares/loginRequired";

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: User
 */

/**
 * @swagger
 * paths:
 *   /users:
 *     post:
 *       tags: [User]
 *       summary: Create User
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: array
 *                   format: email
 *                 password:
 *                   type: string
 *                   format: password
 *                 description:
 *                   type: string
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.post("/users", async (req, res, next) => {
    try {
        const { name, email, password, description } = req.body;
        if (is.emptyObject(req.body)) {
            throw new Error("headers의 Content-Type을 application/json으로 설정해주세요");
        }

        const newUser = { name, email, password, description };

        const createdUser = await userService.addUser(newUser);
        if (createdUser.errorMessage) {
            throw new Error(createdUser.errorMessage);
        }

        return res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * paths:
 *   /login:
 *     post:
 *       tags: [User]
 *       summary: Login
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                   format: password
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     format: token
 *                   _id:
 *                     type: string
 *                     format: objectId
 *                   email:
 *                     type: string
 *                     format: email
 *                   name:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
userRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userService.getUser({ email, password });
        if (user.errorMessage) {
            throw new Error(user.errorMessage);
        }

        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * paths:
 *   /users/{id}:
 *     get:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *       tags: [User]
 *       summary: Read User
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.get("/users/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        const currentUserInfo = await userService.getUserInfo({ userId: id });
        if (currentUserInfo.errorMessage) {
            throw new Error(currentUserInfo.errorMessage);
        }

        return res.status(200).json(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * paths:
 *   /users:
 *     put:
 *       tags: [User]
 *       summary: Update User
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.put("/users", loginRequired, async (req, res, next) => {
    try {
        const userId = req.currentUserId;
        const { name, description } = req.body;

        const toUpdate = { name, description };

        const updatedUser = await userService.setUser({ userId, toUpdate });
        if (updatedUser.errorMessage) {
            throw new Error(updatedUser.errorMessage);
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * paths:
 *   /users:
 *     delete:
 *       tags: [User]
 *       summary: Delete User
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: OK
 */
userRouter.delete("/users", loginRequired, async (req, res, next) => {
    try {
        const userId = req.currentUserId;

        const result = await userService.deleteUser({ userId });
        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

export { userRouter };
