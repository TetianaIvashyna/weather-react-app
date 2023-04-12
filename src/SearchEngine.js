import React from "react";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form className="m-2 p-1">
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            autoComplete="off"
          />
          <div className="input-group-text" id="basic-addon2">
            Search
          </div>
        </div>
      </form>
    </div>
  );
}
