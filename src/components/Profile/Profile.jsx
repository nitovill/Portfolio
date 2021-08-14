import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import myImage from "../../assets/images/download.png";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonIcon from "@material-ui/icons/Person";
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
          <a href={link} target="_blank" rel="noreferrer">
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
        <CustomTimeline icon={<PersonIcon />}>
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
          <a
            href="https://media-exp1.licdn.com/dms/document/C4E1FAQGX5kAzOKuJgw/feedshare-document-pdf-analyzed/0/1628370431749?e=1629068400&v=beta&t=OEYUUpHJhBXpEmt_XJ0krKGcDmOj_aJU8NKuvsDiY3A"
            style={{ textDecoration: "none" }}
          >
            <CustomBtn text={"Download CV"} icon={<GetAppIcon />}></CustomBtn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
