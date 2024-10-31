import { useRouter } from "next/router";
import carImage from "/public/images/sample-car.png";
import carImage1 from "/public/images/sample-car1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCarsByFeatureOptions } from "../../pages/api/api";
import { Inter } from 'next/font/google';

const interFont = Inter({
  subsets: ['latin'],
  weight: '400', // Regular weight
});

const FeaturedCars = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initially fetch featured cars
    fetchCarData(true, false, false);
  }, []);

  // Function to fetch cars based on feature options
  const fetchCarData = async (isFeatured, isComingSoon, isBestSeller) => {
    try {
      setLoading(true);
      const response = await getCarsByFeatureOptions(isFeatured, isBestSeller, isComingSoon);
      setCars(response?.data?.list || []); // Update cars state with the fetched data
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false); // Turn off loading state
    }
  };

  const handleClick = (car) => {
    router.push(`/new-cars/${car._id}`);
  };

  return (
    <div className="w-full mb-10 ">
      <div className="mt-10">
        <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
          Featured Cars
        </h2>
      </div>

      {/* Tabs Section */}
      {/* <div className={`${interFont.className} flex space-x-6 mb-8 text-md`}>
        <button
          className="px-4 py-2 bg-white text-black rounded-full hover:text-gray-500"
          onClick={() => fetchCarData(true, false, false)} // Mark isFeatured=true
        >
          Latest
        </button>
        <button
          className="px-4 py-2 text-gray-400 rounded-full hover:text-gray-500"
          onClick={() => fetchCarData(false, true, false)} // Mark isComingSoon=true
        >
          Upcoming
        </button>
        <button
          className="px-4 py-2 text-gray-400 rounded-full hover:text-gray-500"
          onClick={() => fetchCarData(false, false, true)} // Mark isBestSeller=true
        >
          Bestseller
        </button>
      </div> */}
      <div className="flex space-x-6 mb-8 mt-2 text-md">
        <button
          className={`${interFont.className} px-4 py-2 bg-white text-black rounded-full hover:text-gray-500 transition-all duration-300 relative overflow-hidden`}
          // style={{ fontSize: '30px', lineHeight: '16px' }}
          onClick={() => fetchCarData(true, false, false)} // Mark isFeatured=true
        >
          <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-black transition-all duration-300"></span>
          Latest
        </button>
        <button
          className={`${interFont.className} px-4 py-2 text-gray-400 rounded-full hover:text-gray-500 transition-all duration-300 relative overflow-hidden`}
          // style={{ fontSize: '30px', lineHeight: '16px' }}
          onClick={() => fetchCarData(false, true, false)} // Mark isComingSoon=true
        >
          <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-gray-400 transition-all duration-300"></span>
          Upcoming
        </button>
        <button
          className={`${interFont.className} px-4 py-2 text-gray-400 rounded-full hover:text-gray-500 transition-all duration-300 relative overflow-hidden`}
          // style={{ fontSize: '30px', lineHeight: '16px' }}
          onClick={() => fetchCarData(false, false, true)} // Mark isBestSeller=true
        >
          <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-gray-400 transition-all duration-300"></span>
          Bestseller
        </button>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="overflow-x-auto w-full scrollbar-hide">
        <section className="flex space-x-4">
          {loading ? (
            // Shimmer effect for loading state
            [...Array(5)].map((_, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105 bg-gray-200 animate-pulse cursor-pointer min-w-[250px] max-w-[300px] mx-2 mb-5"
              >
                <div className="w-[300px] h-[200px] bg-gray-200 rounded-t-md"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            cars.map((car, index) => (
              // <div
              //   key={index}
              //   className="transition-transform transform hover:scale-105 bg-white text-black shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer min-w-[250px] max-w-[300px] mx-2 mb-5"
              //   onClick={() => handleClick(car)}
              // >
              //   <div className="w-[300px] h-[200px] overflow-hidden flex justify-center items-center bg-gray-100 rounded-t-md">
              //     <Image
              //       src={car.images && car.images[0] ? car.images[0] : "/images/sample-car1.png"}
              //       alt={car.title}
              //       width={100}
              //       height={200}
              //       className="object-cover w-full h-full"
              //     />
              //   </div>
              //   <div className="p-4">
              //     <h3 className="text-lg font-semibold">{car.title}</h3>
              //     <p className="text-md text-gray-700">Rs. {car.price}</p>
              //   </div>
              // </div>
              <div
                key={index}
                className="min-w-[250px] bg-white text-black rounded-lg shadow-md overflow-hidden cursor-pointer "
              >
                {/* Car Image */}
                <Image
                  src={car.images && car.images[0] ? car.images[0] : '/images/sample-car1.png'}
                  alt={car.title}
                  width={400}
                  height={200}
                  className="w-full object-cover"
                />
                {/* Car Details */}
                <div className={`p-4 ${interFont.className}`}>
                  <h3 className="text-md ">{car.title}</h3>
                  <p className="text-md ">Rs. {car.price}</p>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default FeaturedCars;
