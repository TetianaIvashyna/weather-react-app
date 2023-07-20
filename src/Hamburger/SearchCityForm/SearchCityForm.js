import React from "react";
import { toast } from "react-toastify";

export default function SearchCityForm(props) {

    function Search(event) {
    event.preventDefault();
        if (props.inputText.length === 0) {
            toast.error("Please, enter a city");
        } else {
            props.setWeather({ city: props.inputText, message: "", ready: false });
        }
    }
    return(
        <form className="SearchCityForm d-flex" role="search" onSubmit={Search}>
              <input
                className="form-control me-2"
                id="cityInput"
                type="search"
                placeholder="City"
                aria-label="Search"
                onChange={(event) => props.setInputText(event.target.value)}
                value={props.inputText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button
                className="btn btn-success ms-2"
                onClick={(e) => {
                  e.preventDefault();
                  props.setWeather({ city: "", message: "", ready: false });
                }}
              >
                Nearby
              </button>
            </form>
    );
}