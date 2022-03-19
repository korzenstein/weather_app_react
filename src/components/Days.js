import React, {useState, useContext} from 'react';
import { WeatherContext } from './WeatherContext';
import Day1 from './Day1'
import Day2 from './Day2'
import Day3 from './Day3'
import Day4 from './Day4'
import Day5 from './Day5'




const Days = () => {
    // for (let i = 0; i < props.length; i++) {}


    return(
        <section className="days-container">
        <Day1 />
        <Day2 />
        <Day3 />
        <Day4 />
        <Day5 />
        </section>
    )
}

export default Days