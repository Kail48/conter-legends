import React, { Component } from "react";
import "../Css/flipCard.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import StatCard from "./statCard";
import AbilityCarousel from "./abilitycarousel";
import HasteInput from "./hasteInput";
const FlipCard = ({ data }) => {
  console.log(data);
  const [isFlipped, setIsFlipped] = useState(false);
  const [abilityHaste, setAbilityHaste] = useState(0);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const abilityHasterecieved = (receivedAbilityHaste) => {
    setAbilityHaste(receivedAbilityHaste);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="stat-page">
        <button onClick={handleClick} className="ui teal button">
          Check Spells
        </button>
        <StatCard stats={data.stats} />
        <div class="ui divider"></div>
        <div className="lore-container">
          <h2
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Lore
          </h2>
          <p
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {data.lore}
          </p>
        </div>
        <div class="ui divider"></div>
        <div className="tips">
          <h2
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Counter-Tips
          </h2>
          <p
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {data.counterTips.length == 0
              ? "Type jungle Diff"
              : data.counterTips}
          </p>
        </div>
      </div>

      <div className="stat-page">
        <button onClick={handleClick} className="ui violet button">
          See Info
        </button>
        <h2
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: 30,
          }}
        >
          {`${data.name}'s Spells`}
        </h2>
        <img src={data.passiveImageUrl} className="passive-img" />
        <h3
          className="pname"
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {data.passiveName}
        </h3>
        <AbilityCarousel data={data} abilityHaste={abilityHaste} />
        <HasteInput onChangeData={abilityHasterecieved} />
      </div>
    </ReactCardFlip>
  );
};
export default FlipCard;
