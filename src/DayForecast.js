import React from "react";

export default function DayForecast(props) {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.day.getDay()];
  return (
    <div className="Forecast text-center">{day}</div>
  );
}
 