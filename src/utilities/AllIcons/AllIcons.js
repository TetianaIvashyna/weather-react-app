import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { iconsArray } from "../../Hamburger/commons/utilities/constants/constants";

export default function AllIcons(props) {
  return(
  <div className="container">
    <div className="row">
        {iconsArray.map(function (item, index) {
            if (index%2 === 0) return(
            <div className="col border rounded" key={index}>
                <div className="text-center">{item.desc}</div>
                    <ReactAnimatedWeather
                        icon={item.icon}
                        color={item.color}
                        size={props.size}
                        animate={true}
                    /> 
                <div className="text-center">{item.color}</div>
            </div>);
            else return null;
        })};
    </div>
  </div>);
}

