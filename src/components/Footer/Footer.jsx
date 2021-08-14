import React from "react";
import "./Footer.css";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="fotter_right">
        <Typography className="footer_coopyright">
          Developed with{" "}
          <a href="/" target="_blank" style={{ color: "brown" }}>
            Material UI, React and Firebase
          </a>
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
