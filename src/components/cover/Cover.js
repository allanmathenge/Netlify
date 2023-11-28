import React from "react";
import Section from "../section/Section";
import "./cover.css";

const Cover = () => {
  return (
    <div className="cover">
      <div className="article">
        <h2 className="heading">Netlify Composable Web Platform</h2>
        <div className="desc-paragraph">
          <p className="supporting">
            Streamlined orchestration, simplified and unified workflows, and
            real-time updates across infrastructure, workflows, websites and
            teams — all supported by Enterprise-grade security, services, and a
            world-class partner ecosystem.
          </p>
          <button className="learn-more">Explore platform</button>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default Cover;
