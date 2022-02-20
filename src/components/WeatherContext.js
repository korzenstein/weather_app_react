import React, { createContext, useState } from "react";
import axios from "axios"

export const WeatherContext = createContext();

export const WeatherProvider = props => {
    const [city, setCity] = useState();
    const [weather, updateWeather] = useState();
    return (
        <WeatherContext.Provider 
        value={[city, setCity], [weather, updateWeather]}
        >
        {props.children}
        </WeatherContext.Provider>
    );

};










