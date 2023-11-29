import React from "react";
import simpleIcon from "../../assets/Simpleicons.svg";
import socials from "../../assets/items/socials.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Ready to try Netlify?</h2>
      <button>Request demo</button>
      <div className="cluster">
        <img className="simple-icon" src={simpleIcon} alt="Netlify icon" />
        <img src={socials} alt="socials" />
      </div>
    </div>
  );
};

export default Home;
