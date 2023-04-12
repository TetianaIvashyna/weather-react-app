import React from "react";

import DayForecast from "./DayForecast";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <DayForecast weekday="Sun" icon="☀️" lowtemp={9} hightemp={18} />
          </div>
          <div className="col-3">
            <DayForecast weekday="Mon" icon="🌦" lowtemp={8} hightemp={15} />
          </div>
          <div className="col-3">
            <DayForecast weekday="Tue" icon="⛅️" lowtemp={7} hightemp={16} />
          </div>
          <div className="col-3">
            <DayForecast weekday="Wed" icon="🌦" lowtemp={10} hightemp={19} />
          </div>
        </div>
      </div>
    </div>
  );
}
