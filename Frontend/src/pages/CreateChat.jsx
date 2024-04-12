import React from "react";
import { Button } from "../components/index";
import { Link } from "react-router-dom";

function CreateChat() {
  return (
    <div>
      <div className="min-h-screen bg-[#121212]">
        <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center">
          <Link to="/create-personal-chat">
            <Button className="mt-14 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="mr-2 h-5 w-5 text-[#121212]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Create a Personal chat
            </Button>
          </Link>
          <div className="mx-auto my-3 mt-8 flex w-full max-w-md items-center justify-center gap-4 text-white">
            <hr className="w-full border-[0.1px] border-white" />
            <p className="text-sm">OR</p>
            <hr className="w-full border-[0.1px] border-white" />
          </div>
          <Button className="mt-5 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-2 h-5 w-5 text-[#121212]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            Create a Group chat
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateChat;
