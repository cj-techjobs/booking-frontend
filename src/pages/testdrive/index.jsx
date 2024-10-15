// TestDrivePage.js (New Test Drive Page)
import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestDrivePage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className=" flex justify-center">
            <div className=" p-8 rounded-2xl   w-full">
                {/* Car Details Section */}
                <div className="flex items-center mb-8">
                    <Image
                        src="/images/sample-car1.png"
                        alt="Maruti Suzuki Baleno"
                        width={400}
                        height={300}
                        className="rounded-md mr-6"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                            2022 Maruti Suzuki Baleno Zeta AMT Petrol
                        </h2>
                        <p className="text-red-600 text-2xl font-semibold">₹8,50,000</p>
                    </div>
                </div>

                <div className=" flex  space-x-10 mb-6 px-6 max-w-6xl mx-auto">
                    {/* Select location for Test Drive */}
                    <div className=" flex flex-col gap-4 w-2/3 ">
                        <p className="text-lg font-semibold mb-3 border-l-4 border-red-500 pl-2">
                            Select location for Test Drive
                        </p>
                        <div className="flex space-x-6">
                            <button className="bg-red-100 border-2 border-red-500 text-red-500 font-semibold py-4 px-6 rounded-lg hover:bg-red-50">
                                Showroom 1
                            </button>
                            <button className="bg-white border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:bg-red-100  hover:border-red-500 hover:text-red-500">
                                Showroom 2
                            </button>
                            <button className="bg-white border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:bg-red-100  hover:border-red-500 hover:text-red-500">
                                My location
                            </button>
                        </div>

                        {/* Map Section */}
                        <div className="mb-6 w-1/2">
                            <p className="text-lg font-semibold mb-3 border-l-4 border-red-500 pl-2">
                                Location of showroom 1
                            </p>
                            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                {/* Placeholder for Map */}
                                <p className="text-gray-600">Map showing showroom location</p>
                            </div>
                        </div>
                    </div>

                    {/* Date and Time Slot Selection */}
                    <div className="flex flex-col gap-4 items-start w-1/3">
                        <p className="text-lg font-semibold mb-3  border-l-4 border-red-500 pl-2">
                            Select a time slot
                        </p>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            inline
                            // showTimeSelect
                            dateFormat="Pp"
                            className="border rounded-md p-3"
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