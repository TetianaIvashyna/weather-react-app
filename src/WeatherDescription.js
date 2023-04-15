import React from "react";

export default function WeatherDescription(props) {
  return (
      <p><strong>Weather description:</strong> {props.value}</p>
  );
}
