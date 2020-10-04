import './Month.css';
import Day from '../Day/Day';
import React from 'react';

const Month = (props) => {
  const dayClicked = (day) => {
    props.toggleDay(day);
  }
  const makeDays = (days) => {
    const dayElements = [];
    for(let i = 1; i <= days; i++) {
      dayElements.push((<Day key={i} onClick={dayClicked} value={i}></Day>));
    }
    return dayElements;
  }

  return (
    <div className="month">
      <h3>{props.value.shortName}</h3>
      {props.value.days.map((isFilledDay, index) => 
        (<Day key={index} onClick={dayClicked} isFilled={isFilledDay} value={index+1}></Day>))}
    </div>
  );
};
export default Month;