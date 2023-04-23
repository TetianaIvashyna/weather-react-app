import React from "react";

export default function LocationTime(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "Julay", "August", "September", "October", "November", "December"];
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
    <div className="LocationTime p-2 ms-2 d-none d-sm-flex">
      <p>
        {day} {dateday} {month} {hours}:{minutes}
      </p>
    </div>
  );
}
