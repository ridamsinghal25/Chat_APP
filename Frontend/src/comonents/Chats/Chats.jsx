import React from "react";

function Chats() {
  return (
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
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
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
          </button>
        </div>
      </header>
      <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
        <button
          className="peer fixed h-full w-full md:hidden"
          aria-label="mobile-chatlist-toggler"
          aria-details="Remove when using in your project. Following button is only to toggle chatlist sidebar"
        ></button>
        <div className="fixed right-full top-[77px] z-10 h-full w-full border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:block md:w-[30%] md:border-r-[1px]">
          <div className="flex w-full items-center justify-start gap-2 border-b-[1px] border-white p-4">
            <input
              placeholder="Search chat..."
              className="w-full bg-transparent px-2 text-white !outline-none placeholder:text-gray-500 md:px-4"
            />
            <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
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
            </button>
            <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
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
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Jane Smith</p>
                    <p className="text-gray-400">2 hours ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    Hi there! How have you been? It&#x27;s been a while since we
                    last caught up. Let&#x27;s plan to meet up soon.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Alice Smith</p>
                    <p className="text-gray-400">4 hours ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    How&#x27;s it going on your end? I heard you had an exciting
                    trip last week. Tell me all about it!
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/13847652/pexels-photo-13847652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Bob Johnson</p>
                    <p className="text-gray-400">Yesterday</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    What&#x27;s for dinner tonight? I&#x27;m craving some
                    Italian food. Any recommendations?
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Emily Davis</p>
                    <p className="text-gray-400">2 days ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    Can you help me with this coding problem? I&#x27;m stuck on
                    it for hours now.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Michael Wilson</p>
                    <p className="text-gray-400">2 weeks ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    See you tomorrow at the park. Don&#x27;t forget to bring
                    your running shoes!
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Sophia Anderson</p>
                    <p className="text-gray-400">2 weeks ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    I miss you so much! It&#x27;s been ages since we hung out.
                    Let&#x27;s plan something soon.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/7775640/pexels-photo-7775640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Liam Brown</p>
                    <p className="text-gray-400">3 weeks ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    Let&#x27;s meet up for coffee. I have some exciting news to
                    share with you!
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Olivia Lee</p>
                    <p className="text-gray-400">4 weeks ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    I have some big news! Guess what? I&#x27;m getting married
                    next month!
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Noah White</p>
                    <p className="text-gray-400">1 month ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    How&#x27;s the weather there? I&#x27;m planning a weekend
                    hike and hoping for good weather.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Ava Garcia</p>
                    <p className="text-gray-400">2 months ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    Good morning! Did you catch the sunrise today? It was
                    breathtaking.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/7775640/pexels-photo-7775640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Ethan Martinez</p>
                    <p className="text-gray-400">3 months ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    Let&#x27;s go for a long walk by the beach this evening. The
                    weather is perfect.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">Mia Jones</p>
                    <p className="text-gray-400">4 months ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    Happy birthday! I hope you have an amazing day filled with
                    joy and surprises.
                  </p>
                </div>
              </div>
            </li>
            <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
              <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src="https://images.pexels.com/photos/7775640/pexels-photo-7775640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                  <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                    <p className="text-gray-400">James Harris</p>
                    <p className="text-gray-400">5 months ago</p>
                  </div>
                  <p className="text-xs text-white md:text-sm">
                    What&#x27;s new with you lately? I&#x27;ve been swamped with
                    work, but I miss our chats.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="h-full w-full md:w-[70%]">
          <div className="flex w-full items-center justify-between gap-2 border-b-[1px] border-white p-4">
            <div className="flex w-full items-center justify-start gap-3">
              <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:hidden md:h-10 md:w-10">
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  ></path>
                </svg>
              </button>
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <p className="font-semibold text-white">Jane smith</p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
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
              </button>
              <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
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
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-150px)] w-full p-0 md:h-[calc(100vh-158px)] md:p-4">
            <div className="flex h-[calc(100%-53px)] w-full flex-col-reverse gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%]">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full max-w-[70%] flex-col gap-2">
                  <p className="text-xs">Jane Smith</p>
                  <div className="relative w-fit bg-[#343434] p-3 text-sm after:absolute after:left-0 after:top-0 after:border-r-[15px] after:border-t-[15px] after:border-r-transparent after:border-t-[#121212]">
                    <div className="flex w-full items-center justify-center gap-1.5 px-3 py-1">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">5 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    I&#x27;m good too, just catching up on some reading and
                    enjoying the weather outside.
                  </div>
                  <div className="grid w-full grid-cols-2 items-start justify-start gap-1 md:max-w-[90%] md:gap-2 ml-auto">
                    <img
                      className="flex aspect-video w-full flex-shrink-0 object-cover"
                      src="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="avatar"
                    />
                    <img
                      className="flex aspect-video w-full flex-shrink-0 object-cover"
                      src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="avatar"
                    />
                    <img
                      className="flex aspect-video w-full flex-shrink-0 object-cover"
                      src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">10 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    That sounds lovely! What book are you currently reading?
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">15 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    I&#x27;m reading &#x27;The Great Gatsby&#x27; by F. Scott
                    Fitzgerald. It&#x27;s a classNameic!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">20 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    Oh, I&#x27;ve heard great things about that book. Enjoy your
                    reading!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">25 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    Thanks! It&#x27;s such a beautifully written novel.
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">45 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    I can&#x27;t wait to see what happens next in the series.
                    It&#x27;s been so captivating!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">50 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    I completely understand. It&#x27;s always exciting when a
                    series keeps you hooked.
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">55 minutes ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    Absolutely! Well, I should get back to work now. Catch up
                    with you later!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">18 hours ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    Sounds like a plan! Let&#x27;s do it!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">19 hours ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    Count me in too!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">20 hours ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    Great! I&#x27;ll make a reservation then.
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">21 hours ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    Awesome! Looking forward to it.
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                  <p className="text-[10px] md:text-xs">
                    Dan Abramov
                    <span className="ml-2 text-gray-400">22 hours ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                    Catch up with you later!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">23 hours ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    Sure thing! Take care!
                  </div>
                </div>
              </div>
              <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                  <p className="text-[10px] md:text-xs">
                    Jane Smith
                    <span className="ml-2 text-gray-400">6 days ago</span>
                  </p>
                  <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                    That&#x27;s the spirit! Keep up the good work.
                  </div>
                  <div className="grid w-full grid-cols-2 items-start justify-start gap-1 md:max-w-[90%] md:gap-2">
                    <img
                      className="flex aspect-video w-full flex-shrink-0 object-cover"
                      src="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="avatar"
                    />
                    <img
                      className="flex aspect-video w-full flex-shrink-0 object-cover"
                      src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="avatar"
                    />
                    <img
                      className="flex aspect-video w-full flex-shrink-0 object-cover"
                      src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]">
              <img
                className="hidden aspect-square h-5 w-5 flex-shrink-0 rounded-full object-cover md:flex md:h-10 md:w-10"
                src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <input
                placeholder="Message..."
                className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
              />
              <button className="hidden h-5 w-5 flex-shrink-0 items-center justify-center p-1 md:flex md:h-10 md:w-10">
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
              </button>
              <button className="flex h-7 w-7 flex-shrink-0 items-center  justify-center p-1 md:h-10 md:w-10">
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
              </button>
              <button className="flex h-7 w-7 flex-shrink-0 items-center justify-center  bg-[#ae7aff] p-1 md:h-10 md:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 text-black"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
