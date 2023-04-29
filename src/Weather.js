import React, { useState } from "react"; 

import LocationTime from "./LocationTime";
import WeatherPicture from "./WeatherPicture";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";

export default function Weather(props) { 
    function toCelsius() {
        setTemperature(Math.round(props.value));
        setIsCelsius(true);
    }

    function toFahrenheit() {
        let fahrenheit = props.value * (9 / 5) + 32;
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
                </div>
            );
}
