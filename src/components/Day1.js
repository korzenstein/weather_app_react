import React, {useState, useContext} from 'react';
import { WeatherContext } from './WeatherContext';
import snow from '../weatherimages/Snow.png'


const Day1 = () => {
    const [city, setCity] = useContext(WeatherContext)
    const [weather, updateWeather] = useContext(WeatherContext)
   
    return(
        <div className="day-card">
            <div className="day-image">
            <img  alt="snow" src={snow} />
        
            </div>
            <div><p>{`${Math.round(weather?.list?.[3].main.temp_max - 273)}°C`}    {`${Math.round(weather?.list?.[7].main.temp_max - 273)}°C`}</p></div>
        </div>
    )
}
export default Day1;

