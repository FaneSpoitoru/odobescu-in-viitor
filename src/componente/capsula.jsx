import { useState, useEffect } from "react";
import '../components_css/capsula.css';

export default function Capsula() {

  const targetDate = new Date("2035-10-16T00:00:00");
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate - new Date();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const years = Math.floor(totalSec / (3600 * 24 * 365));
    const days = Math.floor((totalSec % (3600 * 24 * 365)) / (3600 * 24));
    const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="capsula">
      <div className="capsula-body"></div>
      <div className="timer">{formatTime(timeLeft)}</div>
    </div>
  );
}