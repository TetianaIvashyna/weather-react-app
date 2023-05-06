import React from "react"; 

import LocationTime from "./LocationTime";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import WindDirection from "./WindDirection";

export default function Weather(props) { 
    
   return (
            <div className="Weather">
                
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                        <div>
                            <LocationTime date={props.info.datetime}/>
                        <div className="main-weather-info">
                            <Temperature value={props.info.temperature} isCelsius={props.isCelsius} />
                            <WeatherPicture src={props.info.iconUrl} alt={props.info.description} />
                        </div>
                        <FeelsLike value={props.info.feelslike} isCelsius={props.isCelsius}/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="WeatherExtras text-right">
                            <div className="ImportantExtras">
                                <Wind speed={Math.round(props.info.windspeed)} />
                            </div>      
                            <div className="extras mt-4 d-none d-sm-block">  
                                <WindDirection value={props.info.winddirection} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm-4">
                        <div className="WeatherExtras text-right">
                            <div className="ImportantExtras">
                                <WeatherDescription value={props.info.description} />
                            </div>      
                            <div className="extras mt-4 d-none d-sm-block">
                                <Pressure value={props.info.pressure}/>
                                <Humidity value={props.info.humidity} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
}
