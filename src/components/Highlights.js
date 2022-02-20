import React, {useState, useContext} from 'react';
import { WeatherContext } from './WeatherContext';

const Highlights = () => {
    const [city, setCity] = useContext(WeatherContext)
    const [weather, updateWeather] = useContext(WeatherContext)

    return(

        
        <div>
        <p>Testing</p>
        <p>{weather?.city?.sunset}</p>

        </div>
    //     <section className="highlights-container">
    //         <h1>Welcome</h1>
    //         {/* <p>{fetchCity}</p> */}
    //         <form>
    //         <input
    //         placeholder="city"
    //         onChange={(e) => setCities(e.target.value)}
    //         />
    //         <button type="submit"></button>
    //         </form>
    
    // </section>  
            
            
    )
}

export default Highlights