import React, { Component } from "react";
import Tour from "../Tour/tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export class TourList extends Component {
  constructor() {
    super();
    this.state = {
      tours: tourData,
    };
  }

  //method
  removeTour = (id) => {
    console.log(id);
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}

export default TourList;
