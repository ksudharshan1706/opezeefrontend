import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Apps from "./Apps";
const Rightcontainer = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://opezeebackend.onrender.com/api/application"
      );
      setApps(res.data);
    };
    getData();
  }, []);
  return (
    <div className="rightContainer">
      {apps.map((data, index) => (
        <Apps data={data} key={index} />
      ))}
    </div>
  );
};

export default Rightcontainer;
