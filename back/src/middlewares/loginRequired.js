import jwt from "jsonwebtoken";
import refreshToken from "./refreshToken";

function login_required(req, res, next) {
    const userToken = req.headers["authorization"]?.split(" ")[1] ?? "null";

    if (userToken === "null") {
        console.log("서비스 사용 요청이 있습니다. 하지만, Authorization 토큰: 없음");
        return res.status(400).send("로그인한 유저만 사용할 수 있는 서비스입니다.");
    }

    try {
        const jwtDecoded = jwt.verify(userToken, process.env.JWT_SECRET_KEY);
        const user_id = jwtDecoded.user_id;
        req.currentUserId = user_id;
        return next();
    } catch (err) {
        if (err.message === "jwt expired") refreshToken(req, res);
        return res.status(400).send(`Token Error: ${err}`);
    }
}

export { login_required };
