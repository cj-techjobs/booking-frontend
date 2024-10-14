import { useRouter } from 'next/router';
import Image from 'next/image';
import carImage from '/public/images/brand-car.png'; // Replace with actual image paths

// Sample car data
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
export default function BrandPage() {
  const router = useRouter();
  const { brand } = router.query; // Get brand name from route
  console.log(router.query);
  return (
    <div className="min-h-screen max-w-6xl mx-auto w-full bg-white p-6">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2 uppercase">
          {brand} Cars
        </h2>
      </div>

      {/* Car Listings */}
      <div className="space-y-8">
        {carListings.map((car, index) => (
          <div key={index} className="flex items-start border-b pb-4 mb-4">
            {/* Car Image */}
            <div className="w-1/4">
              <Image
                src={car.imageSrc}
                alt={car.name}
                width={150}
                height={200}
                className="object-cover"
              />
            </div>

            {/* Car Details */}
            <div className="flex-1 flex justify-between pl-6">
              <div>
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <ul className="list-disc ml-5 text-gray-700 mb-4">
                  {car.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xl text-red-500 font-bold self-end">
                {car.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
