import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import myImage from "../../assets/images/download.png";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import CustomBtn from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {""}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="hola" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title="Name" text={resumeData.name} />
          <CustomTimeLineItem title="Title" text={resumeData.title} />
          <CustomTimeLineItem title="Email" text={resumeData.email} />
          <CustomTimeLineItem title="Phone" text={resumeData.phone} />
          {Object.keys(resumeData.social).map((key) => (
            <CustomTimeLineItem
              title={key}
              text={resumeData.social[key].text}
              link={resumeData.social[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <CustomBtn text={"Download CV"} icon={<GetAppIcon />}></CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Profile;
