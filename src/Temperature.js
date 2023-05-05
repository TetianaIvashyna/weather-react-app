import React, { useState, useEffect } from "react";

export default function Temperature(props) {
  let [temperature, setTemperature]= useState(Math.round(props.value));

  useEffect(() => {
    function switchUnit(value, isCelsius) {
        if (isCelsius) {
          setTemperature( Math.round(value));
        } else {
          setTemperature( Math.round(value * 9/5 + 32));
        }
    }
    switchUnit(props.value, props.isCelsius);}, 
    [props.isCelsius]);
    
    return (
    <span className="Temperature">
      {temperature}&deg;
      </span>
      );
  }

