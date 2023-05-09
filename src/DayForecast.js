import React from "react";
import Temperature from "./Temperature";
import WeatherAnimatedPicture from "./WeatherAnimatedPicture";
// import WeatherPicture from "./WeatherPicture";

export default function DayForecast(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.weekday * 1000);
  let day = days[date.getDay()];
  return (
    <div className="DayForecast text-center border rounded-4 p-1 m-1">
      <div className="WeekDayForecast">{day}</div>
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