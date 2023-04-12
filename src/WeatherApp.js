import React from "react";
import CitySetting from "./CitySetting";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container border m-3 p-3 rounded">
        <CitySetting />
        <CurrentWeather />
        <WeatherForecast />
      </div>
    </div>
  );
}
