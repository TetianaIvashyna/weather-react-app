import React from "react";

export default function DateTime(props) {
  return (
    <div className="DateTime">
      <p>
        {props.weekday} {props.date} {props.month} {props.hour}:{props.minute}
      </p>
    </div>
  );
}
