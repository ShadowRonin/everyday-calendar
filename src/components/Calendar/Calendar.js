import React, { useState } from 'react';
import './Calendar.css';
import usePersistedState from '../../util/usePersistedState';
import Month from '../Month/Month';
import createDefaultCalendar from '../../util/createDefaultCalendar';

const Calendar = () => {
  const [calendar, setCalendar] = usePersistedState('calendar', createDefaultCalendar);

  const createToggleDay = (index) => (day) => {
    const updatedCalendar = [...calendar];
    updatedCalendar[index] = {...updatedCalendar[index]};
    updatedCalendar[index].days[day-1] = !updatedCalendar[index].days[day-1];
    setCalendar(updatedCalendar);
  };

  return (
    <div>
      <h2>Title</h2>
      <div className="months">
        {calendar.map((month, index) => <Month value={month} key={month.shortName} toggleDay={createToggleDay(index)}></Month>)}
      </div>
    </div>
  );
};

export default Calendar;
