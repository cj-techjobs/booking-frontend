import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { GiResize } from 'react-icons/gi';

export default function HomeRecommendationCard({ imageSrc, price, location, status, bedrooms, bathrooms, area }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="w-full h-56 relative mb-4">
                <Image src={imageSrc} alt="House Image" layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="px-2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{price}</h3>
                <p className="text-gray-600 mb-1">{location}</p>
                <p className="text-green-600 font-semibold mb-4">{status}</p>
                <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center space-x-1">
                        <FaBed />
                        <span>{bedrooms} Bedroom</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaBath />
                        <span>{bathrooms} Bathroom</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <GiResize />
                        <span>{area}m</span>
                        <sup>2</sup>
                    </div>
                </div>
            </div>
        </div>
    );
}
