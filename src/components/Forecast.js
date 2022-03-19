import React, { useState, useContext } from "react";
import { WeatherProvider } from "./WeatherContext";
import Days from "./Days";
import Highlights from "./Highlights";

const Forecast = () => {
  return (
    <section className="forecast">
      <div className="forecast-wrapper">
        <div className="forecast-container">
          <div className="forecast-units">
            <button className="celcius">C</button>
            <button className="feirenheit">F</button>
          </div>
          <Days />
          <Highlights />
        </div>
      </div>
    </section>
  );
};

export default Forecast;
