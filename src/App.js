import React, { Fragment } from "react";

import "./App.scss";
import "./index.css"

import Card from "./components/Card";

const App = () => {
  return (
    <Fragment>
    	<h1> Covid-19 Tracker </h1>
      <Card />
    </Fragment>
  );
};

export default App;
