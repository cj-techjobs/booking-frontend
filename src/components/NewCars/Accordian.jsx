import React, { useState } from 'react'
import { carSpecification } from "../../utils";
import Image from "next/image";
import milage from '/src/assets/carsSvg/specificationIcon/milage.svg'
import groundClear from '/src/assets/carsSvg/specificationIcon/groundClear.svg'
import displacement from '/src/assets/carsSvg/specificationIcon/displacement.svg'
import bootSpace from '/src/assets/carsSvg/specificationIcon/bootSpace.svg'
import seating from '/src/assets/carsSvg/specificationIcon/seating.svg'
import tankCapacity from '/src/assets/carsSvg/specificationIcon/tankCapacity.svg'
const Accordian = ({ carData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-col items-start bg-red-500 rounded-lg p-4 mt-10 w-full">
        {/* Key Specifications */}
        {/* <div className="flex flex-col justify-center bg-white rounded-lg p-4 mt-10 w-full md:w-2/3">
          <p className="font-semibold text-xl mb-5">Key Specification</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {carSpecification?.map((items) => (
              <div key={items?.id} className="flex items-center space-x-3 p-2">
                <Image
                  src={items?.icon}
                  alt={items?.title}
                  className="w-10 h-10"
                />
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-sm">{items?.title}</span>
                  {items?.data}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex flex-col flex-wrap justify-center bg-white rounded-lg p-4 mt-10 w-full">
          <p className="font-semibold text-xl mb-5">Key Specification</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

            {/* Mileage */}
            <div className="flex items-center space-x-3 p-2">
              <Image
                src={milage}
                alt="Mileage"
                className="w-10 h-10"
              />
              <div className="flex flex-col text-lg">
                <span className="text-gray-400 text-sm">Mileage (ARAI)</span>
                {`${carData?.mileage || "N/A"} kmpl`}
              </div>
            </div>

            {/* Ground Clearance */}
            <div className="flex items-center space-x-3 p-2">
              <Image
                src={groundClear}
                alt="Ground clearance"
                className="w-10 h-10"
              />
              <div className="flex flex-col text-lg">
                <span className="text-gray-400 text-sm">Ground clearance</span>
                {`${carData?.groundClearance || "N/A"} mm`}
              </div>
            </div>

            {/* Boot Space */}
            <div className="flex items-center space-x-3 p-2">
              <Image
                src={bootSpace}
                alt="Boot space"
                className="w-10 h-10"
              />
              <div className="flex flex-col text-lg">
                <span className="text-gray-400 text-sm">Boot space</span>
                {`${carData?.bootSpace || "N/A"} litres`}
              </div>
            </div>

            {/* Seating Capacity */}
            <div className="flex items-center space-x-3 p-2">
              <Image
                src={seating}
                alt="Seating capacity"
                className="w-10 h-10"
              />
              <div className="flex flex-col text-lg">
                <span className="text-gray-400 text-sm">Seating capacity</span>
                {`${carData?.seatingCapacity || "N/A"} units`}
              </div>
            </div>

            {/* Fuel Tank Capacity */}
            <div className="flex items-center space-x-3 p-2">
              <Image
                src={tankCapacity}
                alt="Fuel tank capacity"
                className="w-10 h-10"
              />
              <div className="flex flex-col text-lg">
                <span className="text-gray-400 text-sm">Fuel tank capacity</span>
                {`${carData?.fuelTankCapacity || "N/A"} litres`}
              </div>
            </div>

            {/* Displacement */}
            <div className="flex items-center space-x-3 p-2">
              <Image
                src={displacement}
                alt="Displacement"
                className="w-10 h-10"
              />
              <div className="flex flex-col text-lg">
                <span className="text-gray-400 text-sm">Displacement</span>
                {`${carData?.displacement || "N/A"} cc`}
              </div>
            </div>

          </div>
        </div>
        {/* Accordion Section */}
        <div className="w-full md:w-2/3 mt-4">
          {[1, 2, 3, 4].map((feature, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md text-left focus:outline-none"
              >
                <span className="font-semibold">Feature {feature}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <p>Details about Feature {feature}...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordian;
