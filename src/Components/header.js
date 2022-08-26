import React from "react";
import "../Css/header.css";
import logo from "../Assets/logo.png";
import SearchBar from "./searchBar";

class Header extends React.Component {
  routedCallBack = (term) => {
    this.props.routeToParent(term);
  };
  render() {
    return (
      <div className="header-container">
        <div className="overlay">
          <div className="logo-container">
            <img src={logo} className="logo" width={202} height={60}></img>
          </div>
          <SearchBar onChangeData={this.routedCallBack} />
        </div>
      </div>
    );
  }
}
export default Header;
