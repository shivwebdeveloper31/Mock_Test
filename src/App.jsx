import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavList from "./Components/NavList";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <NavList />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
