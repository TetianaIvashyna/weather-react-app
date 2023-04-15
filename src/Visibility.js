import React from "react";

export default function Visibility(props) {
  return (
    <div className="Visibility">
      <p><strong>Visibility:</strong> {props.value/1000} km</p>
    </div>
  );
}
