import React, { useState } from "react";
import MeasurementButton from "./components/MeasurementButton";

function App() {
  const [time, setTime] = useState(0);
  const [stopWatchId, setStopWatchId] = useState(null);
  const [isStartActive, setIsStartActive] = useState(true);
  const [isStopActive, setIsStopActive] = useState(false);
  const [isResetActive, setIsResetActive] = useState(false);

  const countUp = () => {
    setTime((time) => time + 1);
  };

  const startClick = () => {
    if (stopWatchId === null) {
      setStopWatchId(setInterval(countUp, 1000));
      setIsStartActive(false);
      setIsStopActive(true);
      setIsResetActive(false);
    }
  };

  const stopClick = () => {
    if (stopWatchId !== null) {
      clearInterval(stopWatchId);
      setStopWatchId(null);
      setIsStartActive(true);
      setIsStopActive(false);
      setIsResetActive(true);
    }
  };

  const resetClick = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <div>
        <p>{time}</p>
      </div>
      <div>
        <MeasurementButton
          onClick={resetClick}
          value={"Reset"}
          isActive={isResetActive}
        />
        <MeasurementButton
          onClick={startClick}
          value={"Start"}
          isActive={isStartActive}
        />
        <MeasurementButton
          onClick={stopClick}
          value={"Stop"}
          isActive={isStopActive}
        />
      </div>
    </div>
  );
}

export default App;
