import React from "react";
import Temperature from "../../commons/Temperature/Temperature";
import WeatherAnimatedPicture from "../../commons/WeatherAnimatedPicture/WeatherAnimatedPicture";
import makeDate from "../../commons/utilities/makeDate/makeDate";

export default function DayForecast(props) {
  let date = makeDate(props.weekday);
  return (
    <div className="DayForecast text-center p-1 m-1 mb-3">
      <div className="WeekDayForecast pb-3">{date.day}</div>
      <h3 className="IconForecast">
         <WeatherAnimatedPicture icon={props.icon} size={40} /> 
      </h3>
      <div className="TemperatureForecast">
        <strong><Temperature value={props.hightemp} isCelsius={props.isCelsius} /></strong> / <Temperature value={props.lowtemp} isCelsius={props.isCelsius} />
      </div>
    </div>
  );
}

// <div className="DayForecast text-center border rounded-4 p-1 m-1">