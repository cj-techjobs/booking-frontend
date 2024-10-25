import ScheduleButton from "../ScheduleButton/ScheduleButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import React, { useState } from "react";

export default function Calendar({ onSchedule }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  
  return (
    <div className="calendar">
      <div className="headerSection">
        <div className="header">
          <div className="border"></div>
          <h3>Select Time Slot</h3>
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          inline
        />
        {/* <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15} // Time intervals in minutes
            timeCaption="Time"
            dateFormat="h:mm aa"
          /> */}
      </div>

      <div className="scheduleButton">
        <ScheduleButton onSchedule={onSchedule} />
      </div>
    </div>
  );
}
