import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
const Variants = () => {
    const carVariants = [
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/suv-icon.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/suv-icon.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/suv-icon.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    let startX = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex >= carVariants.length - 3 ? 0 : prevIndex + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [carVariants.length]);
    return (
        <div className="flex flex-col items-start bg-white rounded-lg p-4 mt-10 ">
            <p className="font-semibold text-xl mb-4">Other variants available</p>
            <div
                className="flex overflow-hidden cursor-pointer select-none"
                ref={containerRef}
            // onMouseDown={handleMouseDown}
            // onMouseUp={handleMouseUp}
            // onTouchStart={handleTouchStart}
            // onTouchEnd={handleTouchEnd}
            >
                {carVariants.slice(currentIndex, currentIndex + 3).map((variant, index) => (
                    <div key={index} className="flex flex-col items-start bg-gray-100 p-4 rounded-md m-2 shadow-md w-64">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col">
                                <p className="font-semibold text-sm mb-1">{variant.name}</p>
                                <p className="text-gray-600 text-sm mb-1">{variant.fuel} , {variant.transmission}</p>
                            </div>
                            <Image src={variant.imageSrc} alt={variant.name} width={80} height={80} className="rounded-full" />
                        </div>
                        <div className="border-t border-gray-300 mt-4 pt-2 w-full">
                            <p className="text-lg font-bold">{variant.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Variants