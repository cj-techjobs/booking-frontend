import carImage5 from '/public/images/carImage5.png';
import carImage6 from '/public/images/carImage6.png';
import carImage7 from '/public/images/carImage7.png';
import Image from "next/image";
import { useRouter } from "next/router";

const ShopByPrice = () => {
  const router = useRouter();

  // Sample data for car price tabs and car details
  const priceRanges = ["1-5 Lakh", "5-10 Lakh", "10-20 Lakh", "20-30 Lakh", "30-40 Lakh", "40-50 Lakh", "50-60 Lakh", "1 Crore+"];

  const carData = [
    { id: 1, imageSrc: carImage5, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 2, imageSrc: carImage6, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 3, imageSrc: carImage7, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 4, imageSrc: carImage5, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 5, imageSrc: carImage6, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 6, imageSrc: carImage7, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 7, imageSrc: carImage5, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 8, imageSrc: carImage6, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { id: 9, imageSrc: carImage7, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
  ];

  const handleClick = (car) => {
    router.push(`/new-cars/${car.id}`);
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
            className={`px-4 py-2 rounded-full text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300 ${index === 0 ? "text-red-500 underline underline-offset-4" : ""}`}
          >
            {range}
          </button>
        ))}
      </div>


      {/* Cars Horizontal Scroll Section */}
      <section className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
        {carData.map((car, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden min-w-[200px] flex-shrink-0">
            {/* Car Image */}
            <Image
              src={car.imageSrc}
              alt={car.name}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            {/* Car Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-700 mb-4">{car.priceRange}</p>
              <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition duration-300" onClick={() => handleClick(car)}>
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
