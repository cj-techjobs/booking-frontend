import { useRouter } from "next/router";
import carImage from "/public/images/sample-car.png";
import carImage1 from "/public/images/sample-car1.png";
import Image from "next/image";
const FeaturedCars = () => {
  const router = useRouter();
  const featuredCars = [
    { imageSrc: carImage, name: "Mahindra Thar", price: "Rs. 15.5 lakh" },
    { imageSrc: carImage1, name: "Tata Nexon", price: "Rs. 12.7 lakh" },
    { imageSrc: carImage, name: "Hyundai Verna", price: "Rs. 13.4 lakh" },
    {
      imageSrc: carImage1,
      name: "Maruti Suzuki Brezza",
      price: "Rs. 10.5 lakh",
    },
  ];
  const handleClick = (car) => {
    router.push({
      pathname: "/new-cars/carItem",
      query: {
        name: car.name,
        price: car.price,
        imageSrc: car.imageSrc.src,
      },
    });
  };
  return (
    <div>
      {" "}
      <div className="mt-10">
        <h2 className="text-2xl text-left font-semibold border-l-4 border-red-500 pl-2">
          Featured Cars
        </h2>
      </div>
      {/* Tabs Section */}
      <div className="flex space-x-6 mt-4">
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
      {/* Cars Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        {featuredCars.map((car, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-105 bg-white text-black   shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer"
            onClick={() => handleClick(car)}
          >
            <Image
              src={car.imageSrc}
              alt={car.name}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-md text-gray-700">{car.price}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeaturedCars;
