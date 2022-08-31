import React from "react";
import "../Css/spellCard.css";
import ReactTooltip from "react-tooltip";
class SpellCard extends React.Component {
  levelUp = () => {
    this.props.onLevelUp(this.props.data.abilityName);
  };
  render() {
    const isMobile = this.props.mob;
    const rank = this.props.rank + 1;
    const iconSize = isMobile ? "big" : "huge";
    const numSize = isMobile ? 20 : 30;
    const descSize = isMobile ? 10 : 20;
    const cd = this.props.data.cd.toFixed(0);
    const cost = this.props.data.cost.toFixed(0);

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
                  fontSize: { descSize },
                }}
              >
                {this.props.data.name}
              </h2>
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat,sans-serif",
                  textAlign: "center",
                  fontSize: { descSize },
                }}
              >
                {this.props.data.description}
              </p>
            </div>
          </ReactTooltip>
          <i
            className={`black angle double up icon ${iconSize}`}
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
                fontSize: { numSize },
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
                fontSize: { numSize },
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
                fontSize: { numSize },
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
