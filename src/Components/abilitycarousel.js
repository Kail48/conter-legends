import React from "react";
import "../Css/abilityCarousel.css";
import SpellCard from "./spellCard";
import { getCd } from "../data/leagueData";
import { useState } from "react";
const AbilityCarousel = (props) => {
  const [qRank, setQRank] = useState(0);
  const [wRank, setWRank] = useState(0);
  const [eRank, setERank] = useState(0);
  const [rRank, setRRank] = useState(0);

  const aH = isNaN(props.abilityHaste) ? 0 : props.abilityHaste;
  const isMobile = props.mob;
  const qCooldown = getCd(props.data.qCooldown[qRank], aH);
  const qCost = props.data.qCost[qRank];
  const wCooldown = getCd(props.data.wCooldown[wRank], aH);
  const wCost = props.data.wCost[wRank];
  const eCooldown = getCd(props.data.eCooldown[eRank], aH);
  const eCost = props.data.eCost[eRank];
  const rCooldown = getCd(props.data.rCooldown[rRank], aH);
  const rCost = props.data.rCost[rRank];

  const qdata = {
    abilityName: "q",
    name: props.data.qname,
    description: props.data.qDescription,
    Img: props.data.qImageUrl,
    cd: qCooldown,
    cost: qCost,
  };
  const wdata = {
    abilityName: "w",
    name: props.data.wname,
    description: props.data.wDescription,
    Img: props.data.wImageUrl,
    cd: wCooldown,
    cost: wCost,
  };
  const edata = {
    abilityName: "e",
    name: props.data.ename,
    description: props.data.eDescription,
    Img: props.data.eImageUrl,
    cd: eCooldown,
    cost: eCost,
  };
  const rdata = {
    abilityName: "r",
    name: props.data.rname,
    description: props.data.qDescription,
    Img: props.data.rImageUrl,
    cd: rCooldown,
    cost: rCost,
  };
  const levelUp = (abilityName) => {
    if (abilityName === "q") setQRank((qRank + 1) % 5);
    else if (abilityName === "w") setWRank((wRank + 1) % 5);
    else if (abilityName === "e") setERank((eRank + 1) % 5);
    else setRRank((rRank + 1) % 3);
  };
  return (
    <div className="carousel-container">
      <SpellCard data={qdata} rank={qRank} onLevelUp={levelUp} mob={isMobile} />

      <SpellCard data={wdata} rank={wRank} onLevelUp={levelUp} mob={isMobile} />
      <SpellCard data={edata} rank={eRank} onLevelUp={levelUp} mob={isMobile} />
      <SpellCard data={rdata} rank={rRank} onLevelUp={levelUp} mob={isMobile} />
    </div>
  );
};
export default AbilityCarousel;
