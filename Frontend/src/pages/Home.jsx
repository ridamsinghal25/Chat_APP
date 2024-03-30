import React, { useEffect, useState } from "react";
import { CreateChat, Loader, Login, Button, Input } from "../comonents";
import chatService from "../freeapi/chat";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  console.log(chats);

  useEffect(() => {
    if (authStatus) {
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
    }
  }, []);

  if (!authStatus) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  if (authStatus && chats.length === 0) {
    return <div>{isLoading ? <Loader /> : <CreateChat />}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="bg-[#121212]">
            <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
              <h1 className="text-xl font-extrabold md:text-3xl">Inbox</h1>
              <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white md:h-8 md:w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    ></path>
                  </svg>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-sm text-white md:h-5 md:w-5 md:text-base">
                    4
                  </span>
                </span>
                <div className="h-11 w-11 rounded-full border-2 border-white">
                  <img
                    src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>
                <Button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  Create a chat
                </Button>
              </div>
            </header>
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
                      <Link
                        to={`/chat-message/${chat._id}`}
                        state={{ anotherUser: chat.participants[1] }}
                      >
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
      )}
    </div>
  );
}

export default Home;
