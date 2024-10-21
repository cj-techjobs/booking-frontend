import { getAllNewCarData } from '../../pages/api/api';
import carImage5 from '/public/images/carImage5.png';
import carImage6 from '/public/images/carImage6.png';
import carImage7 from '/public/images/carImage7.png';
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const ShopByPrice = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPriceRange, setSelectedPriceRange] = useState("1-5 Lakh");

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);
        const data = await getAllNewCarData();
        // console.log("Fetched Car Data:", data?.data.list);
        setCars(data?.data.list || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

  const priceRanges = ["1-5 Lakh", "5-10 Lakh", "10-20 Lakh", "20-30 Lakh", "30-40 Lakh", "40-50 Lakh", "50-60 Lakh", "1 Crore+"];

  const handleClick = (range) => {
    setSelectedPriceRange(range);
  };
const handleClickForNavigation = (car) => {
    // Use template literals to create the URL
    router.push(`/new-cars/${car._id}`);
}
  const filterCarsByPriceRange = (car) => {
    const priceMapping = {
        "1-5 Lakh": [1, 5],
        "5-10 Lakh": [5, 10],
        "10-20 Lakh": [10, 20],
        "20-30 Lakh": [20, 30],
        "30-40 Lakh": [30, 40],
        "40-50 Lakh": [40, 50],
        "50-60 Lakh": [50, 60],
        "1 Crore+": [100, Infinity],
    };

    // Check if selectedPriceRange exists in priceMapping
    if (!(selectedPriceRange in priceMapping)) {
        return true; // or handle it differently (e.g., show all cars)
    }

    const [minPrice, maxPrice] = priceMapping[selectedPriceRange];

    // Ensure car.price is treated as a string
    const carPriceString = typeof car.price === 'string' ? car.price : '';
    const carPrice = parseFloat(carPriceString.replace(/[^0-9.-]+/g, ""));

    // Return true if carPrice is a valid number and falls within the selected range
    return !isNaN(carPrice) && carPrice >= minPrice && carPrice < maxPrice;
};


  // Determine filtered cars
  const filteredCars = cars.filter(filterCarsByPriceRange);
  const carsToDisplay = filteredCars.length > 0 ? filteredCars : cars; // Show all cars if no filtered results

  return (
    <div className="w-full bg-white ">
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
          Shop cars by price
        </h2>
      </div>

      {/* Price Range Tabs Section */}
      <div className="flex space-x-4 mb-8 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {priceRanges.map((range, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300 ${selectedPriceRange === range ? "text-red-500 underline underline-offset-4" : ""}`}
            onClick={() => handleClick(range)}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Cars Horizontal Scroll Section */}
      <section className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
        {carsToDisplay.map((car, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden min-w-[200px] flex-shrink-0">
            {/* Car Image */}
            <div className="w-[400px] h-[200px] overflow-hidden flex justify-center items-center bg-gray-100">
              <Image
                src={car.images && car.images[0] ? car.images[0] : '/images/sample-car1.png'}
                alt={car.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Car Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{car.price}</p>
              <button
                className="px-4 py-2 text-orange-600 border border-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"
                onClick={() => handleClickForNavigation(car)}
              >
                Get Pricing
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ShopByPrice;
