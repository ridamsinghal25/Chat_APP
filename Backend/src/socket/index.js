import cookie from "cookie";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ChatEventEnum } from "../constants.js";

const mountJoinChatEvent = (socket) => {
  socket.on(ChatEventEnum.JOIN_CHAT_EVENT, (chatId) => {
    console.log(`User joined the chat 🤝. chatId: `, chatId);

    socket.join(chatId);
  });
};

const mountParticipantTypingEvent = (socket) => {
  socket.on(ChatEventEnum.TYPING_EVENT, (chatId) => {
    console.log("thp");
    socket.in(chatId).emit(ChatEventEnum.TYPING_EVENT, chatId);
  });
};

const mountParticipantStoppedTypingEvent = (socket) => {
  socket.on(ChatEventEnum.STOP_TYPING_EVENT, (chatId) => {
    socket.in(chatId).emit(ChatEventEnum.STOP_TYPING_EVENT, chatId);
  });
};

const initializeSocketIO = (io) => {
  return io.on("connection", async (socket) => {
    try {
      const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

      let token = cookies?.accessToken;

      if (!token) {
        token = socket.handshake.auth?.token;
      }

      if (!token) {
        throw new ApiError(404, "Un-authorized handshake. token is missing");
      }

      const decodedToken = await jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SCERET
      );

      const user = await User.findById(decodedToken._id).select(
        "-password -refreshToken"
      );

      if (!user) {
        throw new ApiError(401, "Un-authorized handshake. Token is invalid");
      }

      socket.user = user;

      socket.join(user._id.toString());
      socket.emit(ChatEventEnum.CONNECTED_EVENT, "hello");
      console.log("User connected 🗼. userId: ", user._id.toString());

      mountJoinChatEvent(socket);
      mountParticipantTypingEvent(socket);
      mountParticipantStoppedTypingEvent(socket);

      socket.on(ChatEventEnum.DISCONNECT_EVENT, () => {
        console.log("user has disconnected 🚫. userId: " + socket.user?._id);
        if (socket.user?._id) {
          socket.leave(socket.user._id);
        }
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  });
};

export { initializeSocketIO };
