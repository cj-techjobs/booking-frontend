import React, { useState } from "react";

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
    // Add more brands and models here...
  ];

  const handleBrandClick = (brandName) => {
    // Toggle the brand's model list
    setSelectedBrand((prevBrand) => (prevBrand === brandName ? null : brandName));
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
        {/* Modal Header */}
        <div className="bg-gray-100 p-6 relative">
          <h2 className="text-xl font-semibold">Select brand and model</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✖️
          </button>
        </div>

        {/* Search bar under the header */}
        <div className="bg-white p-4">
          <input
            type="text"
            placeholder="Type to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Car Brands List */}
        <div className="p-4 max-w-md mx-auto">
          <ul className="divide-y divide-gray-300 border rounded-lg shadow-sm bg-white">
            {carBrands
              .filter((brand) =>
                brand.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((brand, index) => (
                <li key={index} className="py-3">
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-100"
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
                      <span className="text-gray-800 text-lg font-medium">{brand.name}</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      {selectedBrand === brand.name ? "▲" : "▼"}
                    </button>
                  </div>

                  {/* Show models when the brand is selected */}
                  {selectedBrand === brand.name && (
                    <ul className="mt-2 bg-gray-50 rounded-lg shadow-inner divide-y divide-gray-200">
                      {brand.models.map((model, modelIndex) => (
                        <li
                          key={modelIndex}
                          className="text-gray-700 p-2 px-6 hover:bg-gray-100"
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
