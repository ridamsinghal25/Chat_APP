import axios from "axios";
import handleHttpError from "../utils/ErrorHandling";

class ChatService {
  async createOne_On_OneChat({ receiverId }) {
    try {
      return await axios.post(`api/v1/chat-app/chats/c/${receiverId}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async sendMessage({ chatId, content }) {
    try {
      return await axios.post(`/api/v1/chat-app/messages/${chatId}`, {
        content,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async getMessage({ chatId }) {
    try {
      return await axios.get(`/api/v1/chat-app/messages/${chatId}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async deleteOne_On_OneChat({ chatId }) {
    try {
      return await axios.delete(`/api/v1/chat-app/chats/remove/${chatId}`);
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
