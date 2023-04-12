import React from "react";

import Wind from "./Wind";
import Visibility from "./Visibility";

export default function WeatherExtras() {
  return (
    <div className="WeatherExtras">
      <Wind speed={3} />
      <Visibility value={10000} />
    </div>
  );
}
