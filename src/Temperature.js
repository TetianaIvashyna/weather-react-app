import React from "react";

export default function Temperature(props) {

  return (
  <div className="Temperature text-center">
    <h2>{props.value}&deg; </h2>
    </div>
    );
}
