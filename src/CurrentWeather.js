import React from "react";

import LocationTime from "./LocationTime";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";
import WeatherExtras from "./WeatherExtras";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LocationTime />
          </div>
          <div className="col-sm-3">
            <Temperature value={18} />
          </div>
          <div className="col-sm-3">
            <WeatherPicture icon="☀️" />
          </div>
          <div className="col-sm-3">
            <WeatherExtras />
          </div>
        </div>
      </div>
    </div>
  );
}
