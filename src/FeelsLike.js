import React from "react";
import Temperature from "./Temperature";

export default function FeelsLike(props) {
  return (
    <div className="FeelsLike">
      <strong>Feels Like:</strong> <Temperature value={props.value} isCelsius={props.isCelsius} />
    </div>
  );
}
