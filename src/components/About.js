import React from "react";
import Html from "../assets/HTML5_Badge.svg";
import Css from "../assets/css-3.svg";
import Javascript from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import "./About.css";

function About() {
  return (
    <section id="about">
      <span className="aboutTitle">What I know</span>
      <span className="aboutDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript
      </span>

      <div className="aboutBars">
        <div className="aboutBar">
          <img src={Html} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>HTML</h2>
            <p>Hyper Text Markep Language</p>
          </div>
        </div>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={Css} alt="CSS" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>CSS</h2>
            <p>Cascading Style sheet</p>
          </div>
        </div>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={Javascript} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>JAVASCRIPT</h2>
            <p>JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={reactLogo} alt="REACT" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>REACT</h2>
            <p>REACT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
