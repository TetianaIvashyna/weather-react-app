import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Hamburger() {
    const apiKey= "57bfff0eb99c4410o19bd76a18tf36ea";
    const myCities = ["Kharkiv", "Pfunds", "Kyiv", "Amsterdam", "Berlin"];

    let [inputtext, setInputtext] = useState("");
    let [isCelsius, setIsCelsius] = useState(true);
    let [ weather, setWeather] = useState({ city: "", ready: false });

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

    function currentLocation(event) {
        event.preventDefault();
        setWeather({city: "", ready: false});

    }

    function handleInput(event) {
        setInputtext(event.target.value);
    }

    function Search(event) {
        event.preventDefault();
        setWeather({city: inputtext, ready: false});
    }

    function weatherInMyCity(event) {
        setWeather({city: event.target.id, ready: false});
    }

    function handlePosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (!weather.ready) {
        if (weather.city === "") {
            navigator.geolocation.getCurrentPosition(handlePosition);
        }
        else {
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weather.city}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }
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
                                      
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    My Cities
                                    </span>
                                    <ul className="dropdown-menu">
                                        {myCities.map(function (city, index){
                                            return(
                                                <li><span className="dropdown-item" id={city} key={index} onClick={weatherInMyCity}>{city}</span></li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Temperature units
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="form-check ms-3">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setIsCelsius(true)} defaultChecked />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    Celsius
                                                </label>
                                            </div>
                                            <div className="form-check  ms-3">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setIsCelsius(false)} />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    Fahrenheit
                                                </label>
                                            </div>
                                        </li>
                    
                                    </ul>
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={Search}>
                                <input className="form-control me-2" type="search" placeholder="City" aria-label="Search" onChange={handleInput}/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                                <button className="btn btn-success ms-2" onClick={currentLocation}>Nearby</button>
                            </form>
                        </div>
                    </div>
                </nav>
                { weather.ready ? 
                    <div>
                        <Weather info={weather} isCelsius={isCelsius} /> 
                        <Forecast city={weather.city} isCelsius={isCelsius} /> 
                    </div>
                : <div className="text-center"><ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#655E9D', '#F2BB1A', '#4C9BCD', '#514A83', '#CFCFCF']}
                    /></div>
                    }
            </div>
        );
    
}