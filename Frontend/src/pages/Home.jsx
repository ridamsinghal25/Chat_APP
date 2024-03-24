import React, { useEffect, useState } from "react";
import { CreateChat } from "../comonents";
import chatService from "../freeapi/chat";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    chatService.getUserChatList().then((chats) => {
      if (chats) {
        setChats(chats.data.data);
      }
    });
  }, []);

  if (!authStatus) {
    navigate("/login");
  }

  if (authStatus && chats.length === 0) {
    return (
      <div>
        <CreateChat />
      </div>
    );
  }

  return <div>Please wait I am working on it</div>;
}

export default Home;
