import React from "react";
import { myCitiesArray } from "../commons/utilities/constants/constants";

export default function MyCities(props) {
    return(
        <div className="MyCities">
            <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  My Cities
                </span>
                <ul className="dropdown-menu">
                  {myCitiesArray.map(function (city, index) {
                    return (
                      <li>
                        <span
                          className="dropdown-item text-end"
                          id={city}
                          key={index}
                          onClick={(event) => {
                            props.passingState({
                              city: event.target.id,
                              message: "",
                              ready: false,
                            });
                            console.log(event.target.id);
                          }}
                        >
                          {city}
                        </span>
                      </li>
                    );
                  })}
                </ul>
        </div>
    );
}