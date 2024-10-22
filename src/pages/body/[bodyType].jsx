import { useRouter } from "next/router";
import Image from "next/image";
import carImage from "/public/images/brand-car.png"; // Replace with actual image paths
import { getNewCarsByBodyType } from "../api/api";
import { useEffect, useState } from "react";

// Sample car data for body types
const carListings = [
  {
    name: "Name of car with logo",
    imageSrc: carImage,
    features: ["Key Feature 1", "Key Feature 2", "Key Feature 3"],
    price: "Rs. xx Lakh - XX Lakh",
  },
  {
    name: "Name of car with logo",
    imageSrc: carImage,
    features: ["Key Feature 1", "Key Feature 2", "Key Feature 3"],
    price: "Rs. xx Lakh - XX Lakh",
  },
  {
    name: "Name of car with logo",
    imageSrc: carImage,
    features: ["Key Feature 1", "Key Feature 2", "Key Feature 3"],
    price: "Rs. xx Lakh - XX Lakh",
  },
];
export default function BodyTypePage() {
  const router = useRouter();
  const { bodyType } = router.query; // Extract body type from the URL
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      if (!bodyType) return; // Don't fetch until 'bodyType' is defined

      try {
        setLoading(true); // Set loading state
        const data = await getNewCarsByBodyType(bodyType); // Fetch cars by body type
        setCars(data?.data.list || []); // Assuming the API response contains a 'cars' array
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchCars();
  }, [bodyType]); // Re-run the effect when 'bodyType' changes

  return (
    <div className="min-h-screen max-w-6xl mx-auto w-full bg-white p-4 md:p-6">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-red-500 pl-2 uppercase">
          {bodyType} Cars
        </h2>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading cars...</p>
      ) : (
        <>
          {/* No Cars Found */}
          {cars.length === 0 ? (
            <p className="text-center text-red-500">No cars found for {bodyType}.</p>
          ) : (
            <div className="space-y-6 md:space-y-8">
              {cars.map((car, index) => (
                <div
                  key={index}
                  className="flex sm:gap-10 flex-col md:flex-row items-start border-b pb-4 mb-4 border-gray-500"
                >
                  {/* Car Image */}
                  <div className="w-full md:w-1/4">
                    <Image
                      src={car.makeId.image}
                      alt={car.title}
                      width={200} // Increased width for small screens
                      height={250} // Increased height for small screens
                      className="object-cover mx-auto sm:w-[300px] md:h-[200px]" // Reverts to smaller size for larger screens
                    />
                  </div>

                  {/* Car Details */}
                  <div className="flex-1 flex flex-col md:flex-row justify-between pl-0 md:pl-6 mt-4 md:mt-0">
                    <div className="flex flex-col sm:gap-6">
                      <h3 className="text-lg md:text-3xl font-semibold">{car.name}</h3>
                      <ul className="list-disc ml-5 text-gray-700 mb-4">
                        {car.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Adjusted price section to align properly */}
                    <p className="mt-auto md:mt-[7rem] text-lg md:text-xl text-red-500 font-bold self-end md:self-start md:text-right">
                      Rs. {car.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
