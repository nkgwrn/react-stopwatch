import React from "react";

const MeasurementButton = ({ onClick, value }) => (
  <button onClick={onClick}>{value}</button>
);

export default MeasurementButton;
