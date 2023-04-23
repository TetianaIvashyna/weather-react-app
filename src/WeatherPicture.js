import React from "react";

export default function WeatherPicture(props) {
  return(
  <div className="WeatherPicture text-center">
    <img src={props.src} alt={props.alt} />
    </div>);
}
