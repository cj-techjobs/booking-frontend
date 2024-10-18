import { useRouter } from 'next/router';
import React from 'react';
import hatchbackIcon from "/public/images/hatchback-icon.png";
import Image from "next/image";
import suvIcon from "/public/images/suv-icon.png";

const CarType = () => {
    const router = useRouter();

    const handleCarType = (carType) => {
        router.push(`/body/${carType.toLowerCase()}`);
    };

    const handlePricingClick = (carName) => {
        router.push(`/pricing/${carName}`);
    };

    const carTypes = [
        { imageSrc: hatchbackIcon, name: "Hatchback" },
        { imageSrc: suvIcon, name: "SUV" },
        { imageSrc: hatchbackIcon, name: "Sedan" },
        { imageSrc: suvIcon, name: "Convertible" },
        { imageSrc: suvIcon, name: "Coupe" },
        { imageSrc: hatchbackIcon, name: "Hatchback" },
        { imageSrc: suvIcon, name: "SUV" },
        { imageSrc: hatchbackIcon, name: "Sedan" },
        { imageSrc: suvIcon, name: "Convertible" },
        { imageSrc: suvIcon, name: "Coupe" },
    ];

    return (
        <div className="w-full mb-10 ">
            <div className="text-center mb-4 w-full mt-10">
                <h2 className="text-2xl font-semibold">
                    Select your <span className="text-red-500">type</span>
                </h2>
            </div>

            {/* Horizontal Scroll Section */}
            <div className="overflow-x-auto w-full scrollbar-hide">
                <div className="flex gap-10 overflow-x-auto whitespace-nowrap w-[900px] lg:w-[1100px] xl:w-[1200px] mx-auto px-4 scrollbar-hide">
                    {carTypes.map((car, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-md rounded-lg p-4 min-w-[120px] mx-2 mb-5"
                            onClick={() => handleCarType(car.name)}
                        >
                            <Image src={car.imageSrc} alt={car.name} width={94} height={94} />
                            <p className="text-md font-semibold text-black mt-2">{car.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarType;
