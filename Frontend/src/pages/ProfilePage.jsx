import React, { useState } from "react";
import { Button, Input } from "../components";
import { useSelector } from "react-redux";

function ProfilePage() {
  const user = useSelector((state) => state.auth.userData);
  const [isProfileEditable, setIsProfileEditable] = useState(false);
  console.log(user);
  return (
    <>
      <div className="min-h-screen bg-[#121212]">
        <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 pt-0 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
          <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3"></aside>
          <section className="col-span-12 text-white  xl:col-span-6">
            <div className="sticky top-[82px] z-10 mt-[1px] bg-[#121212] pb-4 before:absolute before:inset-x-0 before:bottom-full before:h-[17px] before:bg-[#121212] md:top-[100px] md:mt-0">
              <ul className="no-scrollbar flex w-full overflow-x-auto px-4 sm:px-0">
                <li className="mr-2 inline-block shrink-0">
                  <Button
                    className={`inline-block ${
                      isProfileEditable ? "" : "bg-[#2c2c2c]"
                    }  px-6 py-1.5`}
                    onClick={() => setIsProfileEditable(false)}
                  >
                    Profile
                  </Button>
                </li>
                <li className="mr-2 inline-block shrink-0">
                  <Button
                    className={`inline-block ${
                      isProfileEditable ? "bg-[#2c2c2c]" : ""
                    }  px-6 py-1.5`}
                    onClick={() => setIsProfileEditable(true)}
                  >
                    Edit profile
                  </Button>
                </li>
                <li className="mr-2 inline-block shrink-0">
                  <Button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                    Change password
                  </Button>
                </li>
              </ul>
            </div>
            <div className="mb-4 mt-8 flex flex-wrap gap-y-4 p-4 md:p-0">
              {isProfileEditable ? (
                <div className="flex flex-col-reverse w-full items-center justify-center">
                  <Input
                    id="avatar-input-1"
                    hidden=""
                    type="file"
                    className="p-5"
                  />
                  <label
                    htmlFor="avatar-input-1"
                    className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full">
                      <img
                        alt="avatar-inp"
                        src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full rounded-full object-cover"
                      />
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
                </div>
              ) : (
                <div className="flex flex-col-reverse w-full items-center justify-center">
                  <label
                    htmlFor="avatar-input-1"
                    className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full">
                      <img
                        alt="avatar-inp"
                        src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </label>
                </div>
              )}
              <div className="flex w-full flex-col items-start justify-start gap-2 xl:w-1/2 xl:pr-2">
                <label className="text-xs text-slate-200">First name</label>
                <Input
                  placeholder={isProfileEditable ? "Enter first name" : ""}
                  autoComplete="false"
                  className={`w-full ${
                    isProfileEditable
                      ? "border-[1px] border-white"
                      : "border-none "
                  }  bg-black p-4 text-white placeholder:text-gray-500`}
                  readOnly={!isProfileEditable}
                  value={isProfileEditable ? "" : user?.firstname}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2 xl:w-1/2 xl:pl-2">
                <label className="text-xs text-slate-200">Last name</label>
                <Input
                  placeholder={isProfileEditable ? "Enter last name" : ""}
                  autoComplete="false"
                  className={`w-full ${
                    isProfileEditable
                      ? "border-[1px] border-white"
                      : "border-none "
                  }  bg-black p-4 text-white placeholder:text-gray-500`}
                  readOnly={!isProfileEditable}
                  value={isProfileEditable ? "" : user?.lastname}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Email</label>
                <Input
                  placeholder={isProfileEditable ? "Enter your email" : ""}
                  autoComplete="false"
                  className={`w-full ${
                    isProfileEditable
                      ? "border-[1px] border-white"
                      : "border-none "
                  }  bg-black p-4 text-white placeholder:text-gray-500`}
                  readOnly={!isProfileEditable}
                  value={isProfileEditable ? "" : user?.email}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Username</label>
                <Input
                  placeholder={isProfileEditable ? "Enter your username" : ""}
                  autoComplete="false"
                  className={`w-full ${
                    isProfileEditable
                      ? "border-[1px] border-white"
                      : "border-none "
                  }  bg-black p-4 text-white placeholder:text-gray-500`}
                  readOnly={!isProfileEditable}
                  value={isProfileEditable ? "" : user?.username}
                />
              </div>
              <Button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                {isProfileEditable ? "Edit Profile" : "Logout"}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
