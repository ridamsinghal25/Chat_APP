import axios from "axios";
import handleHttpError from "../utils/ErrorHandling";

class ChatService {
  async createOneOnOne() {
    try {
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async getAvailableUsers() {
    try {
      return axios.get("api/v1/chat-app/chats/users");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async getUserChatList() {
    try {
      return axios.get("/api/v1/chat-app/chats");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }
}

const chatService = new ChatService();

export default chatService;
