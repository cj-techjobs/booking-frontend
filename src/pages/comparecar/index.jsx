import React, { useState } from "react";
import Image from "next/image";
import CarSelectionModal from "../../components/NewCars/CarSelectionModal"; // Import the modal component

const CarComparisonPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const carSlots = [1, 2, 3]; // Three car slots for comparison

  return (
    <div className="mx-auto mt-10 px-4 text-center">
      {/* Title Section */}
      <div>
        <h1 className="text-3xl font-semibold text-black">
          Welcome to <span className="text-red-500">Six Car Comparison</span>
        </h1>
        <p className="text-lg italic mt-2 text-gray-700">
          We'll help you pick your ride finely
        </p>
      </div>

      {/* Comparison Section */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        {carSlots.map((slot, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Car Slot */}
            <div className="relative flex flex-col justify-center items-center w-60 h-60 border border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/car-icon.png" alt="Select Car" width={80} height={80} />
              <a
                href="#"
                className="text-blue-500 underline mt-4"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Select car
              </a>
            </div>
            {/* VS between cards */}
            {index < carSlots.length - 1 && (
              <div className="text-red-500 text-2xl font-bold">VS</div>
            )}
          </div>
        ))}
      </div>

      {/* Popular Comparisons */}
      <div className="mt-8">
        <h3 className="text-lg italic text-gray-700">
          Popular <span className="text-red-500">comparisons</span>
        </h3>
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
