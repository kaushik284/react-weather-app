import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import WeatherComp from "./components/WeatherComp";

const api = {
  key: "76a577ed9796aeb58e55a699ab8e421e",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  console.log(api);
  return (
    <Router>
      <Fragment>
        <WeatherComp api={api}></WeatherComp>
      </Fragment>
    </Router>
  );
}

export default App;
