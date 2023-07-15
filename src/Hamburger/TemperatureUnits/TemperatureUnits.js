import React from "react";

export default function TemperatureUnits(props) {
    return(
        <div className="TemperatureUnits">
            <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Temperature units
            </span>
            <ul className="dropdown-menu">
                <li>
                    <div className="form-check ms-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => props.setIsCelsius(true)}
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Celsius
                      </label>
                    </div>
                    <div className="form-check ms-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onClick={() => props.setIsCelsius(false)}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Fahrenheit
                      </label>
                    </div>
                </li>
            </ul>
        </div>
    );
}