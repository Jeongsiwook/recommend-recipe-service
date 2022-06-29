import is from "@sindresorhus/is";
import { Router } from "express";
import { userService } from "../services/userService";
import { loginRequired } from "../middlewares/loginRequired";

const userRouter = Router();

userRouter.post("/users", async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (is.emptyObject(req.body)) {
            throw new Error("headers의 Content-Type을 application/json으로 설정해주세요");
        }

        const newUser = { name, email, password };

        const createdUser = await userService.addUser(newUser);
        if (createdUser.errorMessage) {
            throw new Error(createdUser.errorMessage);
        }

        return res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
});

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

userRouter.get("/users/:id", loginRequired, async (req, res, next) => {
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

userRouter.post("/users/recipe", loginRequired, async (req, res, next) => {
    try {
        const userId = req.currentUserId;
        const { title, ingredients, content } = req.body;

        const newRecipe = { userId, title, ingredients, content };

        const storedRecipe = await userService.addRecipe(newRecipe);
        if (storedRecipe.errorMessage) {
            throw new Error(storedRecipe.errorMessage);
        }

        return res.status(201).json(storedRecipe);
    } catch (error) {
        next(error);
    }
});

userRouter.delete("/users/recipe/:id", loginRequired, async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await userService.deleteRecipe({ recipeId: id });
        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

export { userRouter };
