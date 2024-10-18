import React from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const LocationPopup = ({ onClose }) => {
    const cities = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Kolkata",
        "Jaipur",
        "Chennai",
        "Pune",
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Kolkata",
        "Jaipur",
        "Chennai",
        "Pune",
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Kolkata",
        "Jaipur",
        "Chennai",
        "Pune",
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                >
                    <AiOutlineClose />
                </button>

                {/* Search Input Section */}
                <div className="flex items-center bg-white border border-gray-300 shadow-md px-4 py-2 w-full mb-3 mt-3">
                    <AiOutlineSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search for your city"
                        className="w-full outline-none text-base py-1 px-2"
                    />
                </div>

                {/* Fetch Button Section */}
                <div className="flex items-center bg-white border border-gray-300 shadow-md px-4 py-2 w-full mb-3">
                    <button className="ml-4 text-red-600 font-bold hover:text-red-800">
                        Fetch From Device
                    </button>
                </div>

                {/* Popular Cities Section */}
                <p className="text-base mb-3">Popular Cities</p>

                {/* Cities Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 overflow-y-auto max-h-64 sm:max-h-80">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
                        >
                            <Image
                                src={`/images/delhi.png`}
                                alt={city}
                                width={60}
                                height={60}
                                className="w-full h-auto object-cover transition-transform transform hover:scale-110"
                            />
                            <p className="absolute bottom-2 left-2 text-white text-sm font-bold drop-shadow-md">
                                {city.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationPopup;
