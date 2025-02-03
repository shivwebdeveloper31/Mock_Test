import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavList from "./Components/NavList";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <NavList />
        <Outlet />
      </div>
    </>
  );
}

export default App;
