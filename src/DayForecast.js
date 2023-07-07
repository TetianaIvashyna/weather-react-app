import React from "react";
import Temperature from "./Temperature";
import WeatherAnimatedPicture from "./WeatherAnimatedPicture";
import makeDate from "./makeDate";
// import WeatherPicture from "./WeatherPicture";

export default function DayForecast(props) {
  let date = makeDate(props.weekday);
  return (
    <div className="DayForecast text-center p-1 m-1">
      <div className="WeekDayForecast">{date.day}</div>
      <h3 className="IconForecast">
         <WeatherAnimatedPicture icon={props.icon} size={40} /> 
      </h3>
      <div className="TemperatureForecast">
        <strong><Temperature value={props.hightemp} isCelsius={props.isCelsius} /></strong> / <Temperature value={props.lowtemp} isCelsius={props.isCelsius} />
      </div>
    </div>
  );
}

// <WeatherPicture src={props.iconUrl} alt={props.description} />
// <div className="DayForecast text-center border rounded-4 p-1 m-1">