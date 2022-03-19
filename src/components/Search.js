import React, { useState, useContext, useEffect, useRef } from "react";
import { WeatherContext } from "./WeatherContext";
import axios from "axios";

function Search() {
  const [city, setCity] = useContext(WeatherContext);
  const [weather, updateWeather] = useContext(WeatherContext);

  const API_KEY = "61ff2ff2a45475c0d60c3ba5c2a56d10";

  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
    console.log(response.data);
  };

  return (
    <section className="search">
      <div className="search-wrapper">
        <div className="search-flex">
          <div className="search-exit">
            <button>X</button>
            <button>X</button>
          </div>
            <form onSubmit={fetchWeather}>
            <input
              placeholder="search location"
              onChange={(event) => setCity(event.target.value)}
              
            />
            <button type="submit">Search</button>
            </form>
          
        </div>
      </div>
    </section>
  );
}

export default Search;
