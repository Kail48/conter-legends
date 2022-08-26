import React, { Component } from "react";
import "../Css/imageCard.css";
import { motion } from "framer-motion";
import ChampPage from "./ChampPage";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  return (
    <motion.div className="card-container">
      <Link to="/champDetails" state={{ champ: props.name }}>
        <div className="ui fluid card">
          <div className="image">
            <img src={props.source} alt={props.name} />
          </div>
          <div className="content">
            <h3 className="header" style={{ textAlign: "center" }}>
              {props.name}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default ImageCard;
