import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      new ApiError(404, "Invalid token");
    }

    const decodedToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SCERET
    );

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      new ApiError(401, "Invalid Access token");
    }

    req.user = user;
    next();
  } catch (error) {
    new ApiError(401, error?.message || "Invalid access token");
  }
});
