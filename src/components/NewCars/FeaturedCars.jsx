import { useRouter } from "next/router";
import carImage from "/public/images/sample-car.png";
import carImage1 from "/public/images/sample-car1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllNewCarData } from "../../pages/api/api";

const FeaturedCars = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Call the API function and log the result
    const fetchCarData = async () => {
      try {
        setLoading(true);
        const data = await getAllNewCarData();
        console.log("charu Fetched Car Data:", data?.data.list); // This will log the car data to the console
        setCars(data?.data.list || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchCarData();
  }, []);

  const featuredCars = [
    { id: 1, imageSrc: carImage, name: "Mahindra Thar", price: "Rs. 15.5 lakh" },
    { id: 2, imageSrc: carImage1, name: "Tata Nexon", price: "Rs. 12.7 lakh" },
    { id: 3, imageSrc: carImage, name: "Hyundai Verna", price: "Rs. 13.4 lakh" },
    { id: 4, imageSrc: carImage1, name: "Maruti Suzuki Brezza", price: "Rs. 10.5 lakh" },
    { id: 5, imageSrc: carImage, name: "Mahindra Thar", price: "Rs. 15.5 lakh" },
    { id: 6, imageSrc: carImage1, name: "Tata Nexon", price: "Rs. 12.7 lakh" },
    { id: 7, imageSrc: carImage, name: "Hyundai Verna", price: "Rs. 13.4 lakh" },
    { id: 8, imageSrc: carImage1, name: "Maruti Suzuki Brezza", price: "Rs. 10.5 lakh" },
    { id: 9, imageSrc: carImage, name: "Mahindra Thar", price: "Rs. 15.5 lakh" },
    { id: 10, imageSrc: carImage1, name: "Tata Nexon", price: "Rs. 12.7 lakh" },
    { id: 11, imageSrc: carImage, name: "Hyundai Verna", price: "Rs. 13.4 lakh" },
    { id: 12, imageSrc: carImage1, name: "Maruti Suzuki Brezza", price: "Rs. 10.5 lakh" },
  ];

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
      <div className="flex space-x-6 mb-8">
        <button className="px-4 py-2 bg-white text-black rounded-full hover:text-gray-500">
          Latest
        </button>
        <button className="px-4 py-2 text-gray-400 rounded-full hover:text-gray-500">
          Upcoming
        </button>
        <button className="px-4 py-2 text-gray-400 rounded-full hover:text-gray-500">
          Bestseller
        </button>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="overflow-x-auto w-full scrollbar-hide">
        <section className="flex space-x-4">
          {cars.map((car, index) => (
            // {featuredCars.map((car, index) => (
            // <div
            //   key={index}
            //   className="transition-transform transform hover:scale-105 bg-white text-black shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer min-w-[250px] max-w-[300px] mx-2 mb-5"
            //   onClick={() => handleClick(car)}
            // >
            //   <Image
            //     src={car.images && car.images[0] ? car.images[0] : '/images/sample-car1.png'}
            //     alt={car.title}
            //     // alt={car.name}
            //     width={400}
            //     height={200}
            //     className="w-full object-cover"
            //   />
            //   <div className="p-4">
            //     <h3 className="text-lg font-semibold">{car.title}</h3>
            //     <p className="text-md text-gray-700">Rs. {car.price}</p>
            //   </div>
            // </div>
            <div
              key={index}
              className="transition-transform transform hover:scale-105 bg-white text-black shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer min-w-[250px] max-w-[300px] mx-2 mb-5"
              onClick={() => handleClick(car)}
            >
              <div className="w-[300px] h-[200px] overflow-hidden flex justify-center items-center bg-gray-100"> {/* Consistent container */}
                <Image
                  src={car.images && car.images[0] ? car.images[0] : '/images/sample-car1.png'}
                  alt={car.title}
                  width={300}  
                  height={200}  
                  className="object-cover w-full h-full"  
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{car.title}</h3>
                <p className="text-md text-gray-700">Rs. {car.price}</p>
              </div>
            </div>

          ))}
        </section>
      </div>
    </div>
  );
};

export default FeaturedCars;
