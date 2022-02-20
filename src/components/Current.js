import React, {useState, useContext} from 'react';
import { WeatherContext } from './WeatherContext';
import Search from './Search'
import LightCloud from '../weatherimages/LightCloud.png';

const Current = () => {
    const [city, setCity] = useContext(WeatherContext)
    const [weather, updateWeather] = useContext(WeatherContext)
    
    const month = `${new Date().toLocaleString("en-US", { month: "long" })}`
    const date = `${new Date().toLocaleString("en-US", { day : '2-digit'})}`

    // function titleCase(phrase) {
    //     return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');}


    return(
        
        <section className="current">
            <Search/>
            <div className="current-wrapper">
                <div className="current-container">
                    <div className="current-nav">
                    <p>Search for places</p>
                    <p>0</p>
                </div>
            <div className="current-status">
            <div>
                <img alt="cloud" src={LightCloud}/>
            </div>
            <h1 className="temperature">{Math.round(weather?.list?.[0].main.temp - 273)}C</h1>
            <h4>{weather?.list?.[0].pop}</h4>
            <p>{month} {date}</p>
            
            <div>
        </div>
        <div className="current-city"><h4>{weather?.city?.name} {weather?.city?.country}</h4></div>
    </div>
    </div>
    </div>
    
        </section>
    )
}

export default Current

