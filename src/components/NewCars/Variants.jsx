import Image from "next/image";
import { Genos } from 'next/font/google';
// import { inriaSerif} from 'next/font/google';
import { Inria_Serif } from 'next/font/google';


const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: '400', // Regular weight
});
const inriaSerifLight = Inria_Serif({
  subsets: ['latin'],
  weight: '300', // Light weight
});
const genos = Genos({
  subsets: ['latin'],
  weight: '400', // Regular weight
});
const Variants = () => {
    const carVariants = [
        { name: 'Full name of model 1', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 2', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/suv-icon.png' },
        { name: 'Full name of model 3', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 4', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 5', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 1', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 2', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/suv-icon.png' },
        { name: 'Full name of model 3', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 4', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 5', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 1', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 2', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/suv-icon.png' },
        { name: 'Full name of model 3', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 4', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
        { name: 'Full name of model 5', fuel: 'Fuel', transmission: 'Transmission', price: 'Rs. XX', imageSrc: '/images/sample-car1.png' },
    ];

    return (
        <div className="flex flex-col items-start bg-white rounded-lg p-4 mt-10">
            <p className={`${inriaSerif.className} text-[20px] font-normal leading-[13.9px] mb-4`}>Other variants available</p>
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide w-full" style={{ scrollBehavior: 'smooth' }}>
                {/* Card items */}
                {carVariants.map((variant, index) => (
                    <div key={index} className="flex-shrink-0 flex flex-col items-start bg-gray-100 p-4 rounded-md shadow-md w-64">
                        <div className="flex items-center justify-between w-full">
                            <div className={`${genos.className} flex flex-col`}>
                                <p className="font-semibold text-md mb-1">{variant.name}</p>
                                <p className="text-gray-600 text-md mb-1">{variant.fuel} , {variant.transmission}</p>
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
    );
}

export default Variants;
