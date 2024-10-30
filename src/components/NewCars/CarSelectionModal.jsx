
import React, { useState } from "react";
import { useRouter } from "next/router"; // For navigation
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const CarSelectionModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null); // Track selected brand
  const [selectedCars, setSelectedCars] = useState([]); // Track selected cars

  const router = useRouter();

  const carBrands = [
    {
      name: "Maruti Suzuki",
      models: [
        { id: 1, name: "Fronx" },
        { id: 2, name: "Brezza" },
        { id: 3, name: "Grand Vitara" },
        { id: 4, name: "Swift" },
        { id: 5, name: "Alto K10" },
        { id: 6, name: "Ertiga" },
        { id: 7, name: "Baleno" },
        { id: 8, name: "Wagon R" },
        { id: 9, name: "XL6" },
      ],
    },
    {
      name: "Tata",
      models: [
        { id: 10, name: "Nexon" },
        { id: 11, name: "Harrier" },
        { id: 12, name: "Safari" },
        { id: 13, name: "Punch" },
        { id: 14, name: "Altroz" },
      ],
    },
    {
      name: "Toyota",
      models: [
        { id: 15, name: "Innova" },
        { id: 16, name: "Fortuner" },
        { id: 17, name: "Glanza" },
        { id: 18, name: "Urban Cruiser" },
        { id: 19, name: "Yaris" },
      ],
    },
    {
      name: "Mahindra",
      models: [
        { id: 20, name: "XUV700" },
        { id: 21, name: "Scorpio" },
        { id: 22, name: "Bolero" },
        { id: 23, name: "Thar" },
        { id: 24, name: "XUV300" },
      ],
    },
    // Add more brands and models here...
  ];

  const handleBrandClick = (brandName) => {
    setSelectedBrand((prevBrand) =>
      prevBrand === brandName ? null : brandName
    );
  };

  const handleCarSelect = (car) => {
    // Limit to only two cars selected
    if (selectedCars.length < 2) {
      setSelectedCars((prevSelected) => [...prevSelected, car]);
    } else {
      alert("You can only select two cars for comparison.");
    }
  };

  const handleRemoveCar = (carId) => {
    setSelectedCars(selectedCars.filter((car) => car.id !== carId));
  };

  const handleCompare = () => {
    // Ensure two cars are selected
    if (selectedCars.length === 2) {
      const [car1, car2] = selectedCars;
      router.push({
        pathname: "/compare-cars",
        query: { car1: car1.id, car2: car2.id },
      });
    } else {
      alert("Please select two cars for comparison.");
    }
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white w-full max-w-lg h-full max-h-[80vh] mx-auto rounded-lg overflow-hidden shadow-lg relative">
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
                      <Image
                        src={`/images/tatalogo.png`}
                        alt={brand.name}
                        className="w-6 h-6"
                        width={24} // 1.5rem equivalent in pixels
                        height={24} // 1.5rem equivalent in pixels
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
                  <ul className="mt-2 bg-gray-50 divide-y divide-gray-200">
                    {brand.models.map((model, modelIndex) => (
                      <li
                        key={modelIndex}
                        className={`text-gray-700 p-2 px-6 text-left hover:bg-gray-100 cursor-pointer ${
                          selectedCars.find((car) => car.id === model.id)
                            ? "bg-blue-100"
                            : ""
                        }`}
                        onClick={() => handleCarSelect(model)}
                      >
                        {model.name}
                        {selectedCars.find((car) => car.id === model.id) && (
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveCar(model.id);
                            }}
                            className="ml-2 text-red-500 cursor-pointer"
                          >
                            ✖️
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
  
      {/* Selected Cars and Compare Button */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Selected Cars:</h3>
        <ul>
          {selectedCars.map((car) => (
            <li key={car.id} className="text-gray-700">
              {car.name}{" "}
              <span
                onClick={() => handleRemoveCar(car.id)}
                className="ml-2 text-red-500 cursor-pointer"
              >
                ✖️
              </span>
            </li>
          ))}
        </ul>
        {selectedCars.length === 2 && (
          <button
            onClick={handleCompare}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Compare Cars
          </button>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default CarSelectionModal;
