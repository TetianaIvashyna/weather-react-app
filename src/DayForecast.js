import React from "react";

export default function DayForecast(props) {
  return (
    <div className="DayForecast">
      <div className="WeekDayForecast">{props.weekday}</div>
      <h1 className="IconForecast">{props.icon}</h1>
      <div className="TemperatureForecast">
        {props.hightemp}&deg; | {props.lowtemp}&deg;
      </div>
    </div>
  );
}
