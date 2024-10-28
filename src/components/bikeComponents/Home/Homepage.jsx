// import React from "react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./home.module.css";
import { RiArrowRightSLine } from "react-icons/ri";

  const Homepage = () => {
  const router = useRouter();
  const categories = [
    { id: 1, label: "Cars", image: "/bikeImages/car.png", link: "/cars" },
    { id: 2, label: "Bikes", image: "/bikeImages/bike.png", link: "/bikes" },
    { id: 3, label: "Property", image: "/bikeImages/prop.png", link: "/property" },
    { id: 4, label: "Appliances", image: "/bikeImages/Appliance.png", link: "/appliances" },
    { id: 5, label: "Books", image: "/bikeImages/books.png", link: "/books" },
    { id: 6, label: "Furniture", image: "/bikeImages/furn.png", link: "/furniture" },
    { id: 7, label: "Clothing", image: "bikeImages/clot.png", link: "/clothing" },
    { id: 8, label: "Free Auctions", image: "/bikeImages/auction.png", link: "/auctions" },
    { id: 9, label: "Jobs", image: "/bikeImages/jobs.png", link: "/jobs" },
    { id: 10, label: "Movies & Events", image: "/bikeImages/movies-image.png", link: "/movies" },
    { id: 11, label: "Electronics", image: "/bikeImages/electronics-image.png", link: "/electronics" },
    { id: 12, label: "Vacation", image: "/bikeImages/vacation-image.png", link: "/vacation" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  // Function to handle navigation
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };
  const openModal = (category, event) => {
    event.preventDefault(); // Prevent default navigation
    if (category === "Cars") {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory("");
  };
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          SHOP WHAT YOU LIKE USING{" "}
          <span className={styles.categoryText}>CATEGORIES</span>
        </h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}  onClick={(event) => openModal(category.label, event)}>
              <Link href={category.link}>
                <img
                  src={category.image}
                  alt={category.label}
                  className={styles.image}
                />
              </Link>
            </div>
          ))}
        </div>
  
        {/* Section 3 */}
        <div className={styles.section_3}>
          <div className={styles.product_banner}>
            <img src="/bikeImages/product_Banner.png" />
            <div className={styles.overlay}></div>
            <p className={styles.overlayText}>Best Product At Lowest Price</p>
          </div>
  
          <div className={styles.quick_accessWrapper}>
            <p className={styles.quick_accessText}>Quick Access</p>
            <div className={styles.quick_access}>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/setting.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/setting.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/notification.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/pricetag.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/box.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/user.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 md:p-10 lg:p-20 rounded-lg shadow-lg max-w-full w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl relative h-auto lg:h-[500px]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-center text-xl md:text-2xl font-bold mt-2 lg:-mt-10">Cars</h2>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:h-full">
              {/* Left Section - Category Cards */}
              <div className="space-y-6 lg:space-y-10 w-full lg:w-auto">
                {/* Used Cars Card */}
                <div
                  className="shadow-md rounded-lg p-3 flex items-center justify-between cursor-pointer transition transform hover:scale-105 bg-gray-100 relative w-full lg:w-[320px] h-[80px] lg:h-[100px]"
                  onClick={() => handleNavigation("/cars")}
                >
                  <div className="flex items-center space-x-4">
                    {/* Car Image */}
                    <img
                      src="/images/carcompare.png"
                      alt="Used Cars"
                      className="absolute -left-6 rounded-md object-cover hidden sm:block"
                      style={{ width: '50px', height: '50px' }} // Smaller image for smaller screens
                    />

                    {/* Text Section */}
                    <div className="pl-0 sm:pl-12"> {/* Adjust padding-left on small screens */}
                      <h3 className="text-lg lg:text-xl font-semibold">Used</h3>
                      <p className="text-gray-500 text-sm lg:text-base">XXX available</p>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full flex items-center justify-center shadow-lg absolute -right-2">
                    <span className="text-gray-500 text-lg lg:text-xl"><RiArrowRightSLine /></span>
                  </div>
                </div>

                {/* New Cars Card */}
                <div
                  className="shadow-md rounded-lg p-3 flex items-center justify-between cursor-pointer transition transform hover:scale-105 bg-gray-100 relative w-full lg:w-[320px] h-[80px] lg:h-[100px]"
                  onClick={() => handleNavigation("/new-cars")}
                >
                  <div className="flex items-center space-x-4">
                    {/* Car Image */}
                    <img
                      src="/images/carcompare.png"
                      alt="New Cars"
                      className="absolute -left-6 rounded-md object-cover hidden sm:block"
                      style={{ width: '50px', height: '50px' }} // Smaller image for smaller screens
                    />

                    {/* Text Section */}
                    <div className="pl-0 sm:pl-12"> {/* Adjust padding-left on small screens */}
                      <h3 className="text-lg lg:text-xl font-semibold">New</h3>
                      <p className="text-gray-500 text-sm lg:text-base">XXX available</p>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full flex items-center justify-center shadow-lg absolute -right-2">
                    <span className="text-gray-500 text-lg lg:text-xl"><RiArrowRightSLine /></span>
                  </div>
                </div>
              </div>

              {/* Right Section - Ad Section */}
              <div className="mt-6 lg:mt-0 lg:ml-10 flex flex-col justify-center w-full lg:w-auto">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/googleadd.png" // Replace with actual ad image path
                    alt="Ad"
                    className="rounded-lg object-cover w-full lg:w-[620px] h-[150px] md:h-[200px] lg:h-[250px]" // Adjust ad image size for different screens
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
};

export default Homepage;
