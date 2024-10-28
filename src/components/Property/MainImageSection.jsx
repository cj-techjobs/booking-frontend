import React from 'react';
import Image from 'next/image';
import { FaRegImages } from 'react-icons/fa';

export default function MainImageSection() {
    return (
        <div className="relative w-full flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Main Property Image */}
            <div className="w-full lg:flex-1 h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg relative">
                <Image
                    src="/images/property-main.png"
                    alt="Property Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>

            {/* Additional Images Section */}
            <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-gray-200 rounded-lg flex justify-center items-center shadow-md">
                    <FaRegImages className="text-xl sm:text-2xl text-gray-600" />
                </div>
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-gray-200 rounded-lg flex justify-center items-center shadow-md">
                    <FaRegImages className="text-xl sm:text-2xl text-gray-600" />
                </div>
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-black text-white rounded-lg flex justify-center items-center shadow-md text-sm sm:text-base">
                    +99 Images
                </div>
            </div>
        </div>
    );
}
