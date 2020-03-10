import React, { useState, useEffect } from "react";

const CountdownDisplay = ({ day, hour, minute, second }) => {
  const [isLoaded, toggleIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => toggleIsLoaded(true), 1000);
  }, []);

  return (
    <div className="time-container">
      <div className="countdown-time">
        {isLoaded && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownDisplay;
