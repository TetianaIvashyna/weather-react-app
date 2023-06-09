import React, { useState } from "react"; 

import LocationTime from "./LocationTime";
import WeatherPicture from "./WeatherPicture";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";
import DayForecast from "./DayForecast";

export default function Weather(props) { 
    function toCelsius() {
        setTemperature(Math.round(props.currentweather.temperature));
        setIsCelsius(true);
    }

    function toFahrenheit() {
        let fahrenheit = props.currentweather.temperature * (9 / 5) + 32;
        setTemperature(Math.round(fahrenheit));
        setIsCelsius(false);
    }

    let [temperature, setTemperature] = useState(Math.round(props.currentweather.temperature));
    let [isCelsius, setIsCelsius] = useState(true);
    
        return (
                <div className="Weather">
                    <LocationTime date={props.currentweather.datetime}/>
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-4">
                            <div className="Temperature text-center">
                                <h2>{temperature}&deg; </h2>
                                { (isCelsius) ? <span className="big-unit href-role m-2" onClick={toCelsius}>C</span> : <span className="href-role m-2" onClick={toCelsius}>C</span>} |  
                                { (isCelsius) ? <span className="href-role m-2" onClick={toFahrenheit}>F</span> : <span className="big-unit href-role m-2" onClick={toFahrenheit}>F</span>}
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <WeatherPicture src={props.currentweather.iconUrl} alt={props.currentweather.description} />
                        </div>
                        <div className="col-sm-4">
                            <div className="WeatherExtras text-center">
                                <div className="ImportantExtras">
                                    <Wind speed={Math.round(props.currentweather.windspeed)} />
                                </div>      
                                <div className="extras mt-4 d-none d-sm-block">
                                    <FeelsLike value={Math.round(props.currentweather.feelslike)} />
                                    <WeatherDescription value={props.currentweather.description} />
                                    <Humidity value={props.currentweather.humidity} />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="WeatherForecast">
                        <div className="container">
                            <div className="row">
                                {props.forecast.map(function (item, index){
                                    return(
                                        <div className="col" key={index}>
                                            <div className="Forecast text-center">
                                                <DayForecast day={item.datetime} />
                                                <img src={item.iconUrl} alt={item.description} />
                                                <div className="TemperatureForecast">
                                                <strong>{Math.round(item.maxtemp)}&deg;</strong> {Math.round(item.mintemp)}&deg;
                                            </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
}

