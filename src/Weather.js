import React from "react"; 

import LocationTime from "./LocationTime";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import WindDirection from "./WindDirection";

export default function Weather(props) { 
    
   return (
            <div className="Weather m-4">
                
                <div className="container">
                    <div className="row">
                    <div className="col-sm">
                        <div className="main-info container text-start">
                            <LocationTime date={props.info.datetime}/>
                            
                            <div className="main-weather-info">
                                <Temperature value={props.info.temperature} isCelsius={props.isCelsius} />
                                <img src={props.info.iconUrl} alt={props.info.description} className="main-weather-picture"/>
                            </div>
                            
                            <span className="FeelsLike">Feels Like <Temperature value={props.info.feelslike} isCelsius={props.isCelsius} /></span>
                            <div className="SmallWind d-block d-sm-none mt-2">Wind: {Math.round(props.info.windspeed)} m/s </div>
                        </div>
                    </div>
                    
    
                    <div className="col-sm  ">
    
                        <div className="WeatherExtras text-end d-none d-sm-block">
                            <div className="ImportantExtras">
                                <WeatherDescription value={props.info.description} />
                            </div>      
                            <div className="extras mt-4 ">
                                <Pressure value={props.info.pressure}/>
                                <Humidity value={props.info.humidity} />
                                <strong>Wind:</strong> {Math.round(props.info.windspeed)} m/s 
                                <WindDirection value={props.info.winddirection} />
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
}
