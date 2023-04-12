import React from "react";
import CurrentLocation from "./CurrentLocation";
import SearchEngine from "./SearchEngine";

export default function CitySetting() {
  return (
    <div className="CitySetting">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <CurrentLocation />
          </div>
          <div className="col-7">
            <SearchEngine />
          </div>
        </div>
      </div>
    </div>
  );
}
