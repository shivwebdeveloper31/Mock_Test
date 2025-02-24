import React, { useEffect, useState } from "react";

function CountDown({ time }) {
  const startTime = time * 60;
  const [timeLeft, setTimeLeft] = useState(startTime);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timeInterval = setInterval(
      () => setTimeLeft((timeLeft) => timeLeft - 1),
      1000
    );
    return () => {
      clearInterval(timeInterval);
    };
  }, [timeLeft]);
  const timeFormat = (seconds) => {
    const Hr = Math.floor(seconds / 3600);
    const Min = Math.floor((seconds % 3600) / 60);
    const Secs = seconds % 60;
    const format = `${Hr.toString().padStart(2, "0")}:${Min.toString().padStart(
      2,
      "0"
    )}:${Secs.toString().padStart(2, "0")}`;
    return format;
  };
  return <div>{timeFormat(timeLeft)}</div>;
}

export default CountDown;
