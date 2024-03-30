import React, { useEffect, useState } from "react";
import { Button, Select } from "../index";
import { useNavigate } from "react-router-dom";
import chatService from "../../freeapi/chat";
import { useForm } from "react-hook-form";

function PersonalChat() {
  const [error, setError] = useState("");
  const [availableUsers, setAvailableUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const startChattingWithUser = async (data) => {
    setError("");
    try {
      const personalChat = await chatService.createOneOnOneChat(data);

      const chatId = personalChat?.data?.data?._id;
      const anotherUser = personalChat?.data?.data?.participants[1];

      if (personalChat) {
        navigate(`/chat-message/${chatId}`, { state: { anotherUser } });
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    chatService
      .getAvailableUsers()
      .then((response) => {
        const { data } = response;
        setAvailableUsers(data.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-[#121212] bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-0 text-center md:items-center md:p-2">
            <div className="relative w-full transform overflow-hidden border-t-[1px] border-white bg-[#121212] text-left text-white transition-all md:my-8 md:w-full md:max-w-5xl md:border-[1px]">
              <div className="flex items-center justify-between border-b-[1px] border-white p-4">
                <p className="text-xl font-bold">Create Chat</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                  role="button"
                  onClick={() => navigate(-1)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              {error && (
                <p className="text-red-600 mt-8 w-full italic text-center">
                  {error}
                </p>
              )}
              <form onSubmit={handleSubmit(startChattingWithUser)}>
                <div className="flex w-full flex-col gap-4 p-4 md:gap-6 md:p-6">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <label className="text-xs text-slate-200">
                      Select a user
                    </label>
                    <div className="w-full border-[1px] border-white pr-4">
                      {!isLoading && availableUsers.length > 0 ? (
                        <Select
                          placeholder="Select a user..."
                          autoComplete="false"
                          className="w-full bg-[#121212] py-4 pl-4 text-white placeholder:text-gray-500 focus:outline-none"
                          options={availableUsers}
                          defaultValue=""
                          content="Please Select a user"
                          {...register("receiverId", {
                            required: "Please Select a user",
                          })}
                        />
                      ) : (
                        <p>{isLoading ? "Loading..." : "No user available"}</p>
                      )}
                      {errors.receiverId?.message && (
                        <p className="text-red-500 italic">
                          &#9888; {errors.receiverId?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:gap-6">
                    <Button
                      className="w-full bg-red-500 p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                    >
                      Start Chatting
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalChat;
