import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Weather from "./Weather/Weather";
import Forecast from "./Forecast/Forecast";
import handleAxiosError from "./handlerrors/handleAxiosError/handleAxiosError";
import handlePositionError from "./handlerrors/handlePositionError/handlePositionError";
import Loader from "./commons/Loader/Loader";
import { handlePosition, handleResponse } from './handlers/handlers';
import { fetchData } from "./api/api";

const WeatherAppCore = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [weather, setWeather] = useState({ city: '', message: '', ready: false });
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (weather.city.length === 0 && weather.message.length === 0) {
      navigator.geolocation.getCurrentPosition(
        handlePosition(setWeather, handlePositionError),
        (error) => {
          setWeather({
            city: '',
            message: 'Please, choose a location',
            ready: false,
          });
          handlePositionError(error);
        },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
      );
    }
    if (weather.city.length > 0) {
      fetchData(weather.city, setWeather, handleResponse, handleAxiosError, setInputText);
    }
  }, [weather.ready, weather.message, weather.city]);

    return(
        <div>
        <HamburgerMenu 
            message={weather.message} 
            setWeather={setWeather} 
            setIsCelsius={setIsCelsius} 
            inputText={inputText}
            setInputText={setInputText}
        />
      { weather.ready ? (
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

export default WeatherAppCore;