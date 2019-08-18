import React from "react";

const Advertisement = ({ style }) => {
  return (
    <div className={`${style.advertisement}`}>
      <div>
        <h1>TODAY'S OFFER</h1>
      </div>
      <div>
        <h1>Nooni Sprout</h1>
        <h1>Smoothing Toner</h1>
      </div>
      <div>
        <h1>30% OFF</h1>
      </div>
    </div>
  );
};

export default Advertisement;
