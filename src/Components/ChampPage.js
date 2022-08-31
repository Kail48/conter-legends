import React from "react";
import { useLocation } from "react-router-dom";
import "../Css/champPage.css";
import { getChampData, getSplashImage, getCd } from "../data/leagueData";
import Card from "./Card";
import { useState } from "react";
import Loader from "./loading";
import bg from "../Assets/bgvid.mp4";
import FlipCard from "./flipCard";

export default function ChampDetails(props) {
  const [abilityHaste, setAbilityHaste] = useState(null);
  const [champData, setChampData] = useState(null);
  const [champ, setChamp] = useState(null);
  
  const location = useLocation();

  React.useEffect(() => {
    console.log(window.innerWidth);
    const champ = location.state.champ;
    getChampData(champ).then((data) => {
      setChampData(data);
      setChamp(champ);
    });
  }, []);

  return champData == null ? (
    <Loader />
  ) : (
    <div className="main-div">
      <video autoPlay={true} muted={true} loop={true} id="myVideo">
        <source src={bg} type="video/mp4" />
      </video>

      <div className="show-case">
        <Card
          name={champData.name}
          imageUrl={getSplashImage(champ)}
          epithet={champData.title}
          lore={champData.lore}
        />
        <FlipCard data={champData} />
      </div>
    </div>
  );
}
