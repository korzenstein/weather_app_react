import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css"
import Forecast from "./components/Forecast";
import Current from "./components/Current";
import {WeatherProvider} from "./components/WeatherContext"

function App() {

  return (
    <WeatherProvider>
    <div className="app">
      
      <Current/>
      <Forecast/>
      
    </div>
    </WeatherProvider>
  );
}

export default App;
