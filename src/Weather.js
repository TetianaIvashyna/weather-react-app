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
        setTemperature(Math.round(props.info.temperature));
        setIsCelsius(true);
    }

    function toFahrenheit() {
        let fahrenheit = props.info.temperature * (9 / 5) + 32;
        setTemperature(Math.round(fahrenheit));
        setIsCelsius(false);
    }

    let [temperature, setTemperature] = useState(Math.round(props.info.temperature));
    let [isCelsius, setIsCelsius] = useState(true);

    console.log(temperature);
        return (
                <div className="Weather">
                    <LocationTime date={props.info.datetime}/>
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
                            <WeatherPicture src={props.info.iconUrl} alt={props.info.description} />
                        </div>
                        <div className="col-sm-4">
                            <div className="WeatherExtras text-center">
                                <div className="ImportantExtras">
                                    <Wind speed={Math.round(props.info.windspeed)} />
                                </div>      
                                <div className="extras mt-4 d-none d-sm-block">
                                    <FeelsLike value={Math.round(props.info.feelslike)} />
                                    <WeatherDescription value={props.info.description} />
                                    <Humidity value={props.info.humidity} />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="WeatherForecast">
                    <div className="container">
                        <div className="row">
                        <div className="col-3">
                            <DayForecast weekday="Sun" icon="☀️" lowtemp={9} hightemp={18} />
                        </div>
                        <div className="col-3">
                            <DayForecast weekday="Mon" icon="🌦" lowtemp={8} hightemp={15} />
                        </div>
                        <div className="col-3">
                            <DayForecast weekday="Tue" icon="⛅️" lowtemp={7} hightemp={16} />
                        </div>
                        <div className="col-3">
                            <DayForecast weekday="Wed" icon="🌦" lowtemp={10} hightemp={19} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            );
}
