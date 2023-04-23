import React, { useState } from "react";
import axios from "axios";

import LocationTime from "./LocationTime";
import Temperature from "./Temperature";
import WeatherPicture from "./WeatherPicture";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";

export default function CurrentWeather(props) {
    let [ weather, setWeather] = useState({ ready: false });

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

    if (weather.ready) {
        return (
            <div className="CurrentWeather">
                <LocationTime date={weather.datetime}/>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                        <Temperature value={Math.round(weather.temperature)} />
                    </div>
                    <div className="col-sm-4">
                        <WeatherPicture src={weather.iconUrl} alt={weather.description} />
                    </div>
                    <div className="col-sm-4">
                        <div className="WeatherExtras text-center">
                            <div className="ImportantExtras">
                                <Wind speed={Math.round(weather.windspeed)} />
                            </div>      
                            <div className="extras mt-4 d-none d-sm-block">
                                <FeelsLike value={Math.round(weather.feelslike)} />
                                <WeatherDescription value={weather.description} />
                                <Humidity value={weather.humidity} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey= "57bfff0eb99c4410o19bd76a18tf36ea";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return <p>Loading...</p>;
    }
}
