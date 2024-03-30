import { Header } from "./comonents";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
