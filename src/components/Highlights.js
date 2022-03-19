import React, { useState, useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import axios from "axios";


const Highlights = () => {
  const [city, setCity] = useContext(WeatherContext);
  const [weather, updateWeather] = useContext(WeatherContext);

  return (
    <section className="highlights">
      <h3>Today's Highlights</h3>
      <div className="highlights-container">
        <div className="highlights-upper flex">
          <div className="wind"><p>wind</p></div>
          <div className="humidity"><p>humidity</p></div>
        </div>
        <div className="highlights-lower flex">
          <div className="visibility f1"><p>visibility</p></div>
          <div className="pressure f1"><p>pressure</p></div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
