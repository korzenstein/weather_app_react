import React, { useState, useContext, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";

import Search from "./Search";
// cloud images imported below
import Clear from "../weatherimages/Clear.png";
import Hail from "../weatherimages/Hail.png";
import HeavyCloud from "../weatherimages/HeavyCloud.png";
import HeavyRain from "../weatherimages/HeavyRain.png";
import LightCloud from "../weatherimages/LightCloud.png";
import LightRain from "../weatherimages/LightRain.png";
import Shower from "../weatherimages/Shower.png";
import Sleet from "../weatherimages/Sleet.png";
import Snow from "../weatherimages/Snow.png";
import Thunderstorm from "../weatherimages/Thunderstorm.png";

const Current = () => {
  const [city, setCity] = useContext(WeatherContext);
  const [weather, updateWeather] = useContext(WeatherContext);

  const month = `${new Date().toLocaleString("en-US", { month: "long" })}`;
  const date = `${new Date().toLocaleString("en-US", { day: "2-digit" })}`;

  const clouds = weather?.list?.[0].weather?.[0].description;


  const cloudImage = (cloudType) => {
    const values = {
      clear: Clear,
      hail: Hail,
      "heavy clouds": HeavyCloud,
      "heavy rain": HeavyRain,
      "light rain": LightRain,
      showers: Shower,
      sleet: Sleet,
      snow: Snow,
      thunderstorm: Thunderstorm,
    };
    const cloudImage = cloudType.map((i) => values[i] === cloudType);
    return cloudImage;
  };

  
  useEffect(() => {
    console.log("useEffect used");
    
  }, [updateWeather, weather, city, setCity]);

  

  return (
    <section className="current">
      <Search />
      <div className="current-container">
        <div className="current-nav">
          {/* <button className="button" onClick={handleToggleBody}>Search Here</button> */}
          <button>0</button>
        </div>
        <div className="current-img">
          <img alt="cloud" src={LightCloud} />
        </div>
        <h1 className="current-temperature">
          {Math.round(weather?.list?.[0].main.temp - 273)}C
        </h1>
        <h4>{clouds}</h4>
        <div className="current-city-date">
          <p>
            Today • {date} {month}
          </p>
          <h4>{weather?.city?.name}</h4>
          
        </div>
      </div>
    </section>
  );
};

export default Current;
