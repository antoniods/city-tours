import React, { Component } from "react";
import Tour from "../Tour/tour.js";
// import "./TourList.scss";
import { tourData } from "../tourData.js";

export class TourList extends Component {
  constructor() {
    super();
    this.state = {
      tours: tourData,
    };
  }
  render() {
    console.log(this.state.tours);
    return <Tour />;
  }
}

export default TourList;
