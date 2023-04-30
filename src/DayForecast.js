import React from "react";

export default function DayForecast(props) {
  console.log(props.data);
  return (
    <div className="DayForecast text-center">
        <div className="WeekDayForecast">{props.data.datetime}</div>
        <img src={props.data.iconUrl} alt={props.data.description} />
        <div className="TemperatureForecast">
        <strong>{Math.round(props.data.maxtemp)}&deg;</strong> {Math.round(props.data.mintemp)}&deg;
       </div>
    </div>
  );
}
 