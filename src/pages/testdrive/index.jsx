import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestDrivePage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedShowroom, setSelectedShowroom] = useState("Showroom 1");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleLocationChange = (location) => {
        setSelectedShowroom(location);
    };

    return (
        <div className="flex justify-center px-4 md:px-8 lg:px-12">
            <div className="p-6 md:p-8 rounded-2xl w-full max-w-6xl">
                {/* Car Details Section */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <Image
                        src="/images/sample-car1.png"
                        alt="Maruti Suzuki Baleno"
                        width={400}
                        height={300}
                        className="rounded-md mb-4 md:mr-6 md:mb-0"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                            2022 Maruti Suzuki Baleno Zeta AMT Petrol
                        </h2>
                        <p className="text-red-600 text-xl md:text-2xl font-semibold">₹8,50,000</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mb-6">
                    {/* Select location for Test Drive */}
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        <p className="text-lg font-semibold mb-3 border-l-4 border-red-500 pl-2">
                            Select location for Test Drive
                        </p>
                        <div className="flex md:flex-row space-x-2 md:space-x-6">
                            <button
                                onClick={() => handleLocationChange("Showroom 1")}
                                className={`${selectedShowroom === "Showroom 1"
                                    ? "bg-red-100"
                                    : "bg-white"
                                    } border-2 border-red-500 text-red-500 font-semibold py-2 px-3 rounded-lg hover:bg-red-50 w-1/2 md:w-auto`}
                            >
                                Showroom 1
                            </button>
                            <button
                                onClick={() => handleLocationChange("Showroom 2")}
                                className={`${selectedShowroom === "Showroom 2"
                                    ? "bg-red-100"
                                    : "bg-white"
                                    } border-2 border-gray-300 text-gray-700 font-semibold py-2 px-3 rounded-lg hover:bg-red-100 hover:border-red-500 hover:text-red-500 w-1/2 md:w-auto`}
                            >
                                Showroom 2
                            </button>
                            <button
                                onClick={() => handleLocationChange("My location")}
                                className={`${selectedShowroom === "My location"
                                    ? "bg-red-100"
                                    : "bg-white"
                                    } border-2 border-gray-300 text-gray-700 font-semibold py-2 px-3 rounded-lg hover:bg-red-100 hover:border-red-500 hover:text-red-500 w-1/2 md:w-auto`}
                            >
                                My location
                            </button>
                        </div>


                        {/* Map Section */}
                        <div className="mb-6  w-full md:w-1/2 h-64 md:h-80">
                            <p className="text-lg font-semibold mb-3 border-l-4 border-red-500 pl-2">
                                Location of {selectedShowroom}
                            </p>
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

                    {/* Date and Time Slot Selection */}
                    <div className="flex flex-col gap-4 mt-10 md:mt-0 items-start w-full  sm:w-1/3">
                        <p className="text-lg font-semibold mb-3 border-l-4 border-red-500 pl-2">
                            Select a time slot
                        </p>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            inline
                            dateFormat="Pp"
                            className="border rounded-md p-3 w-full"
                        />
                        {/* Schedule Test Drive Button */}
                        <div className="flex justify-end">
                            <button className="bg-red-200 text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-red-300">
                                Schedule Test Drive
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDrivePage;
