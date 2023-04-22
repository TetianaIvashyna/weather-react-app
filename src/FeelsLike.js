import React from "react";

export default function FeelsLike(props) {
  return (
    <div className="FeelsLike">
      <p><strong>Feels Like:</strong> {props.value}&deg;</p>
    </div>
  );
}
