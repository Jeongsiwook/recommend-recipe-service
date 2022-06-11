import is from "@sindresorhus/is";
import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { userService } from "../services/userService";

const userRouter = Router();

userRouter.post("/users", async (req, res, next) => {
    try {
        /*
     #swagger.tags = ['Users'] 
     #swagger.summary = '회원가입' 
     #swagger.description = 'user를 등록한다.' 
    */
        if (is.emptyObject(req.body)) {
            throw new Error("headers의 Content-Type을 application/json으로 설정해주세요");
        }

        // req (request) 에서 데이터 가져오기
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // 데이터를 유저 db에 추가하기
        const newUser = await userService.addUser({
            name,
            email,
            password,
        });

        if (newUser.errorMessage) {
            throw new Error(newUser.errorMessage);
        }

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});

userRouter.post("/users/login", async function (req, res, next) {
    try {
        /*
     #swagger.tags = ['Users'] 
     #swagger.summary = '로그인' 
     #swagger.description = '로그인 한다.' 
    */

        // req (request) 에서 데이터 가져오기
        const email = req.body.email;
        const password = req.body.password;

        // 위 데이터를 이용하여 유저 db에서 유저 찾기
        const user = await userService.getUser({ email, password });

        if (user.errorMessage) {
            throw new Error(user.errorMessage);
        }

        res.status(200).send(user);
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

        // URI로부터 사용자 id를 추출함.
        const userId = req.currentUserId;
        // body data 로부터 업데이트할 사용자 정보를 추출함.
        const name = req.body.name ?? null;
        const description = req.body.description ?? null;

        const toUpdate = { name, description };

        // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
        const updatedUser = await userService.setUser({ userId, toUpdate });

        if (updatedUser.errorMessage) {
            throw new Error(updatedUser.errorMessage);
        }

        res.status(200).json(updatedUser);
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

        const userId = req.params.id ?? req.currentUserId;
        const currentUserInfo = await userService.getUserInfo({ userId });

        if (currentUserInfo.errorMessage) {
            throw new Error(currentUserInfo.errorMessage);
        }

        res.status(200).send(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

// jwt 토큰 기능 확인용, 삭제해도 되는 라우터임.
userRouter.get("/afterlogin", loginRequired, (req, res, next) => {
    /*
     #swagger.security = [{"bearerAuth": []}]
    */
    res.status(200).send(`안녕하세요 ${req.currentUserId}님, jwt 웹 토큰 기능 정상 작동 중입니다.`);
});

userRouter.delete("/users", loginRequired, async (req, res, next) => {
    try {
        /*
         #swagger.tags = ['Users'] 
         #swagger.summary = '사용자 탈퇴' 
         #swagger.description = 'user 정보를 삭제한다.' 
         #swagger.security = [{ "bearerAuth": [] }] 
        */

        // req (request) 에서 id 가져오기
        const userId = req.currentUserId;
        // 위 id를 이용하여 db에서 데이터 삭제하기
        const result = await userService.deleteUser({
            userId,
        });

        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        res.status(200).send(result);
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

        const storedRecipe = await userService.addRecipe({
            userId,
            title,
            ingredients,
            content,
        });

        if (storedRecipe.errorMessage) {
            throw new Error(storedRecipe.errorMessage);
        }
        res.status(201).json(storedRecipe);
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

        const recipeId = req.params.id;
        const result = await userService.deleteRecipe({
            recipeId,
        });

        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
});

export { userRouter };
