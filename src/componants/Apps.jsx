import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Apps = ({ data }) => {
  return (
    <Link to={`/app/${data._id}`}>
      <div className="card">
        <div className="application">
          <img
            style={{
              width: "100px",
              ojectfit: "cover",
              borderRadius: "10px",
            }}
            src={data.imgUrl}
            alt="cricket"
          />
        </div>
        <h4>{data.name}</h4>
      </div>
    </Link>
  );
};

export default Apps;
