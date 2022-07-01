import cors from "cors";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { commentRouter } from "./routers/commentRouter";
import { postRouter } from "./routers/postRouter";
import { recipeRouter } from "./routers/recipeRouter";
import { userRouter } from "./routers/userRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "AI Recipe API",
        },
        servers: [{ url: "http://localhost:5001" }],
    },
    apis: [
        "./src/routers/*.js", //
        "./src/db/schemas/*.js",
        // "./src/db/models/tables/*.js",
    ],
};

app.get("/", (req, res) => res.send("AI Recipe API"));

app.use(userRouter);
app.use(commentRouter);
app.use(postRouter);
app.use(recipeRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(errorMiddleware);

export { app };
