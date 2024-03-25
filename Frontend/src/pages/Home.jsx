import React, { useEffect, useState } from "react";
import { CreateChat, Login } from "../comonents";
import chatService from "../freeapi/chat";
import { useSelector } from "react-redux";

function Home() {
  const [chats, setChats] = useState([]);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    chatService
      .getUserChatList()
      .then((chats) => {
        if (chats) {
          setChats(chats.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!authStatus) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  if (authStatus && chats.length === 0) {
    return (
      <div>
        <CreateChat />
      </div>
    );
  }

  return <div>Hello World</div>;
}

export default Home;
