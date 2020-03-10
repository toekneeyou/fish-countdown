import React, { useState, useEffect } from "react";
import { DateTime, Duration } from "luxon";

import "./countdown.css";

const Countdown = () => {
  const [day, changeDay] = useState(null);
  const [hour, changeHour] = useState(null);
  const [minute, changeMinute] = useState(null);
  const [second, changeSecond] = useState(null);

  const currentTime = DateTime.local();
  const returnTime = DateTime.fromISO("2020-03-26T12:05:00");

  const difference = returnTime - currentTime;

  const duration = Duration.fromObject({ milliseconds: difference })
    .toFormat("d h m s")
    .split(" ");

  useEffect(() => {
    const oneSecond = 1000;
    setTimeout(() => {
      changeDay(duration[0]);
      changeHour(duration[1]);
      changeMinute(duration[2]);
      changeSecond(duration[3]);
    }, oneSecond);
  });

  return (
    <div className="countdown">
      <div className="countdown-title">Days until Tony is back</div>
      <div className="countdown-time">
        <span>{day} days</span>
        <span>{hour} hours</span>
        <span>{minute} mins</span>
        <span>{second} secs</span>
      </div>
    </div>
  );
};

export default Countdown;
