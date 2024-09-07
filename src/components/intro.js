import React from "react";
import "./Intro.css";
import Hire from "../assets/hireme.png";
import ReactLogo from "../assets/react.svg";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName">Abhishek</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I am skilled Web Developer with experience in creating
          <br />
          visually appealing and user friendly websites.
        </p>
        <Link to="">
          <button className="btn2">
            <img src={Hire} alt="Img" className="btnImg2"></img> Hire Me
          </button>
        </Link>
      </div>
      <img src={ReactLogo} alt="React Logo" className="logo2"></img>
    </section>
  );
}

export default Intro;
