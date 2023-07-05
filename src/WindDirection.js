export default function windDirection(value) {
  let direction ="North";
    switch(true) {
    case (value >=0 &&  value < 11.25) || (value <=360 &&  value > 348.75):
        direction = "North";
        break;
    case (value <= 33.75 &&  value > 11.25) :
        direction = "North North East";
        break;
     case (value <= 56.25 &&  value > 33.75) :
        direction = "North East";
        break;
    case (value <= 78.75 &&  value > 56.25) :
        direction = "North East East";
        break;
    case (value <= 101.25 &&  value > 78.75) :
        direction = "East";
        break;
    case (value <= 123.75 &&  value > 101.25) :
        direction = "South East East";
        break;
    case (value <= 146.25 &&  value > 123.75) :
        direction = "South East";
        break;
    case (value <=168.75  &&  value > 146.25) :
        direction = "South South East";
        break;
    case (value <= 191.25 &&  value > 168.75) :
        direction = "South";
        break;
    case (value <= 213.75 &&  value > 191.25) :
        direction = "South South West";
        break;
    case (value <= 236.25 &&  value > 213.75) :
        direction = "South West";
        break;
    case (value <= 258.75 &&  value > 236.25) :
        direction = "South West West";
        break;
    case (value <= 281.25 &&  value > 258.75) :
        direction = "West";
        break;
    case (value <= 303.75 &&  value > 281.25) :
        direction = "North West West";
        break;
    case (value <= 326.25 &&  value > 303.75) :
        direction = "North West";
        break;
    case (value <= 348.75 &&  value > 326.25) :
        direction = "North North West";
        break;

    default:
         direction = "North";
        break;
}
 
  return direction;
}
