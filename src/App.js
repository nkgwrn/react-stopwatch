import React, { useState } from "react";
import MeasurementButton from "./components/MeasurementButton";
import "./App.css";

function App() {
  const [stopWatchId, setStopWatchId] = useState(null);

  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [milliseconds, setMilliseconds] = useState("000");

  const [isStartActive, setIsStartActive] = useState(true);
  const [isStopActive, setIsStopActive] = useState(false);
  const [isResetActive, setIsResetActive] = useState(false);

  const [diffTime, setDiffTime] = useState(0);
  const [countTime, setCountTime] = useState(0);

  let startTime;

  const countUp = () => {
    // const countUpDate = new Date(Date.now() - startTime + diffTime);
    const countUpDate = Date.now() - startTime + diffTime;

    // const upDateMinutes = String(countUpDate.getMinutes()).padStart(2, "0");
    // const upDateSeconds = String(countUpDate.getSeconds()).padStart(2, "0");
    // const upDateMilliseconds = String(countUpDate.getMilliseconds()).padStart(
    //   3,
    //   "0"
    // );

    var upDateMinutes = String(
      Math.floor(countUpDate / 60000)).padStart(2, "0");
    var upDateSeconds = String(
      Math.floor((countUpDate % 60000) / 1000)).padStart(2, "0")
    var upDateMilliseconds = String((countUpDate % 1000)).padStart(3, "0")

    setCountTime(countUpDate);
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
      setDiffTime(countTime);
    }
  };

  const resetClick = () => {
    setMinutes("00");
    setSeconds("00");
    setMilliseconds("000");
    setDiffTime(0);
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
