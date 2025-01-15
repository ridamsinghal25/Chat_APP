import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useSocket } from "../context/SocketContext";
import { requestHandler } from "../utils";
import { deleteMessage, getChatMessages, getUserChats } from "../api";

const CONNECTED_EVENT = "connected";
const DISCONNECT_EVENT = "disconnect";
const JOIN_CHAT_EVENT = "joinChat";
const NEW_CHAT_EVENT = "newChat";
const TYPING_EVENT = "typing";
const STOP_TYPING_EVENT = "stopTyping";
const MESSAGE_RECEIVED_EVENT = "messageReceived";
const LEAVE_CHAT_EVENT = "leaveChat";
const UPDATE_GROUP_NAME_EVENT = "updateGroupName";
const MESSAGE_DELETE_EVENT = "messageDeleted";

function ChatPage() {
  const { user, logout } = useAuth();
  const { socket } = useSocket();

  const currentChat = useRef(null);
  const typingTimeoutRef = useRef(null);

  const [isConnected, setIsConnected] = useState(false);

  const [openAddChat, setOpenAddChat] = useState(false);
  const [loadingChats, setLoadingChats] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState([]);

  const [isTyping, setIsTyping] = useState(false);
  const [selfTyping, setSelfTyping] = useState(false);

  const [message, setMessage] = useState("");
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const [attachedFiles, setAttachedFiles] = useState([]);

  // Function to update last message of a specified chat to update the chat list
  const updateChatLastMessage = (chatToUpdateId, message) => {
    const chatToUpdate = chats.find((chat) => chat._id === chatToUpdateId);

    chatToUpdate.lastMessage = message;

    chatToUpdate.updatedAt = message?.updatedAt;

    setChats([
      chatToUpdate,
      ...chats.filter((chat) => chat._id !== chatToUpdateId),
    ]);
  };

  // Function to update chats last message specifically in case of deletion
  const updateChatLastMessageOnDeletion = (chatToUpdateId, message) => {
    const chatToUpdate = chats.find((chat) => chat._id === chatToUpdateId);

    if (chatToUpdate.lastMessage?._id === message._id) {
      requestHandler(
        async () => await getChatMessages(chatToUpdateId),
        null,
        (req) => {
          const { data } = req;

          chatToUpdate.lastMessage = data[0];
          setChats([...chats]);
        },
        alert
      );
    }
  };

  // Function to get users chats
  const getChats = async () => {
    requestHandler(
      async () => await getUserChats(),
      setLoadingChats,
      (res) => {
        const { data } = res;
        setChats(data || []);
      },
      alert
    );
  };

  // Function to get current chat messages
  const getMessages = async () => {
    if (!currentChat.current?._id) return alert("No chat is selected");

    if (!socket) return alert("socket is not available");

    socket.emit(JOIN_CHAT_EVENT, currentChat.current?._id);

    setUnreadMessages(
      unreadMessages.filter((msg) => msg.chat !== currentChat.current?._id)
    );

    requestHandler(
      async () => await getChatMessages(currentChat.current?._id),
      setLoadingMessages,
      (res) => {
        const { data } = res;

        setMessages(data || []);
      },
      alert
    );
  };

  // Function to send a chat message
  const sendMessage = async () => {
    if (!currentChat.current?._id) return alert("No chat is selected");

    socket.emit(STOP_TYPING_EVENT, currentChat.current?._id);

    requestHandler(
      async () =>
        await sendMessage(currentChat.current?._id, message, attachedFiles),
      null,
      (res) => {
        setMessage("");
        setAttachedFiles("");
        setMessages((prev) => [res.data, ...prev]);
        updateChatLastMessage(currentChat.current?._id, res.data);
      },
      alert
    );
  };

  // Function to delete a chat message
  const deleteChatMessage = async (message) => {
    requestHandler(
      async () => await deleteMessage(message.chat, message._id),
      null,
      (res) => {
        setMessages((prev) => prev.filter((msg) => msg.chat !== res.data._id));

        updateChatLastMessageOnDeletion(message.chat, message);
      },
      alert
    );
  };

  // Function to handle message change
  const handleOnMessageChange = (e) => {
    setMessage(e.target.value);

    if (!socket || !isConnected) return;

    if (!selfTyping) {
      setSelfTyping(true);

      socket.emit(TYPING_EVENT, currentChat.current?._id);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    const timerLength = 3000;

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit(STOP_TYPING_EVENT, currentChat.current?._id);

      setSelfTyping(false);
    }, timerLength);
  };

  const onConnect = () => {
    setIsConnected(true);
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  const handleOnSocketTyping = (chatId) => {
    if (chatId !== currentChat.current?._id) return;

    setIsTyping(true);
  };

  const handleOnSocketStopTyping = (chatId) => {
    if (chatId !== currentChat.current?._id) return;

    setIsTyping(false);
  };

  const onMessageDelete = async () => {};

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
}

export default ChatPage;
