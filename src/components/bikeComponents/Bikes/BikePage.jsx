"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import AdBanner from "../AdBanner/AdBanner";
import Brands from "../Brands/Brands";
import styles from "./Bikes.module.css";
import FeaturedBikes from "../FeaturedBike/FeaturedBikes";
import ImageBanner from "../ImageBanner/ImageBanner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
import Modal from "../SelectModal/Modal";
import BikeComparison from "../BikeComparison/BikeComparison";
import ComparisonModal from "../ComparisonModal/ComparisonModal";
import SelectBikeModal from "../SelectBikeModal/SelectBikeModal";
import ComparisonListing from "../ComparisonListing/ComparisonListing";


const mostSearched = {
  Sports: [
    {
      name: "Bike 1",
      model: "Model 2024",
      price: "Rs. 1,00,000",
      image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 2",
      model: "Model 2024",
      price: "Rs. 1,20,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
  Scooter: [
    {
      name: "Upcoming Bike 1",
      model: "Model 2025",
      price: "Rs. 1,50,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 3",
      model: "Model 2025",
      price: "Rs. 1,80,000",
      image: "/bikeImages/Bike.jpg",
    },
  ],
  Adventure: [
    {
      name: "Bestseller Bike 1",
      model: "Model 2023",
      price: "Rs. 90,000",
      image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 3",
      model: "Model 2023",
      price: "Rs. 95,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
  "Cafe rider": [
    {
      name: "Bestseller Bike 1",
      model: "Model 2023",
      price: "Rs. 90,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 3",
      model: "Model 2023",
      price: "Rs. 95,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
};

const byPrice = {
  "30-40k": [
    {
      name: "Bike 1",
      model: "Model 2024",
      price: "Rs. 1,00,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 2",
      model: "Model 2024",
      price: "Rs. 1,20,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bike 3",
      model: "Model 2024",
      price: "Rs. 1,40,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
  "50k - 70k": [
    {
      name: "Upcoming Bike 1",
      model: "Model 2025",
      price: "Rs. 1,50,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 2",
      model: "Model 2025",
      price: "Rs. 1,70,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Upcoming Bike 3",
      model: "Model 2025",
      price: "Rs. 1,80,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
  "70k - 90k": [
    {
      name: "Bestseller Bike 1",
      model: "Model 2023",
      price: "Rs. 90,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 3",
      model: "Model 2023",
      price: "Rs. 95,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
  "1L - 1.5L": [
    {
      name: "Bestseller Bike 1",
      model: "Model 2023",
      price: "Rs. 90,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 2",
      model: "Model 2023",
      price: "Rs. 85,000",
       image: "/bikeImages/Bike.jpg",
    },
    {
      name: "Bestseller Bike 3",
      model: "Model 2023",
      price: "Rs. 95,000",
       image: "/bikeImages/Bike.jpg",
    },
  ],
};

const BikePage = () => {
  const router = useRouter(); // Initialize the router
  const [isModalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tabsData, setTabsData] = useState({});
  const [brands, setBrands] = useState([]);
  // const tabs = ["Latest", "Upcoming", "Bestseller"]; // Define tab names

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleBikeClick = (bike) => {
    setModalOpen(true);
  };

  // Featured bike section api Call
  useEffect(() => {
    const apiUrl = "http://13.234.115.173:8000/api/v1/bike/";
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA0YjBiOWRjYzE4YjY2M2U4MDBmYzIiLCJpYXQiOjE3Mjk5MzQ5MjMsImV4cCI6MTczMDAyMTMyM30.TJj2nmJxNJzihpprjABWAwyPWDbvxXMPjZMpXoLPz9s";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response Data:", data); // Log the entire data structure

        // Access the list of bikes from the API response
        const bikeData = data.data.list; // Adjusted to access the correct path

        // Categorize data for each tab
        const categorizedData = {
          Latest: bikeData.filter((bike) => bike.isFeatured),
          Upcoming: bikeData.filter((bike) => bike.isComingSoon),
          BestSeller: bikeData.filter((bike) => bike.isBestSeller),
        };

        setTabsData(categorizedData);
      })
      .catch((error) => console.error("Error fetching bikes:", error));
  }, []);

  // Modal Section Api call
  useEffect(() => {
    const apiUrl =
      "http://13.234.115.173:8000/api/v1/cms/vehicle-regularity/model/?skip=0&limit=10";
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA0YjBiOWRjYzE4YjY2M2U4MDBmYzIiLCJpYXQiOjE3Mjk5MzQ5MjMsImV4cCI6MTczMDAyMTMyM30.TJj2nmJxNJzihpprjABWAwyPWDbvxXMPjZMpXoLPz9s";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Brand API Response Data:", data); // Check the API response structure
        setBrands(data.data); // Set the brand data directly from the response
      })
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  // const handleBikeClick = (bike) => {
  //   console.log("Bike clicked:", bike);
  //   router.push(`/Specifications/${bike._id}`);
  // };

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
          <div onClick={()=>window.location.pathname='/categories'} style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/bikeImages/Sitelogo.png"
              alt="Six Logo"
              style={{ height: "60px", width: "95px" }}
            />
            <p style={{ fontSize: "34px", fontWeight: "400" }}>Bikes</p>
            
          </div>
        </div>
      </header>

      <div className="custom-container ">
        <div className="Bike--page">
          {/* Section 1 */}
          <h3 className={styles.adBanner_title}>
            what’s your <span>perfect</span> ride ?
          </h3>
          <AdBanner />

          {/* Section 2  */}
          <div className={styles.brandWrapper}>
            <h3 className={styles.brandTitle}>
              Shop by <span>Brands</span>
            </h3>
            <div className="scrollable-container">
              {brands.map((brand) => (
                <Brands
                  key={brand._id} // Use the `_id` from the brand object as the key
                  brand={brand}
                  onBrandClick={handleModalOpen}
                />
              ))}
            </div>
          </div>

          {/* Section 3  */}
          <div className="featured-bikes">
            <h2>Featured bikes</h2>
            <FeaturedBikes
              tabsData={tabsData}
              onBikeClick={(bike) => {
                console.log("Bike clicked:", bike);
                router.push(`/Specifications/${bike._id}`); // Redirect to the specific page
              }}
            />
          </div>

          {/* Section 4  */}
          <div className={styles.section_4}>
            <AdBanner />
          </div>

          {/* Section 5  */}
          <div className={styles.mostSearched_bikes}>
            <h2>
              Mostly searched <span>bikes</span>
            </h2>
            <FeaturedBikes tabsData={mostSearched} />
          </div>

          {/* section 6 */}
          <ImageBanner setModalOpen={setModalOpen} />

          {/* section 7 */}
          <div className="featured-bikes">
            <h2>Shop bikes by price</h2>
            <FeaturedBikes tabsData={byPrice} onBikeClick={handleBikeClick} />
          </div>

          {/* Section 7  */}
          <WhyChooseUs />

          {/* Section 8  */}
          <div className={styles.offerWrapper}>
            <h2 className=" font-semibold text-5xl my-5 mt-10">Offer of this month</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit donec mi
              aliquam montes, sodales a id nibh sollicitudin. Nisi sapien
              phasellus erat turpis semper proin ad quam, dui at tristique
            </p>
            <img
              src="/bikeImages/offer.png"
              alt="Six Logo"
              style={{ height: "100%", width: "100%",marginTop:20 }}
            />
          </div>

          {/* Section 9 */}
          <Footer />
        </div>
      </div>

      <ComparisonModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <BikeComparison />
      </ComparisonModal>

      {/* <SelectBikeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ComparisonListing />
      </SelectBikeModal> */}

      <Modal showModal={showModal} onClose={handleModalClose} />
    </>
  );
};

export default BikePage;
