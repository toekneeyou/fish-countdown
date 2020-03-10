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
  const returnTime = DateTime.fromISO("2020-03-26T12:05:00");
  const difference = returnTime - currentTime;
  const duration =
    difference >= 0 ? calculateDuration(difference) : [0, 0, 0, 0];

  const [day, changeDay] = useState(duration[0]);
  const [hour, changeHour] = useState(duration[1]);
  const [minute, changeMinute] = useState(duration[2]);
  const [second, changeSecond] = useState(duration[3]);

  if (difference > 0) {
    const oneSecond = 1000;
    const newDifference = difference - oneSecond;
    const newDuration = calculateDuration(newDifference);

    setTimeout(() => {
      changeDay(newDuration[0]);
      changeHour(newDuration[1]);
      changeMinute(newDuration[2]);
      changeSecond(newDuration[3]);
    }, 1000);
  }

  return (
    <div className="countdown">
      {difference >= 0 ? (
        <CountdownDisplay
          day={day}
          hour={hour}
          minute={minute}
          second={second}
        />
      ) : (
        <div className="countdown-over">The wait is over!</div>
      )}
      <div className="countdown-image"></div>
    </div>
  );
};

export default Countdown;
