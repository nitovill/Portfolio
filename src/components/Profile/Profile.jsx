import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import myImage from "../../assets/images/download.png";
import Timeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";

const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {""}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
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
        <Timeline icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title="name" text={resumeData.name} />
          <CustomTimeLineItem title="title" text={resumeData.title} />
          <CustomTimeLineItem title="email" text={resumeData.email} />
          <CustomTimeLineItem title="phone" text={resumeData.phone} />
          {Object.keys(resumeData.social).map((key) => (
            <CustomTimeLineItem
              title={key}
              text={resumeData.social[key].text}
              link={resumeData.social[key].link}
            />
          ))}
        </Timeline>
        <br />
        <button>My button</button>
      </div>
    </div>
  );
};

export default Profile;
