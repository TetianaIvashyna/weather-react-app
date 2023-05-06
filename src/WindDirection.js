import React from "react";

export default function WindDirection(props) {
  let direction = "";
  switch(true) {
    case props.value >=180 &&  props.value >= 360:
        direction = "West";
        break;
    case props.value >=0 &&  props.value < 180:
        direction = "East";
        break;
    default:
         direction = "North";
        break;
}
  return (
      <p><strong>Wind direction:</strong> {direction}</p>
  );
}
