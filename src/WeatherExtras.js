import React from "react";

import Wind from "./Wind";
import Visibility from "./Visibility";
import WindDirection from "./WindDirection";
import Humidity from "./Humidity";

export default function WeatherExtras() {
  return (
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
  );
}
