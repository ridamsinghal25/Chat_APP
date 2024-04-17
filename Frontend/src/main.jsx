import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Home from "./pages/Home.jsx";
import ChatMessage from "./pages/ChatMessage.jsx";
import CreateChat from "./pages/CreateChat.jsx";
import PersonalChat from "./pages/PersonalChat.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { AuthLayout } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/create-personal-chat",
        element: (
          <AuthLayout authentication>
            <PersonalChat />
          </AuthLayout>
        ),
      },
      {
        path: "/create-chat",
        element: (
          <AuthLayout authentication>
            <CreateChat />
          </AuthLayout>
        ),
      },
      {
        path: "/chat-message/:chatId",
        element: (
          <AuthLayout authentication>
            <ChatMessage />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication>
            <ProfilePage />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
