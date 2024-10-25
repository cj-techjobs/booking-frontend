"use client";
import Image from "next/image";
import styles from "./Specification.module.css";
import { useState } from "react";

// List of cities with image and name (you can replace with real data)
const cities = [
  { name: "Mumbai", image: "/cities/mumbai.png" },
  { name: "Delhi", image: "/cities/delhi.png" },
  { name: "Bangalore", image: "/cities/bangalore.png" },
  { name: "Chennai", image: "/cities/chennai.png" },
  { name: "Kolkata", image: "/cities/kolkata.png" },
  { name: "Pune", image: "/cities/pune.png" },
  { name: "Hyderabad", image: "/cities/hyderabad.png" },
  { name: "Ahmedabad", image: "/cities/ahmedabad.png" },
];

const Specification = () => {
  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // New state for selected city

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchCity(e.target.value);
  };

  // Function to handle city selection
  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName); // Set the selected city
    closeModal(); // Close modal after selecting city
  };

  // Function to handle fetching current location (dummy for now)
  const fetchLocation = () => {
    alert("Fetching current location...");
  };

  return (
    <>
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
            <button onClick={() => setModalOpen(true)} className="">
              Open Modal
            </button>
          </div>
        </div>
      </header>

      <div className={`w100 flex justify-between container ${styles.SpecificationContent}`}>
        <div className={styles.leftContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Bike1.jpg"
              alt="Description of image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Specification Section */}
          <div className={styles.specsWrapper}>
            <h2 className={styles.keyTitle}> Key Specifications</h2>
            <div className={styles.keySpecs}>
              <div className={styles.spec}>
                <div className={styles.icon}>
                  <Image
                    src="/spec1.png"
                    alt="Mileage"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.textLabel}>Mileage (kmpl)</p>
                  <h3 className={styles.textValue}>20.9 kmpl</h3>
                </div>
              </div>

              <div className={styles.spec}>
                <div className={styles.icon}>
                  <Image
                    src="/spec2.png"
                    alt="Ground clearance"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.textLabel}>Ground clearance</p>
                  <h3 className={styles.textValue}>180 mm</h3>
                </div>
              </div>

              <div className={styles.spec}>
                <div className={styles.icon}>
                  <Image
                    src="/spec3.png"
                    alt="Fuel capacity"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.textLabel}>Fuel capacity</p>
                  <h3 className={styles.textValue}>3 liters</h3>
                </div>
              </div>

              <div className={styles.spec}>
                <div className={styles.icon}>
                  <Image
                    src="/spec4.png"
                    alt="CC"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.textLabel}>CC</p>
                  <h3 className={styles.textValue}>120 cc</h3>
                </div>
              </div>

              <div className={styles.spec}>
                <div className={styles.icon}>
                  <Image
                    src="/spec5.png"
                    alt="Seating capacity"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.textLabel}>Seating capacity</p>
                  <h3 className={styles.textValue}>2</h3>
                </div>
              </div>

              <div className={styles.spec}>
                <div className={styles.icon}>
                  <Image
                    src="/spec5.png"
                    alt="Seating capacity"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.textLabel}>Seating capacity</p>
                  <h3 className={styles.textValue}>2</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bike Info Section */}
        <div className="w-[25%] h-full">
          <div className={styles.bikeInfo}>
            <h2 className={styles.title}>Bike Name</h2>
            <p className={styles.details}>10K km : Petrol : Automatic</p>
            <div className={styles.emiWrapper}>
              <p className={styles.emi}>EMI Available</p>
              <button className={styles.emiButton}>
                <span>emi start from</span>
                <span>₹10,000/Month</span>
              </button>
            </div>
            <div className={styles.actions}>
              <button className={styles.bookNow}>Book Now</button>
              <button className={styles.testDrive}>Book Test Drive</button>
            </div>
            <div className={styles.dateWrapper}>
              <div>
                <p className={styles.date}>1 Oct, 2024</p>
                <p className={styles.testDriveText}>Get free test drive at nearest six outlet</p>
                <p className={styles.location}>
                  {selectedCity ? `Location : ${selectedCity}` : ""}
                </p>{" "}
                {/* Display selected city */}
              </div>
              <Image
                src="/Location.png"
                alt="Mileage"
                width={48}
                height={48}
                className={styles.mapIcon}
                onClick={openModal} // Open modal on click
              />
            </div>

            {/* Modal Component */}
            {isModalOpen && (
              <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                  <h2>Select Your City</h2>

                  {/* Search Bar */}
                  <input
                    type="text"
                    value={searchCity}
                    onChange={handleSearchChange}
                    placeholder="Search for your city..."
                    className={styles.searchInput}
                  />

                  {/* Fetch Current Location Button */}
                  <button
                    onClick={fetchLocation}
                    className={styles.locationButton}
                  >
                    Fetch from device
                  </button>

                  {/* Grid of Cities */}
                  <div className={styles.cityGrid}>
                    {cities.map((city, index) => (
                      <div
                        key={index}
                        className={styles.cityItem}
                        onClick={() => handleCitySelect(city.name)}
                      >
                        <Image
                          src={city.image}
                          alt={city.name}
                          width={100}
                          height={100}
                          className={styles.cityImage}
                        />
                        <p className={styles.cityName}>{city.name}</p>
                      </div>
                    ))}
                  </div>

                  <button onClick={closeModal} className={styles.closeButton}>
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className={styles.priceWrapper}>
              <h2 className={styles.priceTitle}>
                Price Breakup
              </h2>
              <div className="mb-3">
                <div className={styles.priceDetailWrapper}>
                  <span className={styles.priceDetail}>Ex-Showroom: </span>
                  <span className={styles.priceDetail}>₹79,250</span>
                </div>
                <div className={styles.priceDetailWrapper}>
                  <span className={styles.priceDetail}>Registration: </span>
                  <span className={styles.priceDetail}>₹6,240</span>
                </div>
                <div className={styles.priceDetailWrapper}>
                  <span className={styles.priceDetail}>Fast Tag: </span>
                  <span className={styles.priceDetail}>₹3,500</span>
                </div>
                <div className={styles.priceDetailWrapper}>
                  <span className={styles.priceDetail}>Insurance: </span>
                  <span className={styles.priceDetail}>₹3,500</span>
                </div>
              </div>
              <div className={styles.totalPrice}>
                <span className={styles.priceDetail}>
                  On-road Price:{" "}
                </span>
                <span className={styles.priceDetail}>₹80,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specification;
