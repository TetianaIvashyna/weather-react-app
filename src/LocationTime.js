import React from "react";
import { days, months } from "./constants";



export default function LocationTime(props) {
    let day = days[props.date.getDay()];
let dateday = props.date.getDate();
let month = months[props.date.getMonth()];

    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

  return (
    <span className="LocationTime">
      <strong className="d-none d-sm-block">
        {day} {dateday} {month} {hours}:{minutes}
      </strong>
      <strong className="d-block d-sm-none">Now</strong>
    </span>
  );
}
