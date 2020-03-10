import React, { useState, useEffect } from "react";
import { DateTime, Duration } from "luxon";

import "./countdown.css";
import CountdownDisplay from "./CountdownDisplay";
import picture from "./tony-coffee.jpeg";

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
      <CountdownDisplay day={day} hour={hour} minute={minute} second={second} />
      <div className="countdown-image"></div>
    </div>
  );
};

export default Countdown;
