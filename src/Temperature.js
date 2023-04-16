import React from "react";

export default function Temperature(props) {

  return (
  <div className="Temperature text-center">
    <h2>{props.value}&deg; </h2>
    <p><a href="/">C</a> | <a href="/">F</a></p>
    </div>
    );
}
