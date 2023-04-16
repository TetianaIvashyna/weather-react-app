import React from "react";

export default function DayForecast(props) {
  return (
    <div className="DayForecast text-center">
      <div className="WeekDayForecast">{props.weekday}</div>
      <h3 className="IconForecast">{props.icon}</h3>
      <div className="TemperatureForecast">
        <strong>{props.hightemp}&deg;</strong> {props.lowtemp}&deg;
      </div>
    </div>
  );
}
