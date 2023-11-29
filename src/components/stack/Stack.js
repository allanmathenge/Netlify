import React from "react";
import "./stack.css";
import twilio from "../../assets/twilio.svg";
import mattel from "../../assets/mattel.svg";
import riotGames from "../../assets/riot-games.svg";
import google from "../../assets/google.svg";
import unilever from "../../assets/unilever.svg";
import peloton from "../../assets/peloton.svg";
import unify from "../../assets/items/1.jpg";
import depoly from "../../assets/items/2.jpg";
import publish from "../../assets/items/3.jpg";

const Stack = () => {
  return (
    <div className="unify">
      <div className="unify-stack">
        <div className="connect">
          <img src={unify} alt="" />
        </div>
        <div className="connect">
          <img src={depoly} alt="" />
        </div>
        <div className="connect">
          <img src={publish} alt="" />
        </div>
      </div>
      <h2>Enterpriese run on Netlify</h2>
      <div className="enterprises">
        <img src={twilio} className="run" alt="twilio" />
        <img src={mattel} className="run" alt="mattel" />
        <img src={riotGames} className="run" alt="riotGames" />
        <img src={google} className="run" alt="google" />
        <img src={unilever} className="run" alt="unilever" />
        <img src={peloton} className="run" alt="peloton" />
      </div>
    </div>
  );
};

export default Stack;
