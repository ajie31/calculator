import React, { Component } from "react";

const Display = ({ onDisplay, onResult }) => {
  return (
    <div className="row display-container">
      <div>
        <h3>{onDisplay}</h3>
        <h3 id="display">{onResult}</h3>
      </div>
    </div>
  );
};
export default Display;
