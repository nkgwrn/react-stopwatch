import React from "react";
import "./MeasurementButton.css";

const MeasurementButton = ({ onClick, value }) => (
  <button onClick={onClick} >
    {value}
  </button>
);

export default MeasurementButton;
