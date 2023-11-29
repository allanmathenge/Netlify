import React from "react";
import "./breakout.css";

const Breakout = () => {
  return (
    <div className="breakout">
      <div className="input">
        <label htmlFor="email">Stay up to date with Netlify news</label>
        <div className="invalid">
          <input
            className="email"
            required
            type="text"
            placeholder="Email address "
          />
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <div className="security">
        <div className="cookies">
          <li href="/">Trust Center</li>
          <li href="/">Privacy</li>
          <li href="/">Security</li>
          <li href="/">GDPR/CCPA</li>
          <li href="/">Abuse</li>
          <li href="/">Cookie Settings</li>
        </div>
        <div className="copy">
          <li href="/">© 2023 Netlify</li>
        </div>
      </div>
    </div>
  );
};

export default Breakout;
