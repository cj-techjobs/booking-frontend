import React from 'react';
import HeroSection from '../../components/Property/HeroSection';
import ExploreMore from '../../components/Property/ExploreMore';
import Advertisement from '../../components/Property/Advertisement';
import HomeRecommendations from '../../components/Property/HomeRecommendations';
import HouseFeatures from '../../components/Property/HouseFeatures';

const Property = () => {
    return (
        <div className=" bg-green-50 space-y-16 h-100vh">
            {/* Hero Section */}
            <HeroSection />

            {/* Explore More Section */}
            <ExploreMore />

            {/*Advertisement */}
            <Advertisement />

            {/* HomeRecommendations */}
            <HomeRecommendations />

            {/* HouseFeatures */}
            <HouseFeatures />
            <div className="relative w-full bg-red-400 mb-8 rounded-lg overflow-hidden mx-auto mt-10 p-6 h-[100px]">
                <div className="absolute top-6 left-6">
                    <h2 className="text-6xl font-bold text-white">S6K</h2>
                </div>
            </div>
        </div>
    );
};

export default Property;
