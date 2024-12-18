import { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
//filter data from utils
import { Manrope } from 'next/font/google';
import { Inria_Serif } from 'next/font/google';

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});


import {
    carCategory,
    bikeFilterList,
    bikeCategory,
    FilterList,
    color,
    manual,
    auto,
    seats,
    brandsmap,
    kms,
    year,
    owner,
} from "../../utils";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

//material UI components

import BuyRentButton from "../buttons/buyRentButton/buyRentButton";
const MAX = 1000000;
const MIN = 0;
const marks = [
    {
        value: MIN,
        label: "",
    },
    {
        value: MAX,
        label: "",
    },
];
const inriaSerif = Inria_Serif({
    subsets: ['latin'],
    weight: '400', // Regular weight
});
const Filter = ({
    onPriceChange,
    onColorChange,
    onTransmissionChange,
    onBodyTypeChange,
    onBrandChange, // Handler from parent
    onModelChange, // Handler from parent
    brand,// Pass brand data from parent if needed
    onYearChange,
    onSeatsChange, // Receive seats handler from parent,
    onKmsDrivenChange,
    onOwnerChange, // Add owner change handler
}) => {
    const [isActive, setIsActive] = useState("Hatchback");
    const [activeModal, setActiveModal] = useState(null);
    const [val, setVal] = useState(MIN);
    const [yearValue, setYearValue] = useState("");
    const [ownerValue, setOwnerValue] = useState("");
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedModels, setSelectedModels] = useState({});
    const handleYearChange = (event) => {
        setYearValue(event.target.value);
    };
    // State to control the visibility of the filter modal on mobile
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(''); // Track selected filter category

    const handleChange = (_, newValue) => {
        setVal(newValue);
        onPriceChange(newValue); // Call the callback to update the price filter in the parent component
    };

    const handleFilterClick = (title) => {
        setActiveModal(title); // Set the active modal when a filter is clicked
        setSelectedFilter(title); // Set the clicked filter category (for mobile modal)
    };
    const handleColorChange = (colorId) => {
        setSelectedColors((prev) => ({
            ...prev,
            [colorId]: !prev[colorId], // Toggle selected state
        }));
        onColorChange(colorId); // Pass the selected colors to parent
    };

    const handleTransmissionChange = (transmission) => {
        onTransmissionChange(transmission); // Pass the selected transmission to parent
    };
    const handleBodyTypeChange = (bodyType) => {
        onBodyTypeChange(bodyType); // Pass the selected body type to parent
    };
    const handleSeatsChange = (event) => {
        onSeatsChange(event); // Pass the entire event object to the parent handler
    };
    // Handle brand selection
    const handleBrandChange = (brand) => {
        onBrandChange(brand); // Call parent function to update brand state
    };

    // Handle model selection
    const handleModelChange = (brand, model) => {
        onModelChange(brand, model); // Call parent function to update model state
    };
    const handleKmsChange = (event) => {
        console.log(event.target.value)
        onKmsDrivenChange(event.target.value); // Pass selected kilometers to parent handler
    };
    const handleOwnerChange = (event) => {
        onOwnerChange(event); // Call parent's owner change handler
    }
    return (
        <div className={manrope.className}>
            <div className="p-3">
                {/* Header */}
                <div className="flex justify-between items-center bg-white text-black h-[60px] sm:h-[80px] md:h-[100px] lg:h-[114px] rounded-b-2xl px-4 shadow-lg sm:bg-red-500 sm:text-white">
                    {/* Title */}
                    <div
                        className={`${inriaSerif.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl`}
                        style={{ lineHeight: '1.2' }}
                    >
                        Shop in Cars
                    </div>

                    {/* Filter button (visible on mobile) */}
                    <button
                        className="block sm:hidden bg-red-500 text-white rounded-full p-2"
                        onClick={() => setIsFilterModalOpen(true)} // Open the modal on click
                    >
                        <FaFilter className="w-5 h-5" />
                    </button>
                </div>


                {/* Car Categories */}
                <div className="mt-3 rounded-xl px-1 flex flex-row flex-wrap justify-center shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-gray-200 sm:bg-white">
                    {carCategory?.map((item) => (
                        <div
                            className={`rounded-xl cursor-pointer ${isActive === item?.title
                                ? "bg-[#181616] flex justify-center w-[50px] text-white"
                                : ""}`}
                            onClick={() => setIsActive(item?.title)}
                            key={item?.id}
                        >
                            <div className="text-[10px] flex items-center flex-col">
                                <div className="flex w-10 justify-center">
                                    <Image src={item?.image} height={20} width={35} alt="" />
                                </div>
                                <div className="flex flex-col text-center">
                                    {item?.title.split(" ").map((word, index) => (
                                        <span
                                            key={index}
                                            className="font-medium"
                                            style={{ fontSize: '11px', lineHeight: '16px' }}
                                        >
                                            {word}
                                        </span>

                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buy/Rent Button */}
                <div className="flex justify-center sm:justify-start mt-4">
                    <BuyRentButton />
                </div>

                {/* Filter options modal for mobile */}
                {isFilterModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end sm:hidden">
                        <div className="bg-white w-full p-4 rounded-t-2xl">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">Filter</h2>
                                <button
                                    className="text-red-500 font-bold"
                                    onClick={() => setIsFilterModalOpen(false)} // Close the modal
                                >
                                    Close
                                </button>
                            </div>

                            {/* Modal Content Split into Two Columns */}
                            <div className="flex flex-row">
                                {/* Left Column: Filter List */}
                                <div className="w-1/3 bg-gray-100 p-4">
                                    {FilterList?.map((filter) => (
                                        <div
                                            key={filter.id}
                                            className={`py-2 px-3 cursor-pointer ${selectedFilter === filter?.title ? "bg-purple-200" : ""}`}
                                            onClick={() => handleFilterClick(filter?.title)}
                                        >
                                            {filter.title}
                                        </div>
                                    ))}
                                </div>

                                {/* Right Column: Filter Content */}
                                <div className="w-2/3 p-4">
                                    {activeModal === "Price Range" && (
                                        <div className="p-4 w-full md:w-[240px]">
                                            <div className="text-center py-2">₹{val}</div>
                                            <Slider
                                                marks={marks}
                                                step={10}
                                                value={val}
                                                min={MIN}
                                                max={MAX}
                                                onChange={handleChange} // Ensure this works
                                                sx={{
                                                    color: "rgb(239 68 68)", // Red color for slider
                                                    height: 10, // Make the track thicker
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Other filter options can be rendered here similarly */}
                                    {activeModal === "Color" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            {color?.map((item) => (
                                                <div key={item?.id} className="flex mb-2 items-center">
                                                    <div
                                                        className="h-6 w-16 rounded-md border"
                                                        style={{ backgroundColor: item?.color }}
                                                        onClick={() => handleColorChange(item.name)}
                                                    />
                                                    <span className="ml-2 text-sm">
                                                        {item?.name} {"("} {item?.available} {")"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeModal === "Transmission" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            <div className="flex mb-4 items-center">
                                                <input type="checkbox" value={"manual"} className="me-2" onChange={() => handleTransmissionChange("Manual")} />
                                                <div className="w-full">
                                                    <select
                                                        name="manual"
                                                        className="outline-none w-full"
                                                        id="manual"
                                                    >
                                                        <option value="Manual" selected>
                                                            Manual {"("}200{")"}
                                                        </option>
                                                        {manual?.map((items) => (
                                                            <option key={items?.id} value={items?.gear}>
                                                                {items?.gear} {"("} {items?.available} {")"}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value={"automatic"}
                                                    className="me-2"
                                                    onChange={() => handleTransmissionChange("Automatic")}
                                                />
                                                <div className="w-full">
                                                    <select
                                                        name="automatic"
                                                        className="outline-none w-full"
                                                        id="automatic"
                                                    >
                                                        <option value="Automatic" selected>
                                                            Automatic {"("}100{")"}
                                                        </option>
                                                        {auto?.map((items) => (
                                                            <option key={items?.id} value={items?.gear}>
                                                                {items?.gear} {"("} {items?.available} {")"}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeModal === "Body Type" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            {carCategory?.map((item) => (
                                                <div key={item?.id} className="flex mb-2 items-center">
                                                    <input
                                                        type="radio"
                                                        name="bodytype"
                                                        value={item?.title}
                                                        className="me-2"
                                                        onChange={() => handleBodyTypeChange(item?.title)}
                                                    />
                                                    <div className="text-sm">{item?.title}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeModal === "Seats" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            {seats?.map((item) => (
                                                <div key={item?.id} className="flex mb-2 items-center">
                                                    <input
                                                        type="checkbox"
                                                        // value={item?.type}
                                                        value={item?.type.split(" ")[0]}
                                                        className="me-2"
                                                        onChange={handleSeatsChange}
                                                    />
                                                    <div className="text-sm">
                                                        {item?.type} {"("} {item?.available} {")"}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeModal === "Brands + Models" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="relative w-full ">
                                                <input
                                                    type="search"
                                                    name="Search Modal"
                                                    placeholder="Search"
                                                    className="py-2 border-2 outline-none rounded-lg w-full px-2 pr-10 mb-4"
                                                />
                                                <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                                            </div>
                                            <div className="text-xs text-gray-400 py-2">Top Brands</div>
                                            {brandsmap?.map((item) => (
                                                <div
                                                    key={item?.id}
                                                    className="mt-2 mb-4 flex gap-2 items-center"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        value={item?.name}
                                                        className="me-2"
                                                        onChange={() => handleBrandChange(item?.name)} // Call the brand handler
                                                    />
                                                    <div className="w-full">
                                                        <select name="modals" className="w-full" id=""
                                                            onChange={(e) => handleModelChange(e.target.value)} // Call the model handler
                                                        >
                                                            <option value={item?.name}>
                                                                {item?.name} {"("} {item?.available} {")"}
                                                            </option>
                                                            {item?.modals?.map((modal) => (
                                                                <option key={modal?.id} value={modal?.name}>
                                                                    {modal?.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeModal === "Kms Driven" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            {kms?.map((item) => (
                                                <div key={item?.id} className="flex mb-4 items-center">
                                                    <input
                                                        // type="checkbox"
                                                        value={item?.kms}
                                                        type="radio" // Use radio input for single selection
                                                        name="kmsDriven" // Use the same name to allow only one selection
                                                        className="me-2"
                                                        onChange={handleKmsChange}
                                                    />
                                                    <div className="text-sm">
                                                        {item?.kms} kms or less {"("} {item?.available} {")"}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeModal === "Year" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            {year?.map((item) => (
                                                <div key={item?.id} className="flex mb-2 items-center">
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={yearValue}
                                                        onChange={onYearChange}
                                                    // onChange={handleYearChange}
                                                    >
                                                        <div className="flex items-center">
                                                            <FormControlLabel
                                                                type="radio"
                                                                control={<Radio />}
                                                                value={item.year}
                                                            />
                                                            <span className="text-base">
                                                                {item?.year} & above {"("} {item?.available} {")"}
                                                            </span>
                                                        </div>
                                                    </RadioGroup>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeModal === "Owner" && (
                                        <div className="flex flex-col ms-3">
                                            <div className="text-gray-400 mb-4 text-sm">
                                                SELECT <span>By</span>
                                            </div>
                                            <RadioGroup
                                                aria-labelledby="owner-selection-group"
                                                name="owner-selection-group"
                                                value={ownerValue} // Tie to the selectedOwner state
                                                onChange={handleOwnerChange} // Update when a selection changes
                                            >
                                                {owner?.map((item) => (
                                                    <div key={item?.id} className="flex mb-2 items-center">
                                                        <FormControlLabel
                                                            control={<Radio />}
                                                            value={item.owner}
                                                            label={`${item.owner} & above (${item.available})`}
                                                        />
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            {/* {owner?.map((item) => (
                                                <div key={item?.id} className="flex mb-2 items-center">
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={item.value}
                                                        onChange={handleOwnerChange}
                                                    >
                                                        <div className="flex items-center">
                                                            <FormControlLabel
                                                                type="radio"
                                                                control={<Radio />}
                                                                value={item.value}
                                                                label={`${item.owner} & above (${item.available})`}
                                                            />
                                                            <span className="text-base">
                                                                {item?.owner} & above {"("} {item?.available} {")"}
                                                            </span>
                                                        </div>
                                                    </RadioGroup>
                                                </div>
                                            ))} */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters for desktop */}
                <div className="hidden sm:flex mt-4">
                    {/* Left Column: Filter List (Desktop) */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        {FilterList?.map((items) => (
                            <div
                                key={items.id}
                                className={`py-3.5 px-1 cursor-pointer ${activeModal === items?.title
                                    ? "bg-[#F6F2F9] text-purple-600"
                                    : ""}`}
                                onClick={() => handleFilterClick(items?.title)} // Set the active modal when a filter is clicked
                            >
                                {items.title}
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Filter Options (Desktop) */}
                    <div className="w-full md:w-2/3">
                        {/* Price Range Filter (Desktop) */}
                        {activeModal === "Price Range" && (
                            <div className="p-4 w-full md:w-[240px]">
                                <div className="text-center py-2">₹{val}</div>
                                <Slider
                                    marks={marks}
                                    step={10}
                                    value={val}
                                    min={MIN}
                                    max={MAX}
                                    onChange={handleChange} // Ensure this works
                                    sx={{
                                        color: "rgb(239 68 68)", // Red color for slider
                                        height: 10, // Make the track thicker
                                    }}
                                />
                            </div>
                        )}

                        {/* Other filter options can be rendered here similarly */}
                        {activeModal === "Color" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                {color?.map((item) => (
                                    <div key={item?.id} className="flex mb-2 items-center" onClick={() => handleColorChange(item.name)}>
                                        <div
                                            className="h-6 w-16 rounded-md border"
                                            style={{ backgroundColor: item?.color }}
                                        />
                                        <span className="ml-2 text-sm">
                                            {item?.name} {"("} {item?.available} {")"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeModal === "Transmission" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                <div className="flex mb-4 items-center">
                                    <input type="checkbox" value={"manual"} className="me-2" onChange={() => handleTransmissionChange("Manual")} />
                                    <div className="w-full">
                                        <select
                                            name="manual"
                                            className="outline-none w-full"
                                            id="manual"
                                        >
                                            <option value="Manual" selected>
                                                Manual {"("}200{")"}
                                            </option>
                                            {manual?.map((items) => (
                                                <option key={items?.id} value={items?.gear}>
                                                    {items?.gear} {"("} {items?.available} {")"}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value={"automatic"}
                                        className="me-2" onChange={() => handleTransmissionChange("Automatic")}
                                    />
                                    <div className="w-full">
                                        <select
                                            name="automatic"
                                            className="outline-none w-full"
                                            id="automatic"
                                        >
                                            <option value="Automatic" selected>
                                                Automatic {"("}100{")"}
                                            </option>
                                            {auto?.map((items) => (
                                                <option key={items?.id} value={items?.gear}>
                                                    {items?.gear} {"("} {items?.available} {")"}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeModal === "Body Type" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                {carCategory?.map((item) => (
                                    <div key={item?.id} className="flex mb-2 items-center">
                                        <input
                                            type="radio"
                                            name="bodytype"
                                            value={item?.title}
                                            className="me-2"
                                            onChange={() => handleBodyTypeChange(item?.title)}
                                        />
                                        <div className="text-sm">{item?.title}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeModal === "Seats" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                {seats?.map((item) => (
                                    <div key={item?.id} className="flex mb-2 items-center">
                                        <input
                                            type="checkbox"
                                            // value={item?.type}
                                            value={item?.type.split(" ")[0]} // Pass only the seat number
                                            className="me-2"
                                            onChange={handleSeatsChange}
                                        />
                                        <div className="text-sm">
                                            {item?.type} {"("} {item?.available} {")"}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeModal === "Brands + Models" && (
                            <div className="flex flex-col ms-3">
                                <div className="relative w-full ">
                                    <input
                                        type="search"
                                        name="Search Modal"
                                        placeholder="Search"
                                        className="py-2 border-2 outline-none rounded-lg w-full px-2 pr-10 mb-4"
                                    />
                                    <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="text-xs text-gray-400 py-2">Top Brands</div>
                                {brandsmap?.map((item) => (
                                    <div
                                        key={item?.id}
                                        className="mt-2 mb-4 flex gap-2 items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            value={item?.name}
                                            className="me-2"
                                            onChange={() => handleBrandChange(item?.name)} // Call the brand handler
                                        />
                                        <div className="w-full">
                                            <select name="modals" className="w-full" id=""
                                                onChange={(e) => handleModelChange(e.target.value)} // Call the model handler
                                            >
                                                <option value={item?.name}>
                                                    {item?.name} {"("} {item?.available} {")"}
                                                </option>
                                                {item?.modals?.map((modal) => (
                                                    <option key={modal?.id} value={modal?.name}>
                                                        {modal?.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeModal === "Kms Driven" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                {kms?.map((item) => (
                                    <div key={item?.id} className="flex mb-4 items-center">
                                        <input
                                            value={item?.kms}
                                            type="radio" // Use radio input for single selection
                                            name="kmsDriven" // Use the same name to allow only one selection
                                            className="me-2"
                                            onChange={handleKmsChange}

                                        />
                                        <div className="text-sm">
                                            {item?.kms} kms or less {"("} {item?.available} {")"}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeModal === "Year" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                {year?.map((item) => (
                                    <div key={item?.id} className="flex mb-2 items-center">
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={yearValue}
                                            onChange={onYearChange}
                                        // onChange={handleYearChange}
                                        >
                                            <div className="flex items-center">
                                                <FormControlLabel
                                                    type="radio"
                                                    control={<Radio />}
                                                    value={item.year}
                                                // value={item.value}
                                                />
                                                <span className="text-base">
                                                    {item?.year} & above {"("} {item?.available} {")"}
                                                </span>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeModal === "Owner" && (
                            <div className="flex flex-col ms-3">
                                <div className="text-gray-400 mb-4 text-sm">
                                    SELECT <span>By</span>
                                </div>
                                {/* {owner?.map((item) => (
                                    <div key={item?.id} className="flex mb-2 items-center">
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={item.value}
                                            onChange={handleOwnerChange}
                                        >
                                            <div className="flex items-center">
                                                <FormControlLabel
                                                    type="radio"
                                                    control={<Radio />}
                                                    value={item.value}
                                                    label={`${item.owner} & above (${item.available})`}
                                                />
                                                <span className="text-base">
                                                    {item?.owner} & above {"("} {item?.available} {")"}
                                                </span>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                ))} */}
                                <RadioGroup
                                    aria-labelledby="owner-selection-group"
                                    name="owner-selection-group"
                                    value={ownerValue} // Tie to the selectedOwner state
                                    onChange={handleOwnerChange} // Update when a selection changes
                                >
                                    {owner?.map((item) => (
                                        <div key={item?.id} className="flex mb-2 items-center">
                                            <FormControlLabel
                                                control={<Radio />}
                                                value={item.owner}
                                                label={`${item.owner} & above (${item.available})`}
                                            />
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
