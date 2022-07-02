import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import authHotles from "./routes/hotles.js";
import authRoom from "./routes/room.js";
import authUsers from "./routes/users.js";
import serverError from "./routes/error.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(cookieParser());
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotle", authHotles);
app.use("/api/room", authRoom);
app.use("/api/user", authUsers);
app.set("port", process.env.PORT || 8080);

//handle server error
app.use(serverError);

export default app;
