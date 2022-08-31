import React, { Component } from "react";
import ImageCard from "./imageCard";
import "../Css/imageList.css";
import {
  getChampData,
  getChampList,
  getSquareImage,
} from "../data/leagueData.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

class ImageList extends React.Component {
  state = { champList: [], imageList: {} };
  mainList = [];
  mainimageList = {};
  constructor(props) {
    super(props);

    getChampList().then((champL) => {
      const imageL = {};
      champL.forEach((champ) => {
        imageL[champ] = getSquareImage(champ);
      });
      this.mainList = champL;
      this.mainimageList = imageL;
      this.setState({ champList: champL, imageList: imageL });
    });
  }
  slideLeft = () => {
    const slider = document.getElementById("carousal");
    slider.scrollLeft = slider.scrollLeft - 150;
  };
  slideRight = () => {
    const slider = document.getElementById("carousal");

    slider.scrollLeft = slider.scrollLeft + 150;
  };

  render() {
    let renderList = [];
    let renderImage = {};
    const { searchString } = this.props;
    console.log(searchString);
    if (searchString === "") {
      renderList = this.state.champList.map((x) => x);
      renderImage = { ...this.state.imageList };
    } else {
      renderList = this.state.champList.filter((string) =>
        string.includes(searchString)
      );

      renderList.forEach((name) => (renderImage[name] = getSquareImage(name)));
    }

    const nameCards = renderList.map((name) => {
      return (
        <ImageCard
          key={name}
          name={name}
          source={renderImage[name]}
          onChangeData={this.onChangeString}
        />
      );
    });

    return (
      <div className="list-container" id="carousal">
        <MdChevronLeft
          size={100}
          id="left"
          className="left-scroll"
          onClick={this.slideLeft}
        />
        {nameCards}
        <MdChevronRight
          size={100}
          className="right-scroll"
          id="right"
          onClick={this.slideRight}
        />
      </div>
    );
  }
}
export default ImageList;
