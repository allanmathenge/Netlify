import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <h1 className="headline">
          Connect everything. &nbsp;
          <span>Build anything.</span>
        </h1>

        <p className="supporting">
          Netlify is the modern development platform for Enterprises to realize
          the speed,{" "}
          <span>
            agility and performance of a scalable, composable web architecture.
          </span>
        </p>

        <div className="hero-buttons">
          <button className="explorePlatform">Explore platform</button>
          <button className="requestDemo">Request demo</button>
        </div>
      </div>
      <div className="youtube-live">
        <div className="embeded-video">
          <div className="video-content">
            {/* Video iframe was removed */}
            <FaPlayCircle className="play-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
