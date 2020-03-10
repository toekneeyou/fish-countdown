import React, { useState } from "react";
import { DateTime, Duration } from "luxon";

import "./countdown.css";
import CountdownDisplay from "./CountdownDisplay";

const Countdown = () => {
  const calculateDuration = time =>
    Duration.fromObject({ milliseconds: time })
      .toFormat("d h m s")
      .split(" ");

  const currentTime = DateTime.local();
  const returnTime = DateTime.fromISO("2020-03-26T00:05:00");
  const difference = returnTime - currentTime;
  const duration =
    difference >= 0 ? calculateDuration(difference) : [0, 0, 0, 0];

  const [timeRemaining, changeTimeRemaining] = useState({
    day: duration[0],
    hour: duration[1],
    minute: duration[2],
    second: duration[3]
  });

  if (difference > 0) {
    const oneSecond = 1000;
    const newDifference = difference - oneSecond;
    const newDuration = calculateDuration(newDifference);

    setTimeout(() => {
      changeTimeRemaining({
        day: newDuration[0],
        hour: newDuration[1],
        minute: newDuration[2],
        second: newDuration[3]
      });
    }, 1000);
  }

  return (
    <div className="countdown">
      {difference >= 0 ? (
        <CountdownDisplay time={timeRemaining} />
      ) : (
        <div className="countdown-over">The wait is over!</div>
      )}
      <div className="countdown-image"></div>
    </div>
  );
};

export default Countdown;
