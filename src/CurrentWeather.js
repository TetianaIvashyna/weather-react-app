import React from "react";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";
import WeatherExtras from "./WeatherExtras";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Temperature value={18} />
          </div>
          <div className="col-sm-4">
            <WeatherPicture icon="☀️" />
          </div>
          <div className="col-sm-4">
            <WeatherExtras />
          </div>
        </div>
      </div>
    </div>
  );
}
