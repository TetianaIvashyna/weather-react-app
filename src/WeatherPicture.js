import React from "react";

export default function WeatherPicture(props) {
  return(
  <div className="WeatherPicture text-center">
    <h1>{props.icon}</h1>
    </div>);
}
