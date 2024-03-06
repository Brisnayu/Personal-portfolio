import { Outlet } from "react-router-dom";
import "./App.css";
import Links from "./components/Links/Links";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Links />
      <Outlet />
    </>
  );
}

export default App;
