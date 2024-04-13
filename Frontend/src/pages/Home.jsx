import React, { useEffect, useState } from "react";
import { Loader, Button, Input } from "../components";
import chatService from "../freeapi/chat";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    chatService
      .getUserChatList()
      .then((chats) => {
        if (chats) {
          setChats(chats.data.data);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    !isLoading && chats.length === 0 && navigate("/create-chat");
  }, [chats, isLoading]);

  return (
    <div>
      {!isLoading ? (
        <div>
          <div className="bg-[#121212]">
            <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
              <Button
                className="peer fixed h-full w-full md:hidden"
                aria-label="mobile-chatlist-toggler"
                aria-details="Remove when using in your project. Following Button is only to toggle chatlist sidebar"
              ></Button>
              <div className="flex flex-col justify-center items-center top-[77px] z-10 h-full w-full border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:block md:w-[30%] md:border-r-[1px]">
                <div className="flex w-full items-center justify-start gap-2 border-b-[1px] border-white p-4">
                  <Input
                    placeholder="Search chat..."
                    className="w-full bg-transparent px-2 text-white !outline-none placeholder:text-gray-500 md:px-4"
                  />
                  <Button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </Button>
                </div>

                <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
                  {chats.map((chat) => (
                    <li
                      key={chat._id}
                      className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6"
                    >
                      <Link to={`/chat-message/${chat._id}`}>
                        <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                          <img
                            className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            src={chat.participants[1]?.avatar?.url}
                            alt="avatar"
                          />
                          <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                            <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                              <p className="text-gray-400">
                                {chat.participants[1]?.username}
                              </p>
                              <p className="text-gray-400">
                                {new Date(chat.createdAt).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }
                                )}
                              </p>
                            </div>
                            <p className="text-xs text-white md:text-sm">
                              {chat?.lastMessage?.content}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-[70%]"></div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
