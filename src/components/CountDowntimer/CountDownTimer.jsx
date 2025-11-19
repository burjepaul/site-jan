import { useEffect, useState } from "react";
import "./CountDownTimer.css"; // ← import the CSS

export default function CountdownTimer({ startTime }) {
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    const start = new Date(startTime);
    const endTime = new Date(start.getTime() + 4 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
      <div className="countdown-boxes">
        <TimeBox label="Hrs" value={hours} />
        <TimeBox label="Min" value={minutes} />
        <TimeBox label="Sec" value={seconds} />
      </div>
  );
}

function TimeBox({ label, value }) {
  const formatted = value.toString().padStart(2, "0");

  return (
    <div className="time-box">
      <span className="time-value">{formatted}</span>
      <span className="time-label">{label}</span>
    </div>
  );
}
