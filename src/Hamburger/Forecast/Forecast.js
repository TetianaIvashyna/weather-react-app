import React, { useState } from "react";
import { apiKey } from "../utilities/constants/constants";
import axios from "axios";
import DayForecast from "./DayForecast/DayForecast";
import Loader from "../commons/Loader/Loader";

export default function Forecast(props) {
  let [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    setForecast({
      data: response.data.daily,
      ready: true,
    });
  }

  if (forecast.ready) {
    return (
      <div className="Forecast m-4">
        <div className="container">
          <div className="row flex-wrap">
            {forecast.data.map(function (item, index) {
              return (
                <div className="col" key={index}>
                  <DayForecast
                    weekday={item.time}
                    description={item.condition.description}
                    icon={item.condition.icon}
                    lowtemp={item.temperature.minimum}
                    hightemp={item.temperature.maximum}
                    isCelsius={props.isCelsius}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <Loader />
    );
  }
}
