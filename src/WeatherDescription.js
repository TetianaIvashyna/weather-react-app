import React from "react";

export default function WeatherDescription(props) {
  return (
      <strong className="WeatherDesc text-capitalize">{props.value}</strong>
  );
}
