import cors from "cors";
import express from "express";
import { userRouter } from "./routers/userRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("AI Recipe API"));

app.use(userRouter);
app.use(errorMiddleware);

export { app };
