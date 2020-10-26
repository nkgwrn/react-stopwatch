import React, { useState } from "react";
import MeasurementButton from "./components/MeasurementButton";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [milliseconds, setMilliseconds] = useState("000");

  const [stopWatchId, setStopWatchId] = useState(null);

  const [isStartActive, setIsStartActive] = useState(true);
  const [isStopActive, setIsStopActive] = useState(false);
  const [isResetActive, setIsResetActive] = useState(false);

  let startTime;

  const countUp = () => {
    const d = new Date(Date.now() - startTime);

    const upDateMinutes = String(d.getMinutes()).padStart(2, "0");
    const upDateSeconds = String(d.getSeconds()).padStart(2, "0");
    const upDateMilliseconds = String(d.getMilliseconds()).padStart(3, "0");

    setMinutes(upDateMinutes);
    setSeconds(upDateSeconds);
    setMilliseconds(upDateMilliseconds);
  };

  const stopWatchClick = () => {
    if (stopWatchId === null) {
      startTime = new Date();
      setStopWatchId(setInterval(countUp, 33));
      setIsStartActive(false);
      setIsStopActive(true);
      setIsResetActive(false);
    } else {
      clearInterval(stopWatchId);
      setStopWatchId(null);
      setIsStartActive(true);
      setIsStopActive(false);
      setIsResetActive(true);
    }
  };

  const resetClick = () => {
    setMinutes("00");
    setSeconds("00");
    setMilliseconds("000");
  };

  return (
    <div className="App">
      <div className="App__head">
        <p>
          <span>{minutes}</span>:<span>{seconds}</span>:
          <span>{milliseconds}</span>
        </p>
      </div>
      <div className="App__body">
        <MeasurementButton
          onClick={resetClick}
          value={"Reset"}
          isActive={isResetActive}
        />
        <MeasurementButton
          onClick={stopWatchClick}
          value={"Start"}
          isActive={isStartActive}
        />
        <MeasurementButton
          onClick={stopWatchClick}
          value={"Stop"}
          isActive={isStopActive}
        />
      </div>
    </div>
  );
}

export default App;
