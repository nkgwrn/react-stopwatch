import React, { useState } from "react";
import MeasurementButton from "./components/MeasurementButton";

function App() {
  const [time, setTime] = useState(0);
  const [stopWatchId, setStopWatchId] = useState(null);

  const countUp = () => {
    setTime((time) => time + 1);
  };

  const startClick = () => {
    if (stopWatchId === null) {
      setStopWatchId(setInterval(countUp, 1000));
    }
  };

  const stopClick = () => {
    if (stopWatchId !== null) {
      clearInterval(stopWatchId);
      setStopWatchId(null);
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
        <MeasurementButton onClick={resetClick} value={"Reset"} />
        <MeasurementButton onClick={startClick} value={"Start"} />
        <MeasurementButton onClick={stopClick} value={"Stop"} />
      </div>
    </div>
  );
}

export default App;
