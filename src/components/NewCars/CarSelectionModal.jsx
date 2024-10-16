import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CarSelectionModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null); // Track selected brand

  const carBrands = [
    {
      name: "Maruti Suzuki",
      models: [
        "Fronx",
        "Brezza",
        "Grand Vitara",
        "Swift",
        "Alto K10",
        "Ertiga",
        "Baleno",
        "Wagon R",
        "XL6",
      ],
    },
    {
      name: "Tata",
      models: ["Nexon", "Harrier", "Safari", "Punch", "Altroz"],
    },
    {
      name: "Toyota",
      models: ["Innova", "Fortuner", "Glanza", "Urban Cruiser", "Yaris"],
    },
    {
      name: "Mahindra",
      models: ["XUV700", "Scorpio", "Bolero", "Thar", "XUV300"],
    },
    // Add more brands and models here...
  ];

  const handleBrandClick = (brandName) => {
    // Toggle the brand's model list
    setSelectedBrand((prevBrand) =>
      prevBrand === brandName ? null : brandName
    );
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg max-h-[80vh] mx-auto rounded-lg overflow-hidden shadow-lg relative">
        {/* Modal Header */}
        <div className="bg-gray-200 p-4 h-[5rem] relative z-30">
          <h2 className="text-2xl font-semibold text-left">
            Select brand and model
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✖️
          </button>
        </div>

        {/* Conditionally show the search bar and car brands when no brand is selected */}
        {selectedBrand === null && (
          <div className="p-4 max-w-md mx-auto relative -mt-10 z-50 ">
            {/* Search bar */}
            <input
              type="text"
              placeholder="Type to search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Car Brands List */}
        <div className="p-4 max-w-md mx-auto max-h-[50vh] overflow-y-auto">
          <ul className="divide-y divide-gray-300 border rounded-lg shadow-sm bg-white">
            {carBrands
              .filter((brand) =>
                brand.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((brand, index) => (
                <li key={index}>
                  <div
                    className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => handleBrandClick(brand.name)}
                  >
                    <div className="flex items-center">
                      {/* Add brand logo if necessary */}
                      <div className="mr-3">
                        <img
                          src={`/images/tatalogo.png`}
                          alt={brand.name}
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="text-gray-800 text-lg ">
                        {brand.name}
                      </span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      {selectedBrand === brand.name ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </button>
                  </div>

                  {/* Show models when the brand is selected */}
                  {selectedBrand === brand.name && (
                    <ul className="mt-2 bg-gray-50   divide-y divide-gray-200">
                      {brand.models.map((model, modelIndex) => (
                        <li
                          key={modelIndex}
                          className="text-gray-700 p-2 px-6 text-left hover:bg-gray-100"
                        >
                          {model}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarSelectionModal;
