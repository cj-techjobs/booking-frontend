"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import "./FeaturedBikes.css";
// Utility function to sanitize tab names (replace spaces and hyphens with underscores)
const sanitizeTabName = (name) => name.replace(/[\s\-]/g, "_"); // Replaces spaces and hyphens with underscores

const FeaturedBikes = ({ tabsData = {}, onBikeClick }) => {
  // Sanitize tab names for consistent internal usage
  const sanitizedTabs = Object.keys(tabsData).reduce((acc, tab) => {
    acc[sanitizeTabName(tab)] = tabsData[tab];
    return acc;
  }, {});

  // Set the first sanitized tab as the active tab
  const [activeTab, setActiveTab] = useState(
    Object.keys(sanitizedTabs)[0] || ""
  );

  useEffect(() => {
    if (Object.keys(sanitizedTabs).length > 0) {
      setActiveTab(Object.keys(sanitizedTabs)[0]);
    }
  }, [tabsData]);

  const handleTabChange = (tab) => {
    const sanitizedTab = sanitizeTabName(tab);
    if (sanitizedTabs[sanitizedTab]) {
      setActiveTab(sanitizedTab); // Use sanitized name internally
    }
  };

  // Check if there are any tabs available
  if (
    !activeTab ||
    !sanitizedTabs[activeTab] ||
    Object.keys(sanitizedTabs).length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="tabs">
        {Object.keys(tabsData).map((tab, index) => (
          <button
            key={index}
            className={activeTab === sanitizeTabName(tab) ? "active" : ""}
            onClick={() => handleTabChange(tab)}
          >
            {tab} {/* Display original tab name */}
          </button>
        ))}
      </div>

      <div className="bikes-list scrollable-container">
        {sanitizedTabs[activeTab].length > 0 ? (
          sanitizedTabs[activeTab].map((bike, index) => (
            <div className="bike-card" key={index} >
              <img onClick={()=>window.location.pathname='/specifications'}  src={bike.image} alt={bike.name} />
              <h3>
                {bike.name} with {bike.model}
              </h3>
              <p>{bike.price}</p>
            </div>
          ))
        ) : (
          <p>No bikes available in this category.</p>
        )}
      </div>
    </>
  );
};

export default FeaturedBikes;
