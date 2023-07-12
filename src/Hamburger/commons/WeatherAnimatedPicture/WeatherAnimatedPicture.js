import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { iconsMapping } from "../../utilities/constants/constants"

export default function WeatherAnimatedPicture(props) {
  return(
      <div className="WeatherAnimatedPicture text-center">
            <ReactAnimatedWeather
                  icon={iconsMapping[props.icon].icon}
                  color={iconsMapping[props.icon].color}
                  size={props.size}
                  animate={true}
            />
      </div>
    );
}
