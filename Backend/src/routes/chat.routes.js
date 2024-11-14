import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createOrGetAOneOnOneChat,
  searchAvailableUsers,
} from "../controllers/chat.controllers.js";

const router = Router();

router.use(verifyJWT);

router.route("/users").get(searchAvailableUsers);

router.route("/c/:receiverId").post(createOrGetAOneOnOneChat);

export default router;
