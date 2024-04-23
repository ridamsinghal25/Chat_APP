import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  changeUserPassword,
  getCurrentUserDetails,
  loginUser,
  logoutUser,
  registerUser,
  updateUserAccountDetails,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/change-password").patch(verifyJWT, changeUserPassword);

router.route("/current-user").get(verifyJWT, getCurrentUserDetails);

router.route("/update-account").patch(verifyJWT, updateUserAccountDetails);

export default router;
