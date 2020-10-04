import React from 'react';
import './Day.css';

const Day = (props) => {
  return (
    <div className="hexagon-parent" onClick={() => props.onClick(props.value)}>
      <div className={props.isFilled ? "hexagon fill" : "hexagon"}>
        <span>{props.value}</span>
      </div>
    </div>
  );
};

export default Day;
