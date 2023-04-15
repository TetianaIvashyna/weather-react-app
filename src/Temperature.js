import React from "react";

export default function Temperature(props) {

  return (
  <div className="Temperature text-center">
    <h1>{props.value}&deg; </h1>
    <p><a href="/">C</a> | <a href="/">F</a></p>
    </div>
    );
}
