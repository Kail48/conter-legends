import React from "react";
import Header from "./header";
import SearchBar from "./searchBar";
import "../Css/App.css";
import { Outlet, Link } from "react-router-dom";
import ImageList from "../Components/imageList";

import videoBg from "../Assets/jhinweb2.mp4";
class App extends React.Component {
  state = { term: "" };
  routeFunction = (terms) => {
    console.log(`${terms} at App js`);
    this.setState({ term: terms });
  };

  render() {
    return (
      <div>
        <video
          src={videoBg}
          muted={true}
          autoPlay={true}
          loop={true}
          className="video-bg"
        />
        <Header routeToParent={this.routeFunction} />
        <ImageList searchString={this.state.term} />
        <Outlet />
      </div>
    );
  }
}
export default App;
