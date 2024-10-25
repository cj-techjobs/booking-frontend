import React from "react";

const ComparisonListing = () => {
  return (
    <div className="bike-comparison">
      <h2 className="modalHeader">Welcome to Six Bike <span>Comparison</span></h2>
      <p>We'll help you pick your ride finely</p>

      <div className="bike-images">
        <div className="bike-column">
          <img src="/Bike1.jpg" alt="Bike 1" />
        </div>
        <div className="vs">VS</div>
        <div className="bike-column">
          <img src="/Bike1.jpg" alt="Bike 2" />
        </div>
        <div className="vs">VS</div>
        <div className="bike-column">
          <img src="/Bike1.jpg" alt="Bike 2" />
        </div>
      </div>

      <h2>Popular <span>Comparisons</span></h2>
      
    </div>
  );
};

export default ComparisonListing;
