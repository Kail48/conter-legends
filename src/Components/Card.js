import React from "react";

import "../Css/card.css";

const Card = (props) => {
  const fetchedTitle = props.epithet;
  const title = fetchedTitle.charAt(0).toUpperCase() + fetchedTitle.slice(1);

  return (
    <div className="card-wrapper">
      <img src={props.imageUrl} alt={props.name} className="splash" />
      <div className="context">
        <h2
          style={{
            color: "white",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: "3vh",
          }}
        >
          {props.name}
        </h2>
        <h3
          style={{
            color: "white",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: "2vh",
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
export default Card;
