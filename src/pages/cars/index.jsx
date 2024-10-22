import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Filter from "../../components/NewCars/Filter";
import { fetchFilteredCars } from "../api/api"; // Import the fetch function

const Car = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCars, setFilteredCars] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000000); // Default max price
  const [selectedColor, setSelectedColor] = useState(""); // Default color filter
  const [selectedTransmission, setSelectedTransmission] = useState(""); // Transmission state
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]); // New state for body types

  // Function to fetch cars
  const fetchCars = async () => {
    try {
      setLoading(true);
      const data = await fetchFilteredCars(maxPrice, selectedColor, selectedTransmission, selectedBodyTypes); // Include body types in the API call
      setCars(data);
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch cars whenever filters change
    fetchCars();
  }, [maxPrice, selectedColor, selectedTransmission, selectedBodyTypes]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:pr-6">
        <Filter
          onPriceChange={setMaxPrice}
          onColorChange={setSelectedColor}
          onTransmissionChange={setSelectedTransmission}
          onBodyTypeChange={setSelectedBodyTypes}
        />
      </div>

      {/* Main content */}
      <div className="pt-6 px-4 w-full md:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars?.map((car) => (
            <div
              key={car._id}
              className="rounded-3xl pb-4 shadow-md cursor-pointer"
              onClick={() => {
                router.push(`/cars/${car._id}`);
              }}
            >
              <Image
                src={car.images && car.images[0] ? car.images[0] : "/images/sample-car1.png"}
                width={400}
                height={300}
                alt={car.title}
                className="rounded-t-3xl object-cover w-full h-auto"
              />
              <div className="flex flex-col p-4">
                <span className="font-semibold text-lg">{car.title}</span>
                <span className="mt-2 text-red-500 font-semibold">₹ {car.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Car;
