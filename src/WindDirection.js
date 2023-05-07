import React from "react";

export default function WindDirection(props) {
  let direction ="North";
    switch(true) {
    case (props.value >=0 &&  props.value < 11.25) || (props.value <=360 &&  props.value > 348.75):
        direction = "North";
        break;
    case (props.value <= 33.75 &&  props.value > 11.25) :
        direction = "North North East";
        break;
     case (props.value <= 56.25 &&  props.value > 33.75) :
        direction = "North East";
        break;
    case (props.value <= 78.75 &&  props.value > 56.25) :
        direction = "North East East";
        break;
    case (props.value <= 101.25 &&  props.value > 78.75) :
        direction = "East";
        break;
    case (props.value <= 123.75 &&  props.value > 101.25) :
        direction = "South East East";
        break;
    case (props.value <= 146.25 &&  props.value > 123.75) :
        direction = "South East";
        break;
    case (props.value <=168.75  &&  props.value > 146.25) :
        direction = "South South East";
        break;
    case (props.value <= 191.25 &&  props.value > 168.75) :
        direction = "South";
        break;
    case (props.value <= 213.75 &&  props.value > 191.25) :
        direction = "South South West";
        break;
    case (props.value <= 236.25 &&  props.value > 213.75) :
        direction = "South West";
        break;
    case (props.value <= 258.75 &&  props.value > 236.25) :
        direction = "South West West";
        break;
    case (props.value <= 281.25 &&  props.value > 258.75) :
        direction = "West";
        break;
    case (props.value <= 303.75 &&  props.value > 281.25) :
        direction = "North West West";
        break;
    case (props.value <= 326.25 &&  props.value > 303.75) :
        direction = "North West";
        break;
    case (props.value <= 348.75 &&  props.value > 326.25) :
        direction = "North North West";
        break;

    default:
         direction = "North";
        break;
}

  
  return (
      <span> {direction}</span>
  );
}
