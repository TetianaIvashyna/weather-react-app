import React from "react";
import DateTime from "./DateTime";

export default function LocationTime() {
  return (
    <div className="LocationTime">
      <DateTime weekday="Sunday" month="April" date={2} hour={10} minute={36} />
    </div>
  );
}
