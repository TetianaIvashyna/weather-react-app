import React from "react";
import DateTime from "./DateTime";

export default function LocationTime() {
  return (
    <div className="LocationTime">
      <DateTime weekday="Sunday" month="April" date={16} hour={17} minute={41} />
    </div>
  );
}
