import React, { useState } from "react";
import MeasurementButton from "./components/MeasurementButton";
import "./App.css";

function App() {
  const [stopWatchId, setStopWatchId] = useState(null);

  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [milliseconds, setMilliseconds] = useState("000");

  const [isRunning, setIsRunning] = useState(false);
  const [isReset, setIsReset] = useState(true);

  const [diffTime, setDiffTime] = useState(0);
  const [countTime, setCountTime] = useState(0);
  const [lapTime, setLapTime] = useState([]);
  let startTime;

  const countUp = () => {
    const countUpTime = Date.now() - startTime + diffTime;
    const upDateMinutes = String(Math.floor(countUpTime / 60000)).padStart(2,"0");
    const upDateSeconds = String(Math.floor((countUpTime % 60000) / 1000)).padStart(2, "0");
    const upDateMilliseconds = String(countUpTime % 1000).padStart(3, "0");

    setCountTime(countUpTime);
    setMinutes(upDateMinutes);
    setSeconds(upDateSeconds);
    setMilliseconds(upDateMilliseconds);
  };

  const timerClick = () => {
    if (stopWatchId === null) { // Click "Start"
      startTime = new Date();
      setStopWatchId(setInterval(countUp, 33));
      setIsRunning(true);
      setIsReset(false);
    } else { // Click "Stop"
      clearInterval(stopWatchId);
      setStopWatchId(null);
      setIsRunning(false);
      setIsReset(true);
      setDiffTime(countTime);
    }
  };

  const toolClick = () => {
    if (isReset) { // Click "Reset"
      setMinutes("00");
      setSeconds("00");
      setMilliseconds("000");
      setDiffTime(0);
      setLapTime([]);
    } else { // Click "Lap"
      const lapTimeText = minutes + ":" + seconds + "." + milliseconds;
      setLapTime((lapTime) => [...lapTime, lapTimeText]);
    }
  };

  return (
    <div className="App">
      <div className="App__head">
        <p>
          <span>{minutes}</span>:<span>{seconds}</span>.
          <span>{milliseconds}</span>
        </p>
      </div>
      <div className="App__body">
        <div className="App__btn">
          <MeasurementButton
            onClick={toolClick}
            value={isReset ? "Reset" : "Lap"}
            isReset={isReset}
          />
          <MeasurementButton
            onClick={timerClick}
            value={isRunning ? "Stop" : "Start"}
            isActive={isRunning}
          />
        </div>
        <ul className="App__lap">
          {lapTime.map((lapTimeItem, index) => (
            <li key={index}>{lapTimeItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
