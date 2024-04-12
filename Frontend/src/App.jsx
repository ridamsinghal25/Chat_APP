import { useEffect, useState } from "react";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./slices/authSlice";
import { Loader } from "./components/index";
import authService from "./freeapi/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          const user = userData.data.data;
          dispatch(login({ user }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Loader />
  );
}

export default App;
