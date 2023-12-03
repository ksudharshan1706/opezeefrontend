import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Leftcontainer from "./Leftcontainer.jsx";
import "../App.css";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Leftbar from "./Leftbar.jsx";
import Button from "@mui/material/Button";
const AppDetails = () => {
  const [app, setApp] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    try {
      axios
        .delete(`https://opezeebackend.onrender.com/api/application/${id}`)
        .then(() => console.log("here"))
        .then(() => navigate("/"));
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://opezeebackend.onrender.com/api/application/${id}`
        );
        setApp(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  console.log(app);
  return (
    <div className="App">
      <Leftbar />
      <div className="appdetails">
        <div className="appdetailsLayout">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3>{app.name}</h3>
          </div>
          <div className="application">
            <img
              style={{
                width: "100px",
                ojectfit: "cover",
                borderRadius: "10px",
              }}
              src={app.imgUrl}
              alt="cricket"
            />
          </div>
        </div>
        <div>
          <h3>App Description:</h3>
          <p>{app.desc}</p>
        </div>
        {/* <a src={app.link} target="blank">
          link
        </a>
        <PlayArrowIcon /> */}
        <Button
          variant="contained"
          style={{ margin: "50px" }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AppDetails;
