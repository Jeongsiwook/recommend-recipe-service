import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger/swagger-output.json";
import { commentRouter } from "./routers/commentRouter";
import { postRouter } from "./routers/postRouter";
import { recipeRouter } from "./routers/recipeRouter";
import { userRouter } from "./routers/userRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("AI Recipe API"));

app.use(userRouter);
app.use(commentRouter);
app.use(postRouter);
app.use(recipeRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

app.use(errorMiddleware);

export { app };
