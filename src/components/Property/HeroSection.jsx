import { useState } from 'react';
import { FaHome, FaDollarSign } from 'react-icons/fa';
import Image from 'next/image';

export default function HeroSection() {
    const [selectedTab, setSelectedTab] = useState('Buy');

    return (
        <div className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/interior.png"
                    alt="Interior Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    className="w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="relative w-full max-w-4xl text-center px-4 z-20">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Properties around Bengaluru</h1>
                <p className="text-white mt-2 text-base sm:text-lg md:text-xl">
                    sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya tersembunyi, dengan ratusan rumah untuk anda
                </p>

                {/* Tabs for Buy, Rent, PG/Hostel */}
                <div className="flex space-x-2 mt-6 bg-white rounded-full p-1 max-w-md mx-auto">
                    {['Buy', 'Rent', 'PG/Hostel'].map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 py-2 rounded-full text-sm sm:text-lg font-semibold ${selectedTab === tab ? 'bg-green-500 text-white' : 'text-gray-700'
                                }`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="flex flex-wrap items-center justify-between mt-6 p-4 bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-3xl">
                    <div className="flex items-center border-r-2 pr-4 border-gray-200 space-x-2">
                        <FaHome className="text-green-500 text-sm sm:text-base md:text-lg" />
                        <span className="text-gray-600 text-sm sm:text-base md:text-lg">Bengaluru</span>
                    </div>

                    <div className="flex items-center border-r-2 pr-4 border-gray-200 space-x-2">
                        <FaDollarSign className="text-green-500 text-sm sm:text-base md:text-lg" />
                        <span className="text-gray-600 text-sm sm:text-base md:text-lg">Price Range</span>
                    </div>

                    <div className="flex-1 pl-4">
                        <input
                            type="text"
                            placeholder="Search areas, residence and location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button className="ml-4 px-4 sm:px-6 py-2 bg-green-500 text-white rounded-md font-semibold text-sm sm:text-base hover:bg-green-600">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
