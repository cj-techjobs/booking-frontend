import carImage5 from '/public/images/carImage5.png';
import carImage6 from '/public/images/carImage6.png';
import carImage7 from '/public/images/carImage7.png';
import Image from "next/image";
const ShopByPrice = () => {
      // Sample data for car price tabs and car details
  const priceRanges = ["1-5 Lakh", "5-10 Lakh", "10-20 Lakh", "20-30 Lakh", "30-40 Lakh", "40-50 Lakh", "50-60 Lakh", "1 Crore+"];
  const carData = [
    { imageSrc: carImage5, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { imageSrc: carImage6, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { imageSrc: carImage7, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
  ];
  return (
    <div className=" w-full bg-white p-6">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
            Shop cars by price
          </h2>
        </div>

        {/* Price Range Tabs Section */}
        <div className="flex space-x-6 mb-8 overflow-x-auto">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300 ${index === 0 ? "text-red-500 underline underline-offset-4" : ""
                }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Cars Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {carData.map((car, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden">
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
                <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition duration-300" onClick={() => handlePricingClick(car.name)}>
                  Get Pricing
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
  )
}

export default ShopByPrice