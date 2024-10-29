import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function HouseFeatures() {
    const router = useRouter();
    const features = [
        {
            imageSrc: '/images/feature1.png',
            title: 'Living Room',
            area: 'Area 200m'
        },
        {
            imageSrc: '/images/feature3.png',
            title: 'Bedroom',
            area: 'Area 200m'
        },
        {
            imageSrc: '/images/feature3.png',
            title: 'Kitchen',
            area: 'Area 150m'
        },
        {
            imageSrc: '/images/feature1.png',
            title: 'Dining Area',
            area: 'Area 180m'
        }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className=" ">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">Fitur Rumah</h2>
                <button
                    className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 flex items-center space-x-2"
                    onClick={() => router.push('/properties')}
                >
                    <span>See all</span>
                    <span>&#8250;</span>
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 w-max">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative min-w-[250px] sm:min-w-[300px] md:min-w-[350px] h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={feature.imageSrc}
                                alt={feature.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-lg">{feature.area}</p>
                                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600">
                                        See Home
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
