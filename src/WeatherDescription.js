import React from "react";

export default function WeatherDescription(props) {
  return (
      <p className="text-capitalize">{props.value}</p>
  );
}
