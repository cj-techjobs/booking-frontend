import { useRouter } from 'next/router';
import React from 'react'
import hatchbackIcon from "/public/images/hatchback-icon.png";
import Image from "next/image";
import suvIcon from "/public/images/suv-icon.png";
const CarType = () => {
    const router = useRouter();
    const handleCarType = (carType) => {
        console.log(carType)
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
    ];
    return (
        <>
            <div className="text-center mb-4 w-full mt-10">
                <h2 className="text-xl font-semibold">
                    Select your <span className="text-red-500">type</span>
                </h2>
            </div>

            <div className="flex items-center justify-around w-full ">
                {carTypes.map((car, index) => (
                    <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleCarType(car.name)}>
                        <Image src={car.imageSrc} alt={car.name} width={94} height={94} />
                        <p className=" text-md font-semibold text-black">{car.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CarType