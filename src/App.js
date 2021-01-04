import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import TourList from "./TourList/tourlistt.js";
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
