import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import TourList from "./components/TourList/tourlist";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
