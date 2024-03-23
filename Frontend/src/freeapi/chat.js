import axios from "axios";

class ChatService {
  async getUserChatList() {
    try {
      return axios.get("/api/v1/chat-app/chats");
    } catch (error) {
      console.log("Error while retriving user chats: ", error);
      throw new Error(error);
    }
  }
}

const chatService = new ChatService();

export default chatService;
