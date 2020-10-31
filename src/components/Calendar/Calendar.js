import React, { useState } from 'react';
import './Calendar.css';
import usePersistedState from '../../util/usePersistedState';
import Month from '../Month/Month';
import createDefaultCalendar from '../../util/createDefaultCalendar';

const Calendar = () => {
  const [calendar, setCalendar] = usePersistedState('calendar', createDefaultCalendar);
  const [showConfirm, setShowConfirm] = useState(false);

  const createToggleDay = (index) => (day) => {
    const updatedCalendar = [...calendar];
    updatedCalendar[index] = {...updatedCalendar[index]};
    updatedCalendar[index].days[day-1] = !updatedCalendar[index].days[day-1];
    setCalendar(updatedCalendar);
  };

  const clearCalendar = () => {
    setCalendar(createDefaultCalendar());
    setShowConfirm(false);
  };

  const cancelClear = () => {
    setShowConfirm(false);
  }

  const onClearClicked = () => {
    setShowConfirm(true);
  }

  return (
    <div>
      <h2>Every Day Calendar</h2>
      <button className="reset" onClick={onClearClicked}>Clear</button>
      {showConfirm ? (
        <div className="confirmClear">
          <div>Are you sure you want to clear the calendar? This can not be undone</div>
          <button className="confirmButton" onClick={clearCalendar}>Clear</button>
          <button className="confirmButton" onClick={cancelClear}>Cancel</button>
        </div>
      ) : null}
      <div className="months">
        {calendar.map((month, index) => <Month value={month} key={month.shortName} toggleDay={createToggleDay(index)}></Month>)}
      </div>
    </div>
  );
};

export default Calendar;
