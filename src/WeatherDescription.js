import React from "react";

export default function WeatherDescription(props) {
  return (
      <p><strong>Description:</strong> {props.value}</p>
  );
}
