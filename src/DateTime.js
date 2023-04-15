import React from "react";

export default function DateTime(props) {
  return (
    <div className="DateTime p-2 ms-2 d-none d-sm-flex">
      <p>
        {props.weekday} {props.date} {props.month} {props.hour}:{props.minute}
      </p>
    </div>
  );
}
