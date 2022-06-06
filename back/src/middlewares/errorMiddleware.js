const errorMiddleware = (err, req, res, next) => {
    // 터미널에 노란색으로 출력됨.
    console.log("\x1b[33m%s\x1b[0m", err);
    return res.status(400).json(JSON.stringify(err.message));
};

export { errorMiddleware };
