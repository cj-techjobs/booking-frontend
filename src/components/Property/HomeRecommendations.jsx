import Image from 'next/image';
import HomeRecommendationCard from './HomeRecommendationCard';

export default function HomeRecommendations() {
    return (
        <div className="">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">Home Recommendation for you</h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-8">
                    {/* Home Recommendation Cards */}
                    <HomeRecommendationCard
                        imageSrc="/images/house1.png"
                        price="IDR.200.000.000"
                        location="Jl. Soekarno Hatta No.1"
                        status="Sewa"
                        bedrooms={3}
                        bathrooms={4}
                        area={360}
                    />
                    <HomeRecommendationCard
                        imageSrc="/images/house1.png"
                        price="IDR.200.000.000"
                        location="Jl. Soekarno Hatta No.1"
                        status="Sewa"
                        bedrooms={3}
                        bathrooms={4}
                        area={360}
                    />
                    <HomeRecommendationCard
                        imageSrc="/images/house1.png"
                        price="IDR.200.000.000"
                        location="Jl. Soekarno Hatta No.1"
                        status="Property Baru"
                        bedrooms={3}
                        bathrooms={4}
                        area={360}
                    />
                </div>
            </div>
        </div>
    );
}