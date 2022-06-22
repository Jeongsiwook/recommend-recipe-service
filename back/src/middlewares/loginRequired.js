import jwt from "jsonwebtoken";

const loginRequired = async (req, res, next) => {
    const userToken = req.headers["authorization"];
    if (!userToken) {
        console.log("서비스 사용 요청이 있습니다.하지만, Authorization 토큰: 없음");
        return res.status(400).send("로그인한 유저만 사용할 수 있는 서비스입니다.");
    }

    try {
        const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
        const jwtDecoded = jwt.verify(userToken, secretKey);
        const userId = jwtDecoded.userId;
        req.currentUserId = userId;
        return next();
    } catch (error) {
        return res.status(400).send("정상적인 토큰이 아닙니다. 다시 한 번 확인해 주세요.");
    }
};

export { loginRequired };
