import React from "react";
import "./Resume.css";
import { Grid } from "@material-ui/core";
import { Typography, Paper } from "@material-ui/core";
import { TimelineItem, TimelineContent, TimelineDot } from "@material-ui/lab";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import WorkIcon from "@material-ui/icons/Work";
import { School } from "@material-ui/icons";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Education and experiences */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((exp) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {exp.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<School />}>
                {resumeData.education.map((exp) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {exp.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}

      <Grid
        container
        spacing={3}
        justify="space-between"
        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12}>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        {resumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className="skills">
              <Typography variant="h6" className="skill_title">
                {skill.title}
              </Typography>
              {skill.description.map((e) => (
                <Typography variant="body2" className="skill_description">
                  <TimelineDot variant={"outlined"} className="timeline_dot" />
                  {e}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
