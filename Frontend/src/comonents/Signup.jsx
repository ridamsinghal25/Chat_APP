import React, { useState } from "react";
import { Input } from "./index";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../freeapi/auth";
import { login } from "../slices/authSlice";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createAccount = async (data) => {
    try {
      setError("");
      const userData = await authService.createAccount(data);

      if (userData) {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) {
          dispatch(login(currentUser));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-11/12 max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">Register</h1>
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </header>
      <div className="mx-auto flex w-full items-stretch justify-between gap-10">
        <div className="fixed left-0 top-0 hidden h-screen w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:block md:w-1/3"></div>
        <div className="ml-auto mt-28 flex w-full flex-col items-start justify-start p-6 sm:max-w-4xl md:w-2/3 lg:px-10">
          <div className="w-full text-center">
            <h1 className="mb-3 text-5xl font-extrabold text-white">
              Register
            </h1>
            <p className="text-xs text-slate-400">
              Before we chat, please create your account
            </p>
          </div>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(createAccount)} className="w-full">
            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
              {/* <div className="flex w-full items-center justify-center">
              <input id="avatar-input-1" hidden="" type="file" />
              <label
                htmlFor="avatar-input-1"
                className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-[#ae7aff] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </span>
              </label>
            </div> */}
              {/* <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">First name</label>
                <input
                  placeholder="Enter a first name..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Last name</label>
                <input
                  placeholder="Enter a last name..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
            </div> */}
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Username</label>
                <Input
                  placeholder="Enter a username..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  {...register("username", {
                    required: "username is required",
                  })}
                />
                {errors.username?.message && (
                  <p className="text-red-600 italic">
                    &#9888; {errors.username?.message}
                  </p>
                )}
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Email</label>
                <Input
                  placeholder="Enter an email..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  {...register("email", {
                    required: "email is required",
                    validate: {
                      matchEmailPattern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
                {errors.email?.message && (
                  <p className="text-red-600 italic">
                    &#9888; {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Password</label>
                <Input
                  placeholder="Enter a password..."
                  autoComplete="false"
                  type="password"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password should be of more than 6 characters",
                    },
                  })}
                />
                {errors.password?.message && (
                  <p className="text-red-600 italic">
                    &#9888; {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="mr-4 flex items-center">
                <Input
                  type="checkbox"
                  id="checkbox-2"
                  // className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
                  name="checkbox-2"
                  {...register("checkbox-2", {
                    required: "You need to agree to terms and conditions",
                  })}
                />
                {/* <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
                <svg
                  className="pointer-events-none hidden h-3 w-3 fill-current text-white"
                  version="1.1"
                  viewBox="0 0 17 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                    </g>
                  </g>
                </svg>
              </div> */}
                <div className="ml-3 text-sm leading-6 w-[450px] ">
                  <label
                    htmlFor="checkbox-2"
                    className="text-sm font-medium text-white"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
                {errors["checkbox-2"]?.message && (
                  <p className="text-red-600 italic">
                    &#9888; {errors["checkbox-2"]?.message}
                  </p>
                )}
              </div>
              <button
                type="sumbit"
                className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
              >
                Create Account
              </button>
              <p className="text-sm font-light text-white">
                Already registered?{" "}
                <span className="cursor-pointer font-bold hover:underline">
                  <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                  >
                    Sign in to your account
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
