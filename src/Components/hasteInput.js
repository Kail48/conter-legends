import React, { Component } from "react";
import "../Css/hasteInput.css";
class HasteInput extends React.Component {
  handleChange = (e) => {
    if (!isNaN(e.target.value)) {
      const abilityHaste = parseInt(e.target.value);
      this.props.onChangeData(abilityHaste);
    }
  };
  render() {
    const isMobile = this.props.mob;
    const labelSize = isMobile ? "1.6vw" : "1.2vw";
    return (
      <div className="input-container">
        <h3
          className="top-label"
          style={{
            color: "black",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: { labelSize },
          }}
        >
          Ability
        </h3>
        <input
          onChange={this.handleChange}
          type="number"
          className="haste-input-field"
          style={{
            color: "black",
            fontFamily: "Montserrat,sans-serif",
            fontWeight: "bolder",
            textAlign: "center",
            fontSize: "2.5em",
          }}
        />
        <h3
          className="bot-label"
          style={{
            color: "black",
            fontFamily: "Montserrat,sans-serif",
            textAlign: "center",
            fontSize: { labelSize },
          }}
        >
          Haste
        </h3>
      </div>
    );
  }
}
export default HasteInput;
