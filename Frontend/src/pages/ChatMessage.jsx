import React, { useEffect, useState } from "react";
import { Input, Button } from "../comonents/index";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import chatService from "../freeapi/chat";
import { useSelector } from "react-redux";

function ChatMessage() {
  const [currentUser, setCurrentUser] = useState("");
  const [chats, setChats] = useState([]);

  const { chatId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const anotherUser = state?.anotherUser;

  const user = useSelector((state) => state.auth.userData);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const content = data.message;
      const newMessage = await chatService.sendMessage({ chatId, content });

      if (newMessage) {
        setChats((prevChats) => [...prevChats, newMessage.data.data]);

        reset({
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteChat = async () => {
    try {
      const removedChat = await chatService.deleteOne_On_OneChat({ chatId });

      if (removedChat) {
        alert("chat deleted successfully");
        navigate(-1);
      }
    } catch (error) {
      alert("Error while deleting chat");
    }
  };

  useEffect(() => {
    chatService.getMessage({ chatId }).then((chats) => {
      setChats(chats.data.data);
    });

    setCurrentUser(user._id);
  }, []);

  return (
    <div className="bg-[#121212] h-full">
      <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full  items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
        <div className="h-full w-full md:w-[70%]">
          <div className="flex w-full items-center justify-between gap-2 border-b-[1px] border-white p-4">
            <div className="flex w-full items-center justify-start gap-3">
              <Button
                className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1  md:h-10 md:w-10"
                onClick={() => navigate(-1)}
              >
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
                    d="M13.25 18.75L8.75 12l4.5-6.75"
                  ></path>
                </svg>
              </Button>
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src={anotherUser.avatar.url}
                alt="avatar"
              />
              <p className="font-semibold text-white">{anotherUser.username}</p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <Button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  ></path>
                </svg>
              </Button>
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
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </Button>
              <Button
                className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10"
                onClick={deleteChat}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    fill="white"
                  ></path>{" "}
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-150px)] w-full p-0 md:h-[calc(100vh-158px)] md:p-4">
            <div className="flex flex-col-reverse h-[calc(100%-53px)] w-full gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
              {chats.map((chat) => (
                <div
                  key={chat._id}
                  className={`flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0  ${
                    chat.sender._id === currentUser
                      ? "ml-auto flex-row-reverse"
                      : "mr-0"
                  }`}
                >
                  <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src={
                      chat.sender._id === currentUser
                        ? user.avatar.url
                        : anotherUser.avatar.url
                    }
                    alt="avatar"
                  />
                  <div
                    className={`flex w-full flex-col gap-1 md:gap-2 ${
                      chat.sender._id === currentUser
                        ? "items-end justify-end"
                        : ""
                    }`}
                  >
                    <p className="text-[10px] md:text-xs">
                      {chat.sender._id === currentUser
                        ? "You"
                        : anotherUser.username}
                      <span className="ml-2 text-gray-400">
                        {new Date(chat.createdAt).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </span>
                    </p>
                    <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                      {chat.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]">
                <img
                  className="hidden aspect-square h-5 w-5 flex-shrink-0 rounded-full object-cover md:flex md:h-10 md:w-10"
                  src={user?.avatar?.url}
                  alt="avatar"
                />
                <Input
                  placeholder="Message..."
                  className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
                  {...register("message", {
                    required: true,
                  })}
                />
                {/* <Button className="hidden h-5 w-5 flex-shrink-0 items-center justify-center p-1 md:flex md:h-10 md:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  ></path>
                </svg>
              </Button>
              <Button className="flex h-7 w-7 flex-shrink-0 items-center  justify-center p-1 md:h-10 md:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  ></path>
                </svg>
              </Button> */}
                <Button
                  type="submit"
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center  bg-[#ae7aff] p-1 md:h-10 md:w-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-black"
                  >
                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
