import React from "react";
import "./MeasurementButton.css";

const MeasurementButton = ({ onClick, value, isActive }) => (
  <button onClick={onClick} className={isActive ? "is-active" : ""}>
    {value}
  </button>
);

export default MeasurementButton;
