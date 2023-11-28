import React from "react";
import "./section.css";
import svg from "../../assets/section.svg";

const Section = () => {
  return (
    <div className="section">
      <p className="section-paragragh">3 solutions</p>
      <img src={svg} alt="logo" />
      <p className="section-paragragh">1 platform</p>
    </div>
  );
};

export default Section;
