import React from "react";
import "../Css/spellCard.css";
import ReactTooltip from "react-tooltip";
class SpellCard extends React.Component {
  levelUp = () => {
    this.props.onLevelUp(this.props.data.abilityName);
  };
  render() {
    const rank = this.props.rank + 1;
    const cd = this.props.data.cd.toFixed(0);
    const cost = this.props.data.cost.toFixed(0);
    console.log(this.props.data);
    console.log(this.props.data.abilityName, " ", this.props.rank);
    return (
      <div className="spell-card-container">
        <div className="top">
          <img
            data-tip
            data-for={this.props.data.name}
            src={this.props.data.Img}
            className="avatar"
          />
          <ReactTooltip id={this.props.data.name} place="top">
            <div className="tt-container">
              <img src={this.props.data.Img} className="avatar" />
              <h2
                style={{
                  color: "white",
                  fontFamily: "Montserrat,sans-serif",
                  textAlign: "center",
                  fontSize: 30,
                }}
              >
                {this.props.data.name}
              </h2>
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat,sans-serif",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                {this.props.data.description}
              </p>
            </div>
          </ReactTooltip>
          <i
            className="black angle double up icon huge"
            onClick={this.levelUp}
          ></i>
        </div>
        <div className="bottom">
          <div className="showStat">
            <h2
              style={{
                color: "#d9138a",
                fontFamily: "Montserrat,sans-serif",
                textAlign: "center",
                fontSize: 35,
              }}
            >
              {rank}
            </h2>
            <h3>Rank</h3>
          </div>

          <div className="showStat">
            <h2
              style={{
                color: "#e2d810",
                fontFamily: "Montserrat,sans-serif",
                textAlign: "center",
                fontSize: 35,
              }}
            >
              {cd}
            </h2>
            <h3>CD</h3>
          </div>

          <div className="showStat">
            <h2
              style={{
                color: "#12a4d9",
                fontFamily: "Montserrat,sans-serif",
                textAlign: "center",
                fontSize: 35,
              }}
            >
              {cost}
            </h2>
            <h3>Cost</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default SpellCard;
