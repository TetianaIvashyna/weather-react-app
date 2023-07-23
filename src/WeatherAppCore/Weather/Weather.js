import React from "react"; 
import Temperature from "../commons/Temperature/Temperature";
import WeatherAnimatedPicture from "../commons/WeatherAnimatedPicture/WeatherAnimatedPicture";
import WeatherParameter from "./WeatherParameter/WeatherParameter";
import windDirection from "./utilities/windDirection/windDirection";

export default function Weather(props) { 
   return (
            <div className="Weather m-4">
                
                <div className="container">
                    <div className="row">
                    <div className="col-sm">
                        <div className="main-info container text-start">
                            <strong className="d-none d-sm-block">
                                {props.info.dateTime.day} {props.info.dateTime.date} {props.info.dateTime.month} {props.info.dateTime.hours}:{props.info.dateTime.minutes}
                            </strong>
                            
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
    
                    <div className="col-sm">
                        <div className="WeatherExtras text-end d-none d-sm-block">
                            <div className="ImportantExtras">
                                <strong className="WeatherDesc text-capitalize">{props.info.description}</strong>
                            </div>      
                            <div className="extras mt-4 ">
                                <WeatherParameter name="Pressure" value={props.info.pressure} unit="hPa" comment="" />
                                <WeatherParameter name="Humidity" value={props.info.humidity} unit="%" comment="" />
                                <WeatherParameter name="Wind" value={Math.round(props.info.windspeed)} unit="m/s" comment={windDirection(props.info.winddirection)} />   
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}

