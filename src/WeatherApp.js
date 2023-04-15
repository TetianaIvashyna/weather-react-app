import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Hamburger from "./Hamburger";
import LocationTime from "./LocationTime";

export default function WeatherApp() {
  return (
    <div className="WeatherApp d-flex justify-content-center p-3">
      <div className="container">
        <Hamburger city="Eindhoven" />
        <LocationTime />
        <CurrentWeather />
        <WeatherForecast />
    </div>
    </div>
  );
}
