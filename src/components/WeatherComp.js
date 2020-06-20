import React, { useState } from "react";

import "../App.css";

const WeatherComp = (props) => {
  const [query, setQuery] = useState("Pune");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      let url = `${props.api.baseURL}weather?q=${query}&units=metric&APPID=${props.api.key}`;
      //let url = `${props.api.baseURL}weather?q=${query}&APPID=${props.api.key}`;
      console.log(url);
      fetch(`${url}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}  ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 25
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Place..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        <div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}{" "}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°C </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
};

export default WeatherComp;
