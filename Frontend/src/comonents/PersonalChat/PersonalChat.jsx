import React, { useEffect, useState } from "react";
import { Button, Select } from "../index";
import { useNavigate } from "react-router-dom";
import chatService from "../../freeapi/chat";
import { useForm } from "react-hook-form";

function PersonalChat() {
  const [error, setError] = useState("");
  const [availableUsers, setAvailableUsers] = useState([]);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const startChattingWithUser = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log("Error while retriving users", error);
      setError(error.message);
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
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
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
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>{" "}
            Create a chat
          </Button>
        </div>
      </header>
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
                      <Select
                        placeholder="Select a user..."
                        autoComplete="false"
                        className="w-full bg-[#121212] py-4 pl-4 text-white placeholder:text-gray-500 focus:outline-none"
                        options={availableUsers}
                        {...register("user", {
                          required: "Please Select a user",
                        })}
                      />
                      {errors.user?.message && (
                        <p className="text-red-500 italic">
                          &#9888; {errors.user?.message}
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
