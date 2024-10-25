"use client";
import React, { useState } from "react";
import "./ScheduledPage.css";
import LocationSelector from "../LocationSelector/LocationSelector";
import Calendar from "../Calendar/Calendar";
import Map from "../Map/Map";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import ConfirmationMessage from "../ConfirmationMessage/ConfirmationMessage";
const ScheduledPage = () => {
  const [selectedShowroom, setSelectedShowroom] = useState("Showroom 1");
  const [showConfirmation, setShowConfirmation] = useState(false); // Add state to control confirmation message

  const handleShowroomSelect = (showroom) => {
    setSelectedShowroom(showroom);
  };

  const handleSchedule = () => {
    setShowConfirmation(true); // Show confirmation message
  };

  const closeConfirmation = () => {
    setShowConfirmation(false); // Hide confirmation message when it's closed
  };
  return (
    <>
      {/* Header Section  */}
      <header
        style={{
          borderBottomRightRadius: "12px",
          borderBottomLeftRadius: "12px",
          boxShadow: "#E9424240 0px 10px 20px, #E9424240 0px 6px 6px;",
          position: "sticky",
          top: "0",
          backgroundColor: "#ffffff",
          zIndex: 20,
        }}
      >
        <div>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/Sitelogo.png"
              alt="Six Logo"
              style={{ height: "60px", width: "95px" }}
            />
            <p style={{ fontSize: "34px", fontWeight: "400" }}>Bikes</p>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="upperSection">
          <div className="imageWrapper">
            <img src="/Bike1.jpg" alt="bikeImage" />
          </div>
          <div className="contentWrapper">
            <h1>2022 Maruti Suzuki Baleno Zeta AMT Petrol</h1>
            <p className="price">₹8,50,000</p>
          </div>
        </div>

        {/* Second Section  */}
        <div className="secondSection">
          <div className="selectors">
            <LocationSelector onShowroomSelect={handleShowroomSelect} />
            <Calendar onSchedule={handleSchedule} />
          </div>
        </div>

        {/* Confirmation Overlay */}
        {showConfirmation && (
          <div className="overlay">
            <ConfirmationMessage onClose={closeConfirmation} />
          </div>
        )}
      </div>
    </>
  );
};

export default ScheduledPage;
