import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Newapp.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import app from "../firebase.js";
import { useNavigate } from "react-router-dom";

const NewApp = () => {
  const [img, setImg] = useState(null);
  const [imgper, setImgPerc] = useState(0);
  // const [name, setName] = useState("");
  // const [desc, setDesc] = useState("");
  // const [link, setLink] = useState("");
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleUpload = (e) => {
    e.preventDefault();
    axios
      .post("https://opezeebackend.onrender.com/api/application", {
        ...inputs,
      })
      .then(() => console.log("add new app"))
      .then(() => navigate("/"));
    // navigate("/");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  return (
    <div className="NewApp">
      <h4 className="labelTag">Application Name:</h4>
      <TextField
        name="name"
        id="outlined-basic"
        variant="outlined"
        placeholder="Application  Name"
        className="inputTag"
        onChange={handleChange}
        // color="white"
      />
      <h4 className="labelTag">Application Img:</h4>
      {imgper > 0 ? (
        "Uploading:" + imgper + "%"
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
          style={{
            border: "2px solid grey",
            height: "20px",
          }}
          className="inputTag"
          // className="imgupload"
        />
      )}

      <h4 className="labelTag">Application Desc:</h4>
      <TextField
        name="desc"
        id="outlined-basic"
        variant="outlined"
        placeholder="App Decription"
        className="inputTag"
        onChange={handleChange}
      />
      <h4 className="labelTag">Application Link:</h4>
      <TextField
        name="link"
        id="outlined-basic"
        variant="outlined"
        placeholder="Application Link"
        className="inputTag"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        style={{ margin: "50px" }}
        onClick={handleUpload}
      >
        Add
      </Button>
    </div>
  );
};

export default NewApp;
