import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Header.css";
import { db } from "../firebase";
/* import Swal from "sweetalert2";
 */
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        /* Swal.fire({
          title: "Saved!",
          text: "Your message was sent!",
          icon: "success",
          background: "white",
          confirmButtonColor: "#06141c",
          iconColor: "#06141c",
        }); */
        alert("Your message was sent!");
      })
      .catch((error) => {
        /* Swal.fire({
          title: "",
          text: "Your message was sent!",
          icon: "error",
          background: "white",
          confirmButtonColor: "#06141c",
          iconColor: "#06141c",
        }); */
        alert("Error!");
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  const pathName = props?.location?.pathname;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} className="header_navlink" to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded style={{ color: "white" }} />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.social).map((key) => (
            <a
              href={resumeData.social[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.social[key].icon}
            </a>
          ))}
        </div>

        <Button
          className="custom_btn"
          endIcon={<Telegram />}
          onClick={handleOpen}
        >
          <span className="btn_text">Contact me</span>
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h6>Contact Form</h6>
              <form onSubmit={handleSubmit} style={{ paddingBottom: "25px" }}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  name="email"
                  value={email}
                  label="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  value={message}
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ marginBottom: "8px" }}
                />

                <Button
                  className="custom_btn"
                  type="submit"
                  variant="contained"
                >
                  <span className="btn_text">Send</span>
                </Button>
              </form>
            </div>
          </Fade>
        </Modal>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
