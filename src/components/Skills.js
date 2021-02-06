import React from "react";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/js.png";
import nodejsImg from "../assets/nodejs.png";
import reactImg from "../assets/react.png";
import reduxImg from "../assets/redux.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsWrapper">
        <h2>Things I Love</h2>
        <div className="imgWrapper">
          <img src={reactImg} alt="CSS" />
          <img src={reduxImg} alt="CSS" />
          <img src={htmlImg} alt="CSS" />
          <img src={cssImg} alt="CSS" />
          <img src={jsImg} alt="CSS" />
          <img src={nodejsImg} alt="CSS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
