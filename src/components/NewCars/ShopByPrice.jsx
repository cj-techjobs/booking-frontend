import { getCarsByMinPrice } from '../../pages/api/api';
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
        const minPrice = getMinPriceFromRange(selectedPriceRange);
        const fetchedCars = await getCarsByMinPrice(minPrice);
        console.log(fetchedCars)
        setCars(fetchedCars.data.list);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, [selectedPriceRange]);

  const priceRanges = ["1-5 Lakh", "5-10 Lakh", "10-20 Lakh", "20-30 Lakh", "30-40 Lakh", "40-50 Lakh", "50-60 Lakh", "1 Crore+"];

  const handleClick = (range) => {
    setSelectedPriceRange(range);
  };

  const handleClickForNavigation = (car) => {
    router.push(`/new-cars/${car._id}`);
  };

  // Helper function to map selected price range to a minimum price
  const getMinPriceFromRange = (range) => {
    const priceMapping = {
      "1-5 Lakh": 100000,
      "5-10 Lakh": 500000,
      "10-20 Lakh": 1000000,
      "20-30 Lakh": 2000000,
      "30-40 Lakh": 3000000,
      "40-50 Lakh": 4000000,
      "50-60 Lakh": 5000000,
      "1 Crore+": 10000000,
    };
    return priceMapping[range] || 0;
  };

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
      {loading ? (
        // Shimmer UI Effect for Loading State
        <section className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow-md overflow-hidden min-w-[200px] flex-shrink-0 animate-pulse">
              <div className="w-[400px] h-[200px] bg-gray-300"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
          {cars.length > 0 ? (
            cars.map((car, index) => (
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
            ))
          ) : (
            <div className="text-center text-gray-500 w-full">No cars available in this price range.</div>
          )}
        </section>
      )}
    </div>
  );
};

export default ShopByPrice;
