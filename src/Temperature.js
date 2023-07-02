import React from "react";

export default function Temperature(props) {
  let temperature = Math.round(props.isCelsius ? props.value : props.value*9/5+32);
    return (
    <span className="Temperature">
      {temperature}&deg;
      </span>
      ); 
  }

