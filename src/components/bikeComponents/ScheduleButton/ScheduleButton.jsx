export default function ScheduleButton({ onSchedule }) {
  return (
    <button className="schedule-button" onClick={onSchedule}>
      Schedule Test Drive
      <style jsx>{`
        .schedule-button {
          padding: 15px 25px;
          background-color: red;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
        }
        .schedule-button:hover {
          background-color: darkred;
        }
      `}</style>
    </button>
  );
}
