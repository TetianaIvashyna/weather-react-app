import React, { useState, useEffect } from "react";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiKey } from "./commons/utilities/constants/constants";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Weather from "./Weather/Weather";
import Forecast from "./Forecast/Forecast";
import handleAxiosError from "./utilities/handleAxiosError/handleAxiosError";
import handlePositionError from "./utilities/handlePositionError/handlePositionError";
import Loader from "./commons/Loader/Loader";

import makeDate from "./commons/utilities/makeDate/makeDate";
// import getWeatherData from "./utilities/getWeatherData/getWeatherData";

export default function Hamburger() {
  let [isCelsius, setIsCelsius] = useState(true);
  let [weather, setWeather] = useState({ city: "", message: "", ready: false });
  let [inputText, setInputText] = useState("");

  
    useEffect(() => {
    
    function handleResponse(response) {
      if (response.data.message === "City not found") {
        toast.error("Can not find this city. Please, check the spelling");
        setWeather({
          city: "",
          message: "Please, choose a location",
          ready: false,
        });
      } else {
        setWeather({
          city: response.data.city,
          message: response.data.city,
          description: response.data.condition.description,
          icon: response.data.condition.icon,
          iconUrl: response.data.condition.icon_url,
          dateTime: makeDate(response.data.time),
          feelslike: response.data.temperature.feels_like,
          pressure: response.data.temperature.pressure,
          temperature: response.data.temperature.current,
          windspeed: response.data.wind.speed,
          winddirection: response.data.wind.degree,
          humidity: response.data.temperature.humidity,
          ready: true,

                });
        setInputText("");
      }
}

function handlePosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse).catch(handleAxiosError);
}

    if ((weather.city.length === 0) & (weather.message.length === 0)) {
      navigator.geolocation.getCurrentPosition(
        handlePosition,
        (error) => {
          setWeather({
            city: "",
            message: "Please, choose a location",
            ready: false,
          });
          handlePositionError(error);
        },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
      );
    }
    if (weather.city.length > 0) {
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weather.city}&key=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch((error) => {
          setWeather({
            city: "",
            message: "Please, choose a location",
            ready: false,
          });
          handleAxiosError(error);
        });
    }
    }, [weather.ready, weather.message, weather.city]);  


    return(
        <HamburgerMenu 
            message={weather.message} 
            setWeather={setWeather} 
            setIsCelsius={setIsCelsius} 
            inputText={inputText}
            setInputText={setInputText}
        />
      {weather.ready ? (
        <div>
          <Weather 
            info={weather} 
            isCelsius={isCelsius} 
          />
          <Forecast 
            city={weather.city} 
            isCelsius={isCelsius} 
          />
        </div>
      ) : weather.message.length === 0 ? (
        <Loader />
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
}