import React from "react";

import City from "./City";
import DateTime from "./DateTime";

export default function LocationTime() {
  return (
    <div className="LocationTime">
      <City cityname="Kharkiv" />
      <DateTime weekday="Sun" month="April" date={2} hour={10} minute={36} />
    </div>
  );
}
