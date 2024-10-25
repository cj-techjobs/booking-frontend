"use client";
import React, { useState } from "react";
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

const brands = [
  {
    id: 1,
    title: "Harley Davidson",
    image: "/bikeImages/Harley.png", // You can replace with the correct path
  },
  {
    id: 2,
    title: "Hero",
    image: "/bikeImages/Hero.png",
  },
  {
    id: 3,
    title: "Honda",
    image: "/bikeImages/Honda.png",
  },
  {
    id: 4,
    title: "Ola",
    image: "/bikeImages/Ola.png",
  },
  {
    id: 5,
    title: "Royal Enfield",
    image: "/bikeImages/Royal.png",
  },
  {
    id: 6,
    title: "Royal Enfield",
    image: "/bikeImages/Royal.png",
  },
  {
    id: 7,
    title: "Ola",
    image: "/bikeImages/Ola.png",
  },
  {
    id: 8,
    title: "Honda",
    image: "/bikeImages/Honda.png",
  },
  {
    id: 9,
    title: "Hero",
    image: "/bikeImages/Hero.png",
  },
  {
    id: 10,
    title: "Harley",
    image: "/bikeImages/Harley.png",
  },
  // Add more product objects here
];

// Mock data for each category
const bikeTabsData = {
  latest: [
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
  upcoming: [
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
  bestseller: [
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
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleBikeClick = (bike) => {
    setModalOpen(true);
  };

  const [isModalOpen, setModalOpen] = useState(false);
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
              src="/bikeImages/Sitelogo.png"
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
 
      <div className="container">
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
                  key={brand.id}
                  brand={brand}
                  onBrandClick={handleModalOpen}
                />
              ))}
            </div>
          </div>

          {/* Section 3  */}
          <div className="featured-bikes">
            <h2>Featured bikes</h2>
            <FeaturedBikes tabsData={bikeTabsData} />
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
          <ImageBanner />

          {/* section 7 */}
          <div className="featured-bikes">
            <h2>Shop cars by price</h2>
            <FeaturedBikes tabsData={byPrice} onBikeClick={handleBikeClick} />
          </div>

          {/* Section 7  */}
          <WhyChooseUs />

          {/* Section 8  */}
          <div className={styles.offerWrapper}>
            <h1>Offer of this month</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit donec mi
              aliquam montes, sodales a id nibh sollicitudin. Nisi sapien
              phasellus erat turpis semper proin ad quam, dui at tristique
            </p>
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
