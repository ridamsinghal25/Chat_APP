import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";
import { initializeSocketIO } from "./socket/index.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  },
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// initialize socket io
initializeSocketIO(io);

// routes import

import userRouter from "./routes/user.routes.js";

// route declaration
app.use("/api/v1/users", userRouter);

export { httpServer };
