import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  render() {
    const { id, img, name, city } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article>
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>

        <div className="tour-info">
          <h3>{city}</h3>
          <h3>{name}</h3>
        </div>
      </article>
    );
  }
}
