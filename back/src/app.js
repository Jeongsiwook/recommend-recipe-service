import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger/swagger-output.json";
import { userAuthRouter } from "./routers/userRouter";
import { postRouter } from "./routers/postRouter";
import { commentRouter } from "./routers/commentRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("AI Recipe API"));

app.use(userAuthRouter);
app.use(postRouter);
app.use(commentRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

app.use(errorMiddleware);

export { app };
