import React, { Component } from "react";
import "../Css/flipCard.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import StatCard from "./statCard";
import AbilityCarousel from "./abilitycarousel";
import HasteInput from "./hasteInput";
const FlipCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [abilityHaste, setAbilityHaste] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const loreFont = isMobile ? "2vw" : "1em";
  const headFont = isMobile ? "2.5vw" : "3vw";
  const titleFont = isMobile ? "1.5vw" : "2vw";
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const abilityHasterecieved = (receivedAbilityHaste) => {
    setAbilityHaste(receivedAbilityHaste);
  };
  React.useEffect(() => {
    const devWidth = window.innerWidth;
    if (devWidth <= 500) {
      setIsMobile(true);
      console.log(devWidth);
    }
  }, []);

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection={isMobile ? "horizontal" : "vertical"}
    >
      <div className="stat-page">
        <button onClick={handleClick} className="ui teal button">
          Check Spells
        </button>
        <StatCard stats={data.stats} mob={isMobile} />
        <div class="ui divider"></div>
        <div className="lore-container">
          <h2
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: { headFont },
            }}
          >
            Lore
          </h2>
          <p
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: { loreFont },
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
              fontSize: { headFont },
            }}
          >
            Counter-Tips
          </h2>
          <p
            style={{
              color: "#FFBEBF",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: { loreFont },
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
          className="title"
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: { titleFont },
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
            fontSize: { loreFont },
          }}
        >
          {data.passiveName}
        </h3>
        <AbilityCarousel
          data={data}
          abilityHaste={abilityHaste}
          mob={isMobile}
        />
        <HasteInput onChangeData={abilityHasterecieved} mob={isMobile} />
      </div>
    </ReactCardFlip>
  );
};
export default FlipCard;
