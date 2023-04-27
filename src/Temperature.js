import React, { useState } from "react";

export default function Temperature(props) {
  
  function toCelsius() {
    setTemperature(Math.round(props.value));
    setIsCelsius(true);
  }

  function toFahrenheit() {
    let fahrenheit = props.value * (9 / 5) + 32;
    setTemperature(Math.round(fahrenheit));
    setIsCelsius(false);
  }

  let [temperature, setTemperature] = useState(Math.round(props.value));
  let [isCelsius, setIsCelsius] = useState(true);
  console.log(temperature);

  return (
  <div className="Temperature text-center">
    <h2>{temperature}&deg; </h2>
    { (isCelsius) ? <span className="big-unit href-role m-2" onClick={toCelsius}>C</span> : <span className="href-role m-2" onClick={toCelsius}>C</span>} |  
    { (isCelsius) ? <span className="href-role m-2" onClick={toFahrenheit}>F</span> : <span className="big-unit href-role m-2" onClick={toFahrenheit}>F</span>}
    </div>
    );
}
