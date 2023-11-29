import React from "react";
import netlify from "../../assets/netlify-logo.svg";
import riotGames from "../../assets/riot-games.svg";
import avatar from "../../assets/jason-rose.jpg";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="metrics">
      <div className="stats">
        <div className="stats-figures">
          <p>35M+</p>
          <p>4M+</p>
          <p>99.99%</p>
        </div>
        <div className="stats-desc">
          <p>Websites deployed on Netlif</p>
          <p>Developers</p>
          <p>Uptime SLA</p>
        </div>
      </div>
      <div className="card">
        <div className="testimonial-card">
          <div className="company-logos">
            <img src={netlify} alt="netlify-logo" />
            <p>/</p>
            <img src={riotGames} alt="riot-games" />
          </div>
          <p>
            "We aspire to be the most player-focused gaming company in the
            world, and Netlify absolutely carries the same spirit of aspiring to
            be the most developer-focused technology company in the world…
            <span>
              Ultimately, there was a sense of deep collaboration, understanding
              and meeting our business requirements, and providing extremely
              knowledgeable and highly professional solutions every single step
              along the way.
            </span>{" "}
            "
          </p>
        </div>
        <div className="avatar">
          <img src={avatar} alt="jason-rose" />
          <div className="avatar-desc">
            <h4>Jason Rose</h4>
            <p>Senior Web Developer,</p>
            <p>Riot Games</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
