import { useState } from "react";
import Map from "../Map/Map";
import "./LocationSelector.css";
export default function LocationSelector({ onShowroomSelect }) {
  const [selectedShowroom, setSelectedShowroom] = useState("Showroom 1");
  // Function to handle button click
  const handleShowroomClick = (showroom) => {
    setSelectedShowroom(showroom);
    onShowroomSelect(showroom); // Call parent function to update selected showroom
  };
  return (
    <div className="location-selector">
      <div className="header">
        <div className="border"></div>
        <h3>Select location for Test Drive</h3>
      </div>

      <div className="buttons">
        <button
          onClick={() => handleShowroomClick("Showroom 1")}
          className={selectedShowroom === "Showroom 1" ? "active" : ""}
        >
          Showroom 1
        </button>
        <button
          onClick={() => handleShowroomClick("Showroom 2")}
          className={selectedShowroom === "Showroom 2" ? "active" : ""}
        >
          Showroom 2
        </button>
        <button
          onClick={() => handleShowroomClick("My location")}
          className={selectedShowroom === "My location" ? "active" : ""}
        >
          My location
        </button>
      </div>

      <div className="map">
        <Map selectedShowroom={selectedShowroom} />
      </div>
    </div>
  );
}
