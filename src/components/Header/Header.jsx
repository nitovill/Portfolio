import React from "react";
import {
  Button,
  Form,
  FormControl,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Header.css";
import CustomBtn from "../Button/Button";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
  const pathName = props?.location?.pathname;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Submit = () => {
    console.log("hola");
    const msg = {
      to: "nitovillafuerte@outlook.com",
      from: "nitovillafuerte@outlook.com", // aqui hay que poner el correo de la pag
      subject: "Trekker Rent",
      text: "Gracias por confiar en trekker!",
      html: "<h2>Gracias por confiar en trekker!</h2>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(console.log(error));
      });
  };
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} className="header_navlink" to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.social).map((key) => (
            <a href={resumeData.social[key].link} target="_blank">
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
              <div style={{ paddingBottom: "25px" }}>
                <TextField fullWidth name="name" label="Name" />
                <TextField fullWidth name="email" label="E-mail" />
                <TextField fullWidth name="message" label="Message" />
              </div>

              <CustomBtn text="Submit" onClick={Submit} />
              <button onClick={Submit}></button>
            </div>
          </Fade>
        </Modal>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
