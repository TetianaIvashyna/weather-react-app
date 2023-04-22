import React from "react";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";
import Wind from "./Wind";
import Visibility from "./Visibility";
import WindDirection from "./WindDirection";
import Humidity from "./Humidity";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Temperature value={15} />
          </div>
          <div className="col-sm-4">
            <WeatherPicture icon="☀️" />
          </div>
          <div className="col-sm-4">
            <div className="WeatherExtras text-center">
        <div className="ImportantExtras">
            <Wind speed={3} />
        </div>
      
      <div className="extras mt-4 d-none d-sm-block">
        <Visibility value={10000} />
        <WindDirection value="North" />
        <Humidity value={48} />
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
