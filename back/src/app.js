import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger/swagger-output.json";
import { userAuthRouter } from "./routers/userRouter";
import { commentRouter } from "./routers/commentRouter";
import { postRouter } from "./routers/postRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("AI Recipe API"));

app.use(userAuthRouter);
app.use(commentRouter);
app.use(postRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

app.use(errorMiddleware);

export { app };
