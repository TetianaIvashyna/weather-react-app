import React from "react";

export default function WeatherParameter(props) {
  return <p className="extras">
        <strong>{props.name}:</strong> {props.value} {props.unit} {props.comment}
    </p>;
}