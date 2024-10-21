import { useRouter } from "next/router";
import Image from "next/image";
import carImage from "/src/assets/carsSvg/baleno.png";
import roundView from "/src/assets/carsSvg/360View.png";
import carLoading from "/src/assets/carsSvg/loadingCar.png";
import fullImage from "/src/assets/carsSvg/fullImage.png";
import { carSpecification } from "../../utils";
import Accordian from "../../components/NewCars/Accordian";
import Variants from "../../components/NewCars/Variants";
import { useEffect, useState } from "react";
import LocationPopup from "../../components/NewCars/LocationPopup";
import { getCarById, getNewCarById } from "../api/api";

export default function Home() {
    const router = useRouter();
    const [carData, setCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const { id } = router.query;
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleLocationClick = () => {
        setShowLocationPopup(true);
    };
    useEffect(() => {
        if (id) {
            // Call the getCarById method once the ID is available from the URL
            const fetchCarData = async () => {
                try {
                    setLoading(true);
                    const data = await getCarById('671105f984e208f187ad2b0c');
                    // const data = await getNewCarById(id);
                    setCarData(data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching car data:", error);
                    setError(error);
                    setLoading(false);
                }
            };

            fetchCarData();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const handleTestDriveClick = () => {
        router.push("/testdrive");
    };

    const handleClosePopup = () => {
        setShowLocationPopup(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center">
            <div className="w-full rounded-lg p-4 sm:p-6 lg:p-8 ">

                {/* Car Image Section */}
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 relative">
                        <div className="relative">
                            {/* Main Image */}
                            <Image
                                src={carImage}
                                alt="Maruti Suzuki Baleno"
                                height={400}
                                className="rounded-md w-full h-auto"
                            />

                            {/* Thumbnails Section */}
                            <div className="hidden sm:absolute sm:bottom-10 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bg-white sm:bg-opacity-70 sm:p-2 sm:rounded-lg sm:flex sm:space-x-4 sm:shadow-lg sm:mb-2">
                                <Image
                                    src={roundView}
                                    alt="Thumbnail 1"
                                    width={80}
                                    height={80}
                                    className="border rounded"
                                />
                                <Image
                                    src={carLoading}
                                    alt="Thumbnail 2"
                                    width={80}
                                    height={80}
                                    className="border rounded"
                                />
                                <Image
                                    src={fullImage}
                                    alt="Thumbnail 3"
                                    width={80}
                                    height={80}
                                    className="border rounded"
                                />
                            </div>

                            {/* Thumbnails for Mobile (displayed in a row below the main image) */}
                            <div className="flex justify-evenly mt-4 space-x-2  bg-opacity-70 p-2  sm:hidden">
                                <Image
                                    src={roundView}
                                    alt="Thumbnail 1"
                                    width={100}
                                    height={90}
                                    className="border rounded"
                                />
                                <Image
                                    src={carLoading}
                                    alt="Thumbnail 2"
                                    width={100}
                                    height={90}
                                    className="border rounded"
                                />
                                <Image
                                    src={fullImage}
                                    alt="Thumbnail 3"
                                    width={100}
                                    height={90}
                                    className="border rounded"
                                />
                            </div>
                        </div>

                        {/* key specification Section */}
                        <div className="flex flex-col flex-wrap justify-center bg-white rounded-lg p-4 mt-10 w-full">
                            <p className="font-semibold text-xl mb-5">Key Specification</p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                {carSpecification?.map((items) => (
                                    <div key={items?.id} className="flex items-center space-x-3 p-2">
                                        <Image
                                            src={items?.icon}
                                            alt={items?.title}
                                            className="w-10 h-10"
                                        />
                                        <div className="flex flex-col text-lg">
                                            <span className="text-gray-400 text-sm">{items?.title}</span>
                                            {items?.data}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>

                    {/* Right Section with Details */}
                    <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0 bg-white p-4 rounded-lg">
                        <h2 className="text-2xl font-bold">
                            2022 Maruti Suzuki Baleno Zeta AMT Petrol
                        </h2>
                        <p className="mt-2">10K km · Petrol · Automatic</p>

                        {/* Price and EMI Info */}
                        <div className="mt-4 flex items-center justify-between gap-4">
                            <p className="text-xl">EMI Available</p>
                            <div className="bg-red-500 text-white py-2 px-4 text-xl rounded-lg shadow-lg">
                                <p className="text-sm uppercase">EMI starts from</p>
                                <p className="text-xl">₹10,000/Month</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex mt-6 items-center justify-between gap-4">
                            <button className="bg-white text-lg hover:bg-gray-300 text-red-600 font-semibold py-2 px-3 rounded shadow">
                                Book Now
                            </button>
                            <button
                                className="bg-red-500 text-lg hover:bg-red-600 text-white font-semibold py-2 px-3 rounded shadow"
                                onClick={handleTestDriveClick}
                            >
                                Book Test Drive
                            </button>
                        </div>


                        {/* Location */}
                        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md max-w-lg my-4">
                            <div className="w-1/2">
                                <p className="text-xl font-bold text-black">1 Oct, 2024</p>
                                <p className="text-purple-600 mt-2 text-sm">
                                    Get a free test drive at your desired location
                                </p>
                            </div>
                            <div onClick={handleLocationClick} className="cursor-pointer">
                                <Image
                                    src="/images/location-icon.png"
                                    alt="Location Icon"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>

                        {/* Price Breakup */}
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-3">Price Breakup</h4>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Ex Showroom</p>
                                    <p className="font-semibold text-gray-500">₹7,99,990</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Registration Amount</p>
                                    <p className="font-semibold text-gray-500">₹60,949</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Dealer Insurance Premium</p>
                                    <p className="text-gray-500 font-semibold">₹38,960</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Fast Tag</p>
                                    <p className="text-gray-500 font-semibold">₹800</p>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <p className="text-gray-500 text-sm w-1/2">
                                        Includes RC transfer, insurance, fixes, upgrades & more
                                    </p>
                                    <p className="text-red-500 text-2xl font-bold">₹8,50,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordion Section and key specifications */}

                <div className="flex flex-col items-start bg-red-500 rounded-lg p-4 mt-10 w-full">
                    {/* Accordion Section */}
                    <div className="w-full md:w-2/3 mt-4">
                        {[1, 2, 3, 4].map((feature, index) => (
                            <div key={index} className="mb-2">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md text-left focus:outline-none"
                                >
                                    <span className="font-semibold">Feature {feature}</span>
                                    <span>{activeIndex === index ? '-' : '+'}</span>
                                </button>
                                {activeIndex === index && (
                                    <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                                        <p>Details about Feature {feature}...</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location Popup */}
                {/* Location Popup */}
                {showLocationPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <LocationPopup onClose={handleClosePopup} />
                    </div>
                )}
            </div>
        </div>
    );
}