import React from "react";
import "../Css/searchBar.css";
import { motion } from "framer-motion";
class SearchBar extends React.Component {
  handleChange = (event) => {
    const separated = event.target.value.split(" ");
    const upped = separated.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const term = upped.join("");
    this.props.onChangeData(term);
  };
  render() {
    return (
      <div className="search-div">
        <div className="ui search">
          <motion.input
            whileHover={{ scale: 1.5, zIndex: "5" }}
            style={{
              color: "black",
              fontFamily: "Montserrat,sans-serif",
              textAlign: "center",
              fontSize: 20,
            }}
            className="prompt"
            type="text"
            placeHolder="Search for a champion"
            onChange={this.handleChange}
          />
          <div className="results"></div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
