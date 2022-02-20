import React, {useState, useContext} from 'react';
import { WeatherProvider } from './WeatherContext';
import Days from './Days'
import Highlights from './Highlights'

const Forecast = () => {
    return(
        <section className="forecast">

        <div className="forecast-wrapper">
        <div className="forecast-container">
            
        <Days/>
        <Highlights/>
        {/* <button className="button" onClick={fetchWeather}>HELP ME</button> */}
        </div>
        </div>
        </section>
    )
}

export default Forecast