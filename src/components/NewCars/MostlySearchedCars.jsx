import { getAllNewCarData } from '../../pages/api/api';
import carImage2 from '/public/images/sample-car2.png';
import carImage3 from '/public/images/sample-car3.png';
import Image from "next/image";
import { useEffect, useState } from "react";

const MostlySearchedCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState(''); // State to track selected vehicle type

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                setLoading(true);
                const data = await getAllNewCarData();
                // console.log("charu Fetched Car Data:", data?.data.list); // Log fetched car data
                setCars(data?.data.list || []);
            } catch (error) {
                console.error("Error fetching cars:", error);
            } finally {
                setLoading(false); // Turn off loading state
            }
        };

        fetchCarData();
    }, []);

    // Sample array of car types for filter tabs
    const carTypes1 = ["Sedan", "SUV", "Hatchback", "Coupe"];

    // Filter cars based on the selected vehicle type
    const filteredCars = selectedType
        ? cars.filter(car => car.vehicleTypeId?.name === selectedType)
        : cars;

    // Show all cars if there are no cars for the selected type
    const displayCars = filteredCars.length > 0 ? filteredCars : cars;

    return (
        <div className="w-full mb-10 ">
            {/* Title Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
                    Mostly searched <span className="text-red-500">Cars</span>
                </h2>
            </div>

            {/* Car Types Tabs Section */}
            <div className="flex space-x-6 mb-8">
                {carTypes1.map((type, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-300 transition duration-300 ${selectedType === type ? "bg-gray-300" : ""}`}
                        onClick={() => setSelectedType(type)} // Set selected type on click
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Cars Horizontal Scroll Section */}
            <div className="overflow-x-auto w-full scrollbar-hide">
                <section className="flex space-x-4">
                    {displayCars.map((car, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] bg-white text-black rounded-lg shadow-md overflow-hidden cursor-pointer mb-5"
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
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{car.title}</h3>
                                <p className="text-sm text-gray-700 mb-4">
                                    {car.metaDescription.length > 50 ? car.metaDescription.substring(0, 50) + '...' : car.metaDescription}
                                </p>
                                <p className="text-lg text-red-500 font-bold">{car.price}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default MostlySearchedCars;
