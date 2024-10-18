import React from 'react';

const AddSection = () => {
    return (
        <div
            className="w-full flex items-center justify-center mt-5 mb-5 rounded-lg h-48"
            style={{ backgroundColor: "#8DAB82" }}
        >
            {/* Adjust height and text size for responsiveness */}
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black p-4">
                ad
            </p>
        </div>
    );
};

export default AddSection;
