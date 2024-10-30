import React from 'react';
import Image from 'next/image';
import { FaCouch, FaHospital, FaShieldAlt, FaRulerCombined, FaRegBuilding } from 'react-icons/fa';

export default function PropertyOverviewSection() {
    return (
        <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">Duplex 3Bhk xy colony</h2>
                    <p className="text-gray-600 mb-4 md:mb-6">Deoghar, Jharkhand</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Image
                        src="/images/user-avatar.png"
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-base md:text-lg font-semibold text-gray-800">Name</p>
                        <p className="text-gray-600 text-xs md:text-sm">About the property</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
                {/* Property Overview Section */}
                <div className="lg:col-span-2">

                    <h3 className="text-xl text-center md:text-3xl font-semibold text-gray-800 mt-4 mb-3 md:mb-4">Property overview</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-4">
                            <FaRegBuilding className="text-2xl md:text-3xl text-gray-800" />
                            <div>
                                <p className="text-base md:text-lg font-semibold text-gray-800">Property type</p>
                                <p className="text-gray-600">3Bhk</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaRulerCombined className="text-2xl md:text-3xl text-gray-800" />
                            <div>
                                <p className="text-base md:text-lg font-semibold text-gray-800">Property Area</p>
                                <p className="text-gray-600">125 m²</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCouch className="text-2xl md:text-3xl text-gray-800" />
                            <div>
                                <p className="text-base md:text-lg font-semibold text-gray-800">Furnishing Status</p>
                                <p className="text-gray-600">Semi-Furnished</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaHospital className="text-2xl md:text-3xl text-gray-800" />
                            <div>
                                <p className="text-base md:text-lg font-semibold text-gray-800">Nearby places</p>
                                <p className="text-gray-600">Hospitals</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaShieldAlt className="text-2xl md:text-3xl text-gray-800" />
                            <div>
                                <p className="text-base md:text-lg font-semibold text-gray-800">Security facilities</p>
                                <p className="text-gray-600">24/7 CCTV cameras</p>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="mt-6 md:mt-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Description</h3>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Discover the perfect 2BHK flat with our easy-to-use online marketplace. Whether you&apos;re looking to buy or rent, our platform offers a wide selection of 2BHK flats to suit every need and budget. With detailed listings, high-quality photos, and virtual tours, finding your ideal home has never been easier.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Bedroom', 'Bathroom', 'Floor Plan', 'Dining Room', 'Parking', 'Balcony', 'Kitchen'].map((item, index) => (
                                <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-gray-600 hover:text-white cursor-pointer">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Advertisement Section */}
                <div className="space-y-6 md:space-y-10">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <Image
                            src="/images/googleadd.png"
                            alt="Advertisement 1"
                            width={400}
                            height={200}
                            className="rounded-md w-full"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <Image
                            src="/images/googleadd.png"
                            alt="Advertisement 2"
                            width={400}
                            height={200}
                            className="rounded-md w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
