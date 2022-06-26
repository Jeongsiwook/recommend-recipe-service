import is from "@sindresorhus/is";
import { Router } from "express";
import { userService } from "../services/userService";
import { loginRequired } from "../middlewares/loginRequired";

const userRouter = Router();

userRouter.post("/users", async (req, res, next) => {
    try {
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '회원가입' 
         #swagger.description = 'user를 등록한다.' 
        */
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
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '로그인' 
         #swagger.description = '로그인 한다.' 
        */
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
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '사용자 정보 가져오기' 
         #swagger.description = 'user 정보를 가져온다.' 
         #swagger.security = [{ "bearerAuth": [] }] 
        */
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
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '사용자 정보 변경' 
         #swagger.description = 'user 정보를 변경한다.' 
         #swagger.security = [{ "bearerAuth": [] }] 
        */
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
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '사용자 탈퇴' 
         #swagger.description = 'user 정보를 삭제한다.' 
         #swagger.security = [{ "bearerAuth": [] }] 
        */
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
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '레시피 저장' 
         #swagger.description = '마음에 드는 레시피를 마이페이지에 저장한다.' 
         #swagger.security = [{ "bearerAuth": [] }] 
        */
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
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '레시피 삭제' 
         #swagger.description = '마이페이지에 저장된 레시피를 삭제한다.' 
         #swagger.security = [{ "bearerAuth": [] }] 
        */
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
