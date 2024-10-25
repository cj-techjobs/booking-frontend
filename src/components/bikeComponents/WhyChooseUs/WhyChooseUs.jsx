// components/WhyChooseUs.js
import React from "react";
import "./WhyChooseUs.css";
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "/icon1.png", // Replace with the actual icon paths
      title: "Easy online booking",
      description: "Choose bikes and make easy online bookings.",
    },
    {
      icon: "/icon2.png",
      title: "Free Test drive",
      description: "Get a free test drive at selected locations.",
    },
    {
      icon: "/icon3.png",
      title: "High quality",
      description: "Choose from our range of high-quality bikes.",
    },
    {
      icon: "/icon4.png",
      title: "Online Payment",
      description: "Make secure online payments for your bikes.",
    },
  ];

  return (
    <section
      className="why-choose-us"
      style={{ padding: "50px 0", textAlign: "left" }}
    >
      <h2>Why choose us?</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          flexWrap: 'wrap'
        }}
        className="listWrapper"
      >
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="content"
            style={{ width: "200px", textAlign: "left" }}
          >
            <div className="image">
              {/* <img
                src={reason.icon}
                alt={reason.title}
                style={{ width: "50px", height: "50px" }}
              /> */}
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
