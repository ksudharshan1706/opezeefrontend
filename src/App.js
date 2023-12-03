// import logo from "./logo.svg";
import { createContext, useState } from "react";
import "./App.css";
import Leftcontainer from "./componants/Leftcontainer";
import Rightcontainer from "./componants/Rightcontainer";
import NewApp from "./componants/NewApp";
import { Route, Routes } from "react-router-dom";
import AppDetails from "./componants/AppDetails";
import Element from "./componants/Element";
export const context = createContext();
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <context.Provider
        value={{
          toggle,
          setToggle,
        }}
      >
        <Routes>
          <Route path="/" element={<Element />} />
          <Route path="app/:id" element={<AppDetails />} />
        </Routes>
      </context.Provider>
    </>
  );
}

export default App;
