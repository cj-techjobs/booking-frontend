import React from "react";

const BikeComparison = () => {
  return (
    <div className="bike-comparison">
      <h2 className="modalHeader">Welcome to Six Bike <span>Comparison</span></h2>
      <p>We&apos;ll help you pick your ride finely</p>


      <div className="bike-images">
        <div className="bike-column">
          <img src="bikeImages//Bike1.jpg" alt="Bike 1" />
        </div>
        <div className="vs">VS</div>
        <div className="bike-column">
          <img src="/bikeImages/Bike1.jpg" alt="Bike 2" />
        </div>
      </div>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Details</th>
            <th>Bike Name - Model</th>
            <th>Bike Name - Model</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rating</td>
            <td>3.5 stars</td>
            <td>4 stars</td>
          </tr>
          <tr>
            <td>Brand Name</td>
            <td>Yamaha</td>
            <td>Honda</td>
          </tr>
          <tr>
            <td>On-Road Price</td>
            <td>Rs. 1.5 Lakh</td>
            <td>Rs. 1.7 Lakh</td>
          </tr>
          <tr>
            <td>Engine Displacement</td>
            <td>350cc</td>
            <td>500cc</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>Sports</td>
            <td>Street</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BikeComparison;
