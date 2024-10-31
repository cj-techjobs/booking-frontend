import { useRouter } from "next/router";
import Image from "next/image";

const CompareCarsPage = () => {
    const router = useRouter();
    const { car1, car2 } = router.query; // Get car IDs from query parameters

    // Dummy car data for demonstration (replace this with API data)
    const carData = [
        { id: 1, name: "Maruti Suzuki Fronx", image: "/images/carcompare.png" },
        { id: 2, name: "Tata Nexon", image: "/images/carcompare.png" },
        { id: 3, name: "Hyundai Verna", image: "/images/carcompare.png" },
        { id: 4, name: "Mahindra XUV300", image: "/images/carcompare.png" },
        // Add more car details with corresponding images here
    ];

    // Convert car1 and car2 from string to numbers
    const car1Id = Number(car1);
    const car2Id = Number(car2);

    // Find the selected cars in the array
    const selectedCar1 = carData.find((car) => car.id === car1Id);
    const selectedCar2 = carData.find((car) => car.id === car2Id);

    // If cars are not found, show loading or error
    if (!selectedCar1 || !selectedCar2) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 mx-auto  max-w-8xl mt-28 sm:mt-28 md:mt-28 lg:mt-28 xl:mt-28">
                {/* <div className="mt-28 sm:mt-28 md:mt-28 lg:mt-28 xl:mt-28"></div> */}
            {/* Title */}
            <div className="text-center">
                <h1 className="text-3xl italic font-semibold">
                    Welcome to <span className="text-red-500">Six Car Comparison</span>
                </h1>
                <p className="text-2xl italic mt-2 text-left">
                    We&apos;ll help you pick your ride finely
                </p>
            </div>

            {/* Cars Comparison Section */}
            <div className="mt-6 overflow-x-auto">
            <div className="flex items-center space-x-8 justify-center">
                    {/* Car 1 */}
                    <div className="flex-shrink-0 w-[400px] h-[250px] border border-gray-500 flex items-center justify-center">
                        <Image
                            src={selectedCar1.image}
                            alt={selectedCar1.name}
                            width={300}
                            height={200}
                        />
                    </div>

                    {/* VS Text */}
                    <div className="text-2xl font-bold text-red-500">VS</div>

                    {/* Car 2 */}
                    <div className="flex-shrink-0 w-[400px] h-[250px] border border-gray-500 flex items-center justify-center">
                        <Image
                            src={selectedCar2.image}
                            alt={selectedCar2.name}
                            width={300}
                            height={200}
                        />
                    </div>
                </div>
            </div>


            <div className="container mx-auto mt-10">
                {/* Car Specifications Table */}
                <div className="mt-10 overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-left">Basic Info</th>
                                <th className="px-4 py-2 border border-gray-300 text-left">Maruti Suzuki Dzire Zxi Plus AT</th>
                                <th className="px-4 py-2 border border-gray-300 text-left">Tata Punch Adventure Rhythm CNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Rating</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <span className="text-yellow-500">★★★★☆</span>
                                    <span className="text-sm text-gray-600">(317 reviews)</span>
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <span className="text-yellow-500">★★★☆☆</span>
                                    <span className="text-sm text-gray-600">(209 reviews)</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Brand Name</td>
                                <td className="px-4 py-2 border border-gray-300">Maruti Suzuki</td>
                                <td className="px-4 py-2 border border-gray-300">Tata</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Ex-Showroom Price</td>
                                <td className="px-4 py-2 border border-gray-300">Rs. 9.37 Lakh</td>
                                <td className="px-4 py-2 border border-gray-300">Rs. 8.29 Lakh</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Engine Displacement</td>
                                <td className="px-4 py-2 border border-gray-300">1197 cc</td>
                                <td className="px-4 py-2 border border-gray-300">1198 cc</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Body Type</td>
                                <td className="px-4 py-2 border border-gray-300">Sedan</td>
                                <td className="px-4 py-2 border border-gray-300">SUV</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Max Power</td>
                                <td className="px-4 py-2 border border-gray-300">88.50bhp@6000rpm</td>
                                <td className="px-4 py-2 border border-gray-300">77bhp@6000rpm</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Transmission</td>
                                <td className="px-4 py-2 border border-gray-300">Automatic</td>
                                <td className="px-4 py-2 border border-gray-300">Manual</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Drive Type</td>
                                <td className="px-4 py-2 border border-gray-300">FWD</td>
                                <td className="px-4 py-2 border border-gray-300">FWD</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Colors</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <div className="flex space-x-1">
                                        <div className="w-4 h-4 bg-blue-600"></div>
                                        <div className="w-4 h-4 bg-red-600"></div>
                                        <div className="w-4 h-4 bg-orange-600"></div>
                                        <div className="w-4 h-4 bg-gray-400"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <div className="flex space-x-1">
                                        <div className="w-4 h-4 bg-blue-600"></div>
                                        <div className="w-4 h-4 bg-red-600"></div>
                                        <div className="w-4 h-4 bg-orange-600"></div>
                                        <div className="w-4 h-4 bg-gray-400"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Fuel Type</td>
                                <td className="px-4 py-2 border border-gray-300">Petrol</td>
                                <td className="px-4 py-2 border border-gray-300">CNG</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Mileage (ARAI)</td>
                                <td className="px-4 py-2 border border-gray-300">22.61 Km/l</td>
                                <td className="px-4 py-2 border border-gray-300">26.99 Km/l</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Boot Space</td>
                                <td className="px-4 py-2 border border-gray-300">378 Liters</td>
                                <td className="px-4 py-2 border border-gray-300">319 Liters</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default CompareCarsPage;
