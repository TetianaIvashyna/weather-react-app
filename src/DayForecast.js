import React from "react";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";

export default function DayForecast(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date(props.weekday * 1000);
  let day = days[date.getDay()];
  return (
    <div className="DayForecast text-center">
      <div className="WeekDayForecast">{day}</div>
      <h3 className="IconForecast">
        <WeatherPicture src={props.iconUrl} alt={props.description} />
      </h3>
      <div className="TemperatureForecast">
        <strong><Temperature value={props.hightemp} isCelsius={props.isCelsius} /></strong> / <Temperature value={props.lowtemp} isCelsius={props.isCelsius} />
      </div>
    </div>
  );
}
