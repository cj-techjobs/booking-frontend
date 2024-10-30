import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CarSelectionModal from "../../components/NewCars/CarSelectionModal"; // Import the modal component

const CarComparisonPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const router = useRouter();
  const carSlots = [1, 2, 3]; // Three car slots for comparison
  const carComparisons = [
    {
      id: 1,
      car1: { id: 1, name: "Car 1", price: "Rs. XX lakh", image: "/images/carImage5.png" },
      car2: { id: 2, name: "Car 2", price: "Rs. XX lakh", image: "/images/carImage6.png" },
    },
    {
      id: 2,
      car1: { id: 3, name: "Car 1", price: "Rs. XX lakh", image: "/images/carImage5.png" },
      car2: { id: 4, name: "Car 2", price: "Rs. XX lakh", image: "/images/carImage6.png" },
    },
    {
      id: 3,
      car1: { id: 5, name: "Car 1", price: "Rs. XX lakh", image: "/images/carImage5.png" },
      car2: { id: 6, name: "Car 2", price: "Rs. XX lakh", image: "/images/carImage6.png" },
    },
    {
      id: 4,
      car1: { id: 7, name: "Car 1", price: "Rs. XX lakh", image: "/images/carImage5.png" },
      car2: { id: 8, name: "Car 2", price: "Rs. XX lakh", image: "/images/carImage6.png" },
    },
    {
      id: 5,
      car1: { id: 9, name: "Car 1", price: "Rs. XX lakh", image: "/images/carImage5.png" },
      car2: { id: 10, name: "Car 2", price: "Rs. XX lakh", image: "/images/carImage6.png" },
    },
    {
      id: 6,
      car1: { id: 11, name: "Car 1", price: "Rs. XX lakh", image: "/images/carImage5.png" },
      car2: { id: 12, name: "Car 2", price: "Rs. XX lakh", image: "/images/carImage6.png" },
    },
  ];

  const handleCompareClick = (car1Id, car2Id) => {
    router.push({
      pathname: "/compare-cars",
      query: { car1: car1Id, car2: car2Id },
    });
  };

  return (
    <div className="p-4 md:p-8 mt-5 min-h-screen w-full">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl italic font-semibold">
          Welcome to <span className="text-red-500">Six Car Comparison</span>
        </h1>
        <p className="text-lg md:text-2xl italic mt-2 text-left">
          We&apos;ll help you pick your ride finely
        </p>
      </div>

      {/* Comparison Section */}
      {/* Comparison Section */}
      {/* Comparison Section */}
      {/* Comparison Section */}
      <div className="mt-8 overflow-x-auto">
        <div className="flex flex-nowrap justify-center items-center space-x-4">
          {carSlots.map((slot, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Car Slot */}
              <div className="relative flex flex-col justify-center items-center w-[300px] h-[200px] border border-gray-500">
                <Image src="/images/car-icon.png" alt="Select Car" width={80} height={80} />
                <p
                  className="text-blue-500 font-semibold cursor-pointer"
                  onClick={() => setIsModalOpen(true)} // Open modal on click
                >
                  Select car
                </p>
              </div>
              {/* VS between cards */}
              {index < carSlots.length - 1 && (
                <div className="text-red-500 text-2xl font-bold">VS</div>
              )}
            </div>
          ))}
        </div>
      </div>





      {/* Popular Comparisons */}
      <div className="mt-8">
        <h3 className="text-2xl italic text-gray-700">
          Popular <span className="text-red-500">comparisons</span>
        </h3>
        <h3 className="text-xl font-semibold mt-2 text-gray-700 border-l-4 border-red-500 pl-2">
          Type of Car
        </h3>
      </div>

      {/* Scrollable container for car comparisons */}
      <div className="mt-6 overflow-x-auto">
        <div className="flex space-x-4 mb-10">
          {carComparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="border border-gray-300 rounded-lg w-[300px] md:w-[400px] h-[280px] flex flex-col justify-center relative shrink-0"
            >
              <div className="flex justify-between items-center space-x-4 w-full mb-6">
                {/* Car 1 */}
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <Image
                    src={comparison.car1.image}
                    alt={comparison.car1.name}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="text-gray-500 mt-2">Brand</p>
                  <p className="font-semibold">{comparison.car1.name}</p>
                  <p className="text-gray-500">{comparison.car1.price} Onwards</p>
                </div>

                {/* VS Label */}
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-[1px] h-24 bg-gray-400"></div>
                  <div className="absolute -top-4 bg-white px-2 py-1 text-xs text-red-500 border border-gray-300 shadow-sm rounded">
                    VS
                  </div>
                </div>

                {/* Car 2 */}
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <Image
                    src={comparison.car2.image}
                    alt={comparison.car2.name}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="text-gray-500 mt-2">Brand</p>
                  <p className="font-semibold">{comparison.car2.name}</p>
                  <p className="text-gray-500">{comparison.car2.price} Onwards</p>
                </div>
              </div>

              {/* Compare Now Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  className="bg-white text-red-500 py-2 px-4 md:px-6 font-semibold rounded-md border shadow-[0px_10px_15px_3px_rgba(255,0,0,0.3)] transition duration-300"
                  onClick={() => handleCompareClick(comparison.car1.id, comparison.car2.id)}
                >
                  Compare Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for car selection */}
      <CarSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CarComparisonPage;
