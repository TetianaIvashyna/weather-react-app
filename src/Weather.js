import React from "react"; 

import LocationTime from "./LocationTime";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
// import Humidity from "./Humidity";
// import Pressure from "./Pressure";
import WindDirection from "./WindDirection";
import WeatherAnimatedPicture from "./WeatherAnimatedPicture";
import WeatherParameter from "./WeatherParameter";
import windDirection from "./WindDirection";

export default function Weather(props) { 
    
   return (
            <div className="Weather m-4">
                
                <div className="container">
                    <div className="row">
                    <div className="col-sm">
                        <div className="main-info container text-start">
                            <LocationTime date={props.info.datetime}/>
                            
                            <div className="main-weather-info container">
                                <div className="row">
                                    <div className="col-3 pt-2 main-temp-icon">
                                        <Temperature value={props.info.temperature} isCelsius={props.isCelsius} />
                                    </div>
                                    <div className="col-3 pt-2 main-temp-icon">
                                        <WeatherAnimatedPicture icon={props.info.icon} size={64} />
                                    </div>
                                    <div className="col-6"></div>
                
                                </div>
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
                                <WeatherParameter name="Pressure" value={props.info.pressure} unit="hPa" comment="" />
                                <WeatherParameter name="Humidity" value={props.info.humidity} unit="%" comment="" />
                                <WeatherParameter name="Wind" value={Math.round(props.info.windspeed)} unit="m/s" comment={windDirection(props.info.winddirection)} />
                                <WindDirection value={props.info.winddirection} />
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
}

//  <img src={props.info.iconUrl} alt={props.info.description} className="main-weather-picture"/>
// 
