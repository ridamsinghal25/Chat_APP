import axios from "axios";
// import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  // const url = "/api/v1/public/randomusers";
  // const res = axios.get(url);
  // res.then((res) => {
  //   console.log(res.data.message);
  // });
  return (
    <>
      {/* <h1>{res.data.message}</h1> */}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
