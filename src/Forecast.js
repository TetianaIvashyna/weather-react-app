import React, { useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import DayForecast from "./DayForecast";

export default function Forecast(props) {
  let [forecast, setForecast] = useState({ready: false});
  const apiKey= "57bfff0eb99c4410o19bd76a18tf36ea";

  function handleResponse(response) {
    setForecast({
      data: response.data.daily,
      ready: true
    })
  }

  if (forecast.ready) {
    return (
      <div className="Forecast m-4">
        <div className="container">
          <div className="row">
            {forecast.data.map(function (item, index){
              return(
                <div className="col" key={index}>
                  <DayForecast weekday={item.time} description={item.condition.description} icon={item.condition.icon} lowtemp={item.temperature.minimum} hightemp={item.temperature.maximum} isCelsius={props.isCelsius} />
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
    return <div className="text-center"><ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#655E9D', '#F2BB1A', '#4C9BCD', '#514A83', '#CFCFCF']}
                    /></div>
  }
}
