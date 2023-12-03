import React, { useContext } from "react";
import "../App.css";
import Leftcontainer from "./Leftcontainer";
import NewApp from "./NewApp";
import Rightcontainer from "./Rightcontainer";
import { context } from "../App";
const Element = () => {
  const { toggle, setToggle } = useContext(context);
  return (
    <div className="App">
      <Leftcontainer />
      {toggle ? <NewApp /> : <Rightcontainer />}
    </div>
  );
};

export default Element;
