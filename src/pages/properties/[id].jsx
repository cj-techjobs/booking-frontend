import React from 'react';
import MainImageSection from '../../components/Property/MainImageSection';
import PropertyOverviewSection from '../../components/Property/PropertyOverviewSection';
import PropertyRangeSection from '../../components/Property/PropertyRangeSection';

export default function PropertyPage() {
    return (
        <div className="property-page-container  p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Left Section (takes full width on mobile, 3/4 on large screens) */}
            <div className=" lg:col-span-3">
                {/* Main Image Section */}
                <section className=" sm:p-6 rounded-lg ">
                    <MainImageSection />
                </section>

                {/* Property Details Section */}
                <section className=" sm:p-6 rounded-lg ">
                    <PropertyOverviewSection />
                </section>
            </div>

            {/* Right Section (1 part of the grid on large screens, full width on small screens) */}
            <div className="lg:col-span-1">
                <div className=" p-4 sm:p-6 rounded-lg  lg:block hidden">
                    <PropertyRangeSection />
                </div>

                {/* Show the right section as a full-width block on smaller screens */}
                <div className="lg:hidden  p-4 sm:p-6 rounded-lg mt-8">
                    <PropertyRangeSection />
                </div>
            </div>
        </div>
    );
}
