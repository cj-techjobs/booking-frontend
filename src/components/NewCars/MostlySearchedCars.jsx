import { getAllNewCarData } from '../../pages/api/api';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inria_Serif } from 'next/font/google';
import { Inter } from 'next/font/google';

const inriaSerif = Inria_Serif({
    subsets: ['latin'],
    weight: '400',
});

const interBold = Inter({
    subsets: ['latin'],
    weight: '700',
});

const interFont = Inter({
    subsets: ['latin'],
    weight: '400',
});

const inriaSerifBold = Inria_Serif({
    subsets: ['latin'],
    weight: '700',
});

const MostlySearchedCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                setLoading(true);
                const data = await getAllNewCarData();
                setCars(data?.data.list || []);
            } catch (error) {
                console.error("Error fetching cars:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarData();
    }, []);

    const carTypes1 = ["Sedan", "SUV", "Hatchback", "Coupe"];
    const filteredCars = selectedType
        ? cars.filter(car => car.vehicleTypeId?.name === selectedType)
        : cars;
    const displayCars = filteredCars.length > 0 ? filteredCars : cars;

    return (
        <div className="w-full mb-10 mt-2 px-4 sm:px-6">
            {/* Title Section */}
            <div className="mb-6 text-center">
                <h2 className={`${inriaSerifBold.className} text-2xl sm:text-3xl font-semibold`}>
                    Mostly searched <span className="text-red-500">Cars</span>
                </h2>
            </div>

            {/* Car Types Tabs Section */}
            <div className="flex overflow-x-auto space-x-4 mb-6 scrollbar-hide">
                {carTypes1.map((type, index) => (
                    <button
                        key={index}
                        className={`${interFont.className} px-4 py-2 text-sm sm:text-base rounded-full hover:text-gray-600 transition duration-300 ${selectedType === type ? "bg-gray-300" : ""}`}
                        onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Cars Horizontal Scroll Section */}
            <div className="overflow-x-auto w-full scrollbar-hide">
                <section className="flex space-x-4 py-2">
                    {displayCars.map((car, index) => (
                        <div
                            key={index}
                            className="w-60 sm:w-72 bg-white text-black rounded-lg shadow-md overflow-hidden cursor-pointer mb-5 flex-shrink-0"
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
                            <div className="p-3 sm:p-4">
                                <h3 className={`${interBold.className} text-base sm:text-lg font-bold`}>{car.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                                    {car.metaDescription.length > 50 ? car.metaDescription.substring(0, 50) + '...' : car.metaDescription}
                                </p>
                                <p
                                    className={`${inriaSerif.className} text-sm sm:text-base`}
                                    style={{ color: '#FF2020' }}
                                >
                                    Rs. {car.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default MostlySearchedCars;
