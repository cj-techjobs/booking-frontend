import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Filter from "../../components/NewCars/Filter";
import { fetchFilteredCars } from "../api/api"; // Make sure to import the fetchBrands function
import { Manrope, Genos } from 'next/font/google';

const genos = Genos({ subsets: ['latin'], weight: ['400', '500', '700'] });
const Car = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCars, setFilteredCars] = useState([]);
  const [maxPrice, setMaxPrice] = useState(); // Default max price
  const [selectedColor, setSelectedColor] = useState(""); // Default color filter
  const [selectedTransmission, setSelectedTransmission] = useState(""); // Transmission state
  const [selectedBodyTypes, setSelectedBodyTypes] = useState(""); // New state for body types
  const [selectedBrands, setSelectedBrands] = useState([]); // State for brands
  const [selectedModels, setSelectedModels] = useState([]); // State for models
  const [brands, setBrands] = useState([]); // State for brands
  const [selectedYear, setSelectedYear] = useState(""); // State for selected year
  const [selectedSeat, setSelectedSeat] = useState([]);// Single value for selected seat
  const [selectedKmsDriven, setSelectedKmsDriven] = useState(""); // State for single km driven value
  // State for owner selection (single value)
  const [selectedOwner, setSelectedOwner] = useState("");


  // Function to fetch cars based on filters
  const fetchCars = async () => {
    try {
      setLoading(true);
      const data = await fetchFilteredCars(
        maxPrice,
        selectedColor,
        selectedTransmission,
        selectedBodyTypes,
        selectedBrands,
        selectedModels,
        selectedYear,
        selectedSeat,
        selectedKmsDriven,
        selectedOwner

      );
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
  }, [maxPrice, selectedColor, selectedTransmission, selectedBodyTypes, selectedBrands, selectedModels, selectedYear, selectedSeat, selectedKmsDriven, selectedOwner]);

  // Handler for brands
  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand) // Deselect brand
        : [...prevBrands, brand] // Select brand
    );
  };

  // Handler for models
  const handleModelChange = (brand, model) => {
    setSelectedModels((prevModels) => ({
      ...prevModels,
      [brand]: model, // Store selected model for each brand
    }));
  };
  // Handler for year
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value); // Update selected year
  };
  const handleSeatsChange = (e) => {
    if (e && e.target) {
      const value = parseInt(e.target.value, 10); // Extract the seat number
      setSelectedSeat((prevSeats) => {
        if (prevSeats.includes(value)) {
          return prevSeats.filter((seat) => seat !== value);
        } else {
          return [...prevSeats, value];
        }
      });
    } else {
      console.warn("Event or value is undefined");
    }
  };

  const handleKmsDrivenChange = (kms) => {
    setSelectedKmsDriven(kms);
  };
  const handleBodyType = (val) => {
    setSelectedBodyTypes(val);
  };
  // Handler for owner change
  const handleOwnerChange = (event) => {
    setSelectedOwner(event.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:pr-6">
        <Filter
          onPriceChange={setMaxPrice}
          onColorChange={setSelectedColor}
          onTransmissionChange={setSelectedTransmission}
          onBodyTypeChange={handleBodyType}
          onBrandChange={handleBrandChange}
          onModelChange={handleModelChange}
          brand={brands}
          onYearChange={handleYearChange}
          onSeatsChange={handleSeatsChange}
          onKmsDrivenChange={handleKmsDrivenChange}
          onOwnerChange={handleOwnerChange}
        />
      </div>

      {/* Main content */}
      <div className={` pt-6 px-4 w-full md:w-3/4`}>
        {
          filteredCars?.length === 0 && !loading ? (
            <div className="text-center text-red-500 font-semibold">
              No cars exist for the applied filter
            </div>
          ) : (
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
                    <span
                      className={`${genos.className} font-medium`}
                      style={{ fontSize: '20px', lineHeight: '16px', letterSpacing: '0%' }}
                    >
                      {car.title}
                    </span>

                    <span
                      className={`mt-2 font-medium`}
                      style={{ color: '#FF0000', fontSize: '15px', lineHeight: '16px' }}
                    >
                      ₹ {car.price}
                    </span>

                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Car;
