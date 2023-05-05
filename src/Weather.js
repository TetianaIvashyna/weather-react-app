import React from "react"; 

import LocationTime from "./LocationTime";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";

export default function Weather(props) { 
    
   return (
            <div className="Weather">
                <LocationTime date={props.info.datetime}/>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                        <Temperature value={props.info.temperature} isCelsius={props.isCelsius} />
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
                                <FeelsLike value={props.info.feelslike} isCelsius={props.isCelsius}/>
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
