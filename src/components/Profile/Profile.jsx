import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import myImage from "../../assets/images/download.png";
import Timeline from "../Timeline/Timeline";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Villafuerte Nelson Mariano</Typography>
        <Typography className="title">Full Stack Developer</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="hola" />
      </figure>
      <div className="profile_information">
        <Timeline />
        <br />
        <button>My button</button>
      </div>
    </div>
  );
};

export default Profile;
