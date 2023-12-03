import React from "react";
import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Leftbar = () => {
  const navigate = useNavigate();
  const functionToggle = () => {
    navigate("/");
  };

  return (
    <div className="leftContainer">
      <img
        src="//img1.wsimg.com/isteam/ip/d89c45e6-66af-403e-b058-7e567eaac69f/LogoWhite-29d4eb1.png/:/rs=h:36,cg:true,m/qt=q:95"
        srcset="//img1.wsimg.com/isteam/ip/d89c45e6-66af-403e-b058-7e567eaac69f/LogoWhite-29d4eb1.png/:/rs=w:91,h:36,cg:true,m/cr=w:91,h:36/qt=q:95, //img1.wsimg.com/isteam/ip/d89c45e6-66af-403e-b058-7e567eaac69f/LogoWhite-29d4eb1.png/:/rs=w:183,h:72,cg:true,m/cr=w:183,h:72/qt=q:95 2x, //img1.wsimg.com/isteam/ip/d89c45e6-66af-403e-b058-7e567eaac69f/LogoWhite-29d4eb1.png/:/rs=w:274,h:108,cg:true,m/cr=w:274,h:108/qt=q:95 2x"
        alt="OpEzee"
        data-ux="ImageLogo"
        data-aid="HEADER_LOGO_IMAGE_RENDERED"
        class="x-el x-el-img c1-1 c1-2 c1-3m c1-16 c1-13 c1-12 c1-p c1-r c1-17 c1-3p c1-3q c1-3r c1-1w c1-3s c1-1b c1-1c c1-1d c1-1e c1-1j c1-1k c1-b c1-c c1-3t c1-3u c1-1n c1-3v c1-3w c1-3x c1-3y c1-3z c1-40 c1-41 c1-42 c1-43 c1-44 c1-45 c1-d c1-46 c1-47 c1-48 c1-e c1-f c1-g"
        className="imageLogo"
      ></img>
      <h6 style={{ color: "white" }}>www.opezee.com</h6>
      <HomeIcon onClick={functionToggle} className="setting" />
    </div>
  );
};

export default Leftbar;
