import React from 'react';

export default function PropertyRangeSection() {
    return (
        <div className=" p-4 sm:p-6 rounded-lg  space-y-6 max-w-md mx-auto lg:max-w-full">
            <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Property Range</h3>
                <p className="text-green-600 text-lg font-semibold mt-2">80 lakh - 1.21 cr</p>
                <p className="text-gray-600 mt-1">Yelahanka, North Bangalore, Bangalore</p>
                <p className="text-gray-500">
                    By <span className="text-green-600 cursor-pointer hover:underline">Name of Contractor</span>
                </p>
            </div>
            <button className="w-full py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                Chat seller
            </button>
            <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=india&zoom=10&maptype=roadmap"
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </div>
    );
}
