import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function Hamburger(props) {
    const mycities =["Kharkiv", "Eindhoven", "Berlin"];
    let [inputtext, setInputtext] = useState("");
    let [weather, setWeather] = useState({ city: props.defaultcity, ready: false });
    let [forecast, setForecast] = useState({ready:false});

    function handleResponse(response) {
       setWeather ({
               city: response.data.city,
               description: response.data.condition.description,
               iconUrl: response.data.condition.icon_url,
               datetime: new Date(response.data.time * 1000),
               feelslike: response.data.temperature.feels_like,
               pressure: response.data.temperature.pressure,
               temperature: response.data.temperature.current,
               windspeed: response.data.wind.speed,
               winddirection: response.data.wind.degree,
               humidity: response.data.temperature.humidity,
               ready: true
           });
    }

    function handleForecastResponse(response) {
        console.log(response.data);
        setForecast(
            {
                data: response.data.daily,
                ready: true
            }
        );
    }

    function handlePosition(position) {
        setWeather({ready: false});
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        const apiKey = "57bfff0eb99c4410o19bd76a18tf36ea";
        let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        axios.get(apiUrlCurrent).then(handleResponse);   
    }

    function passCurrentLocation() {
        navigator.geolocation.getCurrentPosition(handlePosition);
    }

    function handleInput(event) {
        setInputtext(event.target.value);
    }

    function handleDropdown(event) {
        setWeather({city: event.target.id, ready: false});
    }

    function Search(event) {
        event.preventDefault();
        if(inputtext==="") {
            alert("Please, enter the city");
            // setWeather({city: props.defaultcity, ready: false});
        } else {
            setWeather({city: inputtext, ready: false});
        }
    }

    if (!weather.ready) {
        const apiKey= "57bfff0eb99c4410o19bd76a18tf36ea";
        let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?query=${weather.city}&key=${apiKey}&units=metric`;
        let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${weather.city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrlCurrent).then(handleResponse);
        axios.get(apiUrlForecast).then(handleForecastResponse);
    }
    return(
            <div className="Hamburger">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <h3>{weather.city}</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <span className="nav-link active href-role" aria-current="page" onClick={passCurrentLocation}>Current Location</span>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    My Cities
                                    </span>
                                    <ul className="dropdown-menu">
                                        {mycities.map(function (item, index) {
                                            return (
                                            <li key={index}>
                                                <span className="dropdown-item href-role" id={item} onClick={handleDropdown}>{item}</span>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li>
                                
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={Search}>
                                <input className="form-control me-2" type="search" placeholder="City" aria-label="Search" onChange={handleInput}/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                { (weather.ready) ? <Weather currentweather={weather} forecast={forecast.data} /> : <p>Loading...</p> }
            </div>
    );
}
