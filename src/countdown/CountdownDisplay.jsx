import React from "react";

const CountdownDisplay = ({ day, hour, minute, second }) => {
  return (
    <div className="time-container">
      <div className="countdown-time">
        <div>
          <p>{day}</p> days
        </div>
        <div>
          <p>{hour}</p> hours
        </div>
        <div>
          <p>{minute}</p> mins
        </div>
        <div>
          <p>{second}</p> secs
        </div>
      </div>
    </div>
  );
};

export default CountdownDisplay;
