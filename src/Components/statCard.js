import React, { Component, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "../Css/statCard.css";
const StatCard = ({ stats, mob }) => {
  const isMobile = mob;
  const statFontS = isMobile ? "1.6vw" : "2vw";
  console.log(statFontS);
  const atk = stats.attack > 9 ? 9 : stats.attack;
  const def = stats.defense > 9 ? 9 : stats.defense;
  const dif = stats.difficulty > 9 ? 9 : stats.difficulty;
  const mgk = stats.magic > 9 ? 9 : stats.magic;
  return (
    <div className="stat-container">
      <div className="stat attack">
        <h3
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",

            fontSize: { statFontS },
          }}
        >
          Attack
        </h3>

        <ProgressBar
          maxCompleted={10}
          completed={atk.toString()}
          width={isMobile ? "1200%" : "2500%"}
          bgColor="red"
          animateOnRender={true}
        />
      </div>
      <div className="stat attack">
        <h3
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",

            fontSize: { statFontS },
          }}
        >
          Defense
        </h3>

        <ProgressBar
          completed={def.toString()}
          width={isMobile ? "1200%" : "2500%"}
          bgColor="teal"
          maxCompleted={10}
        />
      </div>
      <div className="stat attack">
        <h3
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",

            fontSize: { statFontS },
          }}
        >
          Difficulty
        </h3>

        <ProgressBar
          maxCompleted={10}
          completed={dif.toString()}
          width={isMobile ? "1200%" : "2500%"}
          bgColor="grey"
          animateOnRender={true}
        />
      </div>
      <div className="stat attack">
        <h3
          style={{
            color: "#FFBEBF",
            fontFamily: "Montserrat,sans-serif",

            fontSize: { statFontS },
          }}
        >
          Magic
        </h3>

        <ProgressBar
          maxCompleted={10}
          completed={mgk.toString()}
          width={isMobile ? "1200%" : "2500%"}
          bgColor="aqua"
          animateOnRender={true}
        />
      </div>
    </div>
  );
};
export default StatCard;
