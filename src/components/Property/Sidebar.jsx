import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
//filter data from utils
import {
    carCategory,
    bikeFilterList,
    bikeCategory,
    FilterList,
    color,
    manual,
    auto,
    seats,
    brand,
    kms,
    year,
    owner,
} from "../../utils";

//Radio button MUI for filter
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

//material UI components
import Slider from "@mui/material/Slider";
import BuyRentButton from "../buttons/buyRentButton/buyRentButton";
import { red } from "@mui/material/colors";

//price range filter
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

const Sidebar = () => {
    const [isActive, setIsActive] = useState("Hatchback");
    const [isActiveTab, setIsActiveTab] = useState("Buy");
    // State to control the visibility of the filter modal on mobile
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [yearValue, setYearValue] = useState("");
    const [ownerValue, setOwnerValue] = useState("");
    const [selectedFilter, setSelectedFilter] = useState(''); // Track selected filter category
    const handleYearChange = (event) => {
        setYearValue(event.target.value);
    };
    const handleOwnerChange = (event) => {
        setOwnerValue(event.target.value);
    };
    //filter states
    const [activeModal, setActiveModal] = useState(null);

    const [val, setVal] = React.useState(MIN);
    const handleChange = (_, newValue) => {
        setVal(newValue);
    };

    const handleFilterClick = (title) => {
        if (activeModal === title) {
            setActiveModal(null);
        } else {
            setActiveModal(title);
        }
    };

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState(25000000);
    const [areaFrom, setAreaFrom] = useState("");
    const [areaTo, setAreaTo] = useState(4000);

    const handleFromChange = (event) => {
        setPriceFrom(event.target.value);
        setAreaFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setPriceTo(event.target.value);
        setAreaTo(event.target.value);
    };

    const [selectAll, setSelectAll] = useState(false);

    const [checkboxes, setCheckboxes] = useState({
        property: {
            resiApart: false,
            indepHouse: false,
            resiLand: false,
            indepFloor: false,
            farmHouse: false,
            servApart: false,
        },
        bhk: {
            bhk: false,
            tbhk: false,
            thbhk: false,
            fbhk: false,
            fpbhk: false,
        },
        construction: {
            new: false,
            ongoing: false,
            completed: false,
        },
        amenities: {
            parking: false,
            power: false,
            lift: false,
            park: false,
            security: false,
            club: false,
            pool: false,
            gym: false,
            gas: false,
        },
        bathroom: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
        },
        furniture: {
            unFurnished: false,
            semiFurnished: false,
            furnished: false,
        },
    });

    const fullNames = {
        property: {
            resiApart: "Residential Apartment",
            indepHouse: "Independent House",
            resiLand: "Residential Land",
            indepFloor: "Independent Floor",
            farmHouse: "Farm House",
            servApart: "Serviced Apartment",
        },
        bhk: {
            bhk: "1 BHK",
            tbhk: "2 BHK",
            thbhk: "3 BHK",
            fbhk: "4 BHK",
            fpbhk: "5+ BHK",
        },
        construction: {
            new: "New Construction",
            ongoing: "Ongoing Construction",
            completed: "Completed Construction",
        },
        amenities: {
            parking: "Parking",
            power: "Power Backup",
            lift: "Lift",
            park: "Park",
            security: "Security Personnel",
            club: "Club House",
            pool: "Swimming Pool",
            gym: "Gymnasium",
            gas: "Gas Pipeline",
        },
        bathroom: {
            one: "1+",
            two: "2+",
            three: "3+",
            four: "4+",
            five: "5+",
        },
        furniture: {
            unFurnished: "Unfurnished",
            semiFurnished: "Semifurnished",
            furnished: "Furnished",
        },
    };

    const handleSelectAllChange = (event, category) => {
        const isChecked = event.target.checked;
        setCheckboxes((prevState) => ({
            ...prevState,
            [category]: Object.keys(prevState[category]).reduce((acc, key) => {
                acc[key] = isChecked;
                return acc;
            }, {}),
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const [category, key] = name.split("."); // 'category.key'
        setCheckboxes((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [key]: checked,
            },
        }));
    };

    const propertyFilterItem = [
        {
            id: "1",
            title: "Budget",
        },
        {
            id: "2",
            title: "Property Type",
        },
        {
            id: "3",
            title: "Bhk",
        },
        {
            id: "4",
            title: "Construction Status",
        },
        {
            id: "5",
            title: "Area",
        },
        {
            id: "6",
            title: "Amenities",
        },
        {
            id: "7",
            title: "Bathrooms",
        },
        {
            id: "8",
            title: "Furnishing status",
        },
    ];
    const pathname = usePathname();
    return (
        <div>
            <div className="p-3">
                {/* Header */}
                <div className="flex justify-between items-center bg-white text-black h-[60px] sm:h-[100px] md:h-[114px] rounded-b-2xl px-4 shadow-lg sm:bg-red-500 sm:text-white">
                    {/* Title */}
                    <div className="text-lg sm:text-3xl md:text-4xl font-semibold">
                        Properties
                    </div>

                    {/* Filter button (visible on mobile) */}
                    <button
                        className="block sm:hidden bg-red-500 text-white rounded-full p-2"
                        onClick={() => setIsFilterModalOpen(true)} // Open the modal on click
                    >
                        <FaFilter className="w-5 h-5" />
                    </button>
                </div>


                {/* Buy/Rent Button */}
                <div className="flex justify-center sm:justify-start mt-4">
                    <BuyRentButton />
                </div>

                {/* Filter options modal for mobile */}
                {isFilterModalOpen && (
                    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end sm:hidden">
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end md:hidden">

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
                                    {propertyFilterItem?.map((filter) => (
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
                                    {activeModal === "Budget" && (
                                        <div className="p-3 ">
                                            <div className="mb-4 text-lg">Budget Range</div>
                                            <div className="flex flex-col md:flex-row items-center gap-4">
                                                <div className="flex-1">
                                                    <select
                                                        name="from"
                                                        id="from"
                                                        value={priceFrom}
                                                        onChange={handleFromChange}
                                                        className="py-2 outline-none border rounded-md w-full"
                                                    >
                                                        <option value="0">0</option>
                                                        <option value="100000">100000</option>
                                                        <option value="200000">200000</option>
                                                        <option value="1200000">1200000</option>
                                                        <option value="25000000">25000000</option>
                                                    </select>
                                                </div>
                                                <span className="md:mx-2">to</span>
                                                <div className="flex-1">
                                                    <select
                                                        name="to"
                                                        id="to"
                                                        value={priceTo}
                                                        onChange={handleToChange}
                                                        className="py-2 outline-none border px-1 rounded-full w-full"
                                                    >
                                                        <option value="100000">100000</option>
                                                        <option value="200000">200000</option>
                                                        <option value="1200000">1200000</option>
                                                        <option value="25000000">100 Cr+</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Property Type" && (
                                        <div className="p-3  flex flex-col gap-6">
                                            {Object.keys(checkboxes.property).map((key) => (
                                                <div key={key} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`property.${key}`}
                                                        name={`property.${key}`}
                                                        checked={checkboxes.property[key]}
                                                        onChange={handleCheckboxChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`property.${key}`}>
                                                        {fullNames.property[key]}
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="selectAll"
                                                    name="selectAll"
                                                    checked={selectAll}
                                                    onChange={(event) =>
                                                        handleSelectAllChange(event, "property")
                                                    }
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="selectAll"
                                                    className="text-blue-600 cursor-pointer"
                                                >
                                                    Select All
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Bhk" && (
                                        <div className="p-3 flex flex-col gap-6">
                                            {Object.keys(checkboxes.bhk).map((key) => (
                                                <div key={key} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name={`bhk.${key}`}
                                                        id={`bhk.${key}`}
                                                        checked={checkboxes.bhk[key]}
                                                        onChange={handleCheckboxChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`bhk.${key}`}>{fullNames.bhk[key]}</label>
                                                </div>
                                            ))}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="selectAll"
                                                    name="selectAll"
                                                    checked={selectAll}
                                                    onChange={(event) => handleSelectAllChange(event, "bhk")}
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="selectAll"
                                                    className="text-blue-600 cursor-pointer"
                                                >
                                                    Select All
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Construction Status" && (
                                        <div className="p-3 flex flex-col gap-6">
                                            {Object.keys(checkboxes.construction).map((key) => (
                                                <div key={key} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`construction.${key}`}
                                                        name={`construction.${key}`}
                                                        checked={checkboxes.construction[key]}
                                                        onChange={handleCheckboxChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`construction.${key}`}>
                                                        {fullNames.construction[key]}
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="selectAll"
                                                    name="selectAll"
                                                    checked={selectAll}
                                                    onChange={(event) =>
                                                        handleSelectAllChange(event, "construction")
                                                    }
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="selectAll"
                                                    className="text-blue-600 cursor-pointer"
                                                >
                                                    Select All
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Area" && (
                                        <div className="p-3 ">
                                            <div className="flex items-center justify-between mb-4 text-lg">
                                                <div>Area</div>
                                                <div className="text-sm">
                                                    <select name="areaType" className="px-1" id="areaType">
                                                        <option value="Sq.ft">Sq.ft</option>
                                                        <option value="Sq.ft">Sq.ft</option>
                                                        <option value="Sq.ft">Sq.ft</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                                <div className="flex-1">
                                                    <select
                                                        name="from"
                                                        id="from"
                                                        value={areaFrom}
                                                        onChange={handleFromChange}
                                                        className="py-2 outline-none border rounded-md w-full"
                                                    >
                                                        <option value="0">0 Sq. ft.</option>
                                                        <option value="500">500 Sq.ft.</option>
                                                        <option value="700">700 Sq.ft.</option>
                                                        <option value="900">900 Sq.ft.</option>
                                                        <option value="1000">1000 Sq.ft.</option>
                                                    </select>
                                                </div>
                                                <span className="md:mx-2">-</span>
                                                <div className="flex-1">
                                                    <select
                                                        name="to"
                                                        id="to"
                                                        value={areaTo}
                                                        onChange={handleToChange}
                                                        className="py-2 outline-none border-black border rounded-full w-full"
                                                    >
                                                        <option value="1100">1100 Sq.ft.</option>
                                                        <option value="2000">2000 Sq.ft.</option>
                                                        <option value="3000">3000 Sq.ft.</option>
                                                        <option value="4000">4000+ Sq.ft.</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Amenities" && (
                                        <div className="p-3 flex flex-col gap-6">
                                            {Object.keys(checkboxes.amenities).map((key) => (
                                                <div key={key} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name={`amenities.${key}`}
                                                        id={`amenities.${key}`}
                                                        checked={checkboxes.amenities[key]}
                                                        onChange={handleCheckboxChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`amenities.${key}`}>
                                                        {fullNames.amenities[key]}
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="selectAll"
                                                    name="selectAll"
                                                    checked={selectAll}
                                                    onChange={(event) =>
                                                        handleSelectAllChange(event, "amenities")
                                                    }
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="selectAll"
                                                    className="text-blue-600 cursor-pointer"
                                                >
                                                    Select All
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Bathrooms" && (
                                        <div className="p-3  flex-col gap-6">
                                            {Object.keys(checkboxes.bathroom).map((key) => (
                                                <div key={key} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name={`bathroom.${key}`}
                                                        id={`bathroom.${key}`}
                                                        checked={checkboxes.bathroom[key]}
                                                        onChange={handleCheckboxChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`bathroom.${key}`}>
                                                        {fullNames.bathroom[key]}
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="selectAll"
                                                    name="selectAll"
                                                    checked={selectAll}
                                                    onChange={(event) =>
                                                        handleSelectAllChange(event, "bathroom")
                                                    }
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="selectAll"
                                                    className="text-blue-600 cursor-pointer"
                                                >
                                                    Select All
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {activeModal === "Furnishing status" && (
                                        <div className="p-3 flex flex-col gap-6">
                                            {Object.keys(checkboxes.furniture).map((key) => (
                                                <div key={key} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name={`furniture.${key}`}
                                                        id={`furniture.${key}`}
                                                        checked={checkboxes.furniture[key]}
                                                        onChange={handleCheckboxChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`furniture.${key}`}>
                                                        {fullNames.furniture[key]}
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="selectAll"
                                                    name="selectAll"
                                                    checked={selectAll}
                                                    onChange={(event) =>
                                                        handleSelectAllChange(event, "furniture")
                                                    }
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="selectAll"
                                                    className="text-blue-600 cursor-pointer"
                                                >
                                                    Select All
                                                </label>
                                            </div>
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
                        {propertyFilterItem?.map((items) => (
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
                        {activeModal === "Budget" && (
                            <div className="p-3 ">
                                <div className="mb-4 text-lg">Budget Range</div>
                                <div className="flex flex-col md:flex-row items-center gap-4">
                                    <div className="flex-1">
                                        <select
                                            name="from"
                                            id="from"
                                            value={priceFrom}
                                            onChange={handleFromChange}
                                            className="py-2 outline-none border rounded-md w-full"
                                        >
                                            <option value="0">0</option>
                                            <option value="100000">100000</option>
                                            <option value="200000">200000</option>
                                            <option value="1200000">1200000</option>
                                            <option value="25000000">25000000</option>
                                        </select>
                                    </div>
                                    <span className="md:mx-2">to</span>
                                    <div className="flex-1">
                                        <select
                                            name="to"
                                            id="to"
                                            value={priceTo}
                                            onChange={handleToChange}
                                            className="py-2 outline-none border px-1 rounded-full w-full"
                                        >
                                            <option value="100000">100000</option>
                                            <option value="200000">200000</option>
                                            <option value="1200000">1200000</option>
                                            <option value="25000000">100 Cr+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeModal === "Property Type" && (
                            <div className="p-3 flex flex-col gap-6">
                                {Object.keys(checkboxes.property).map((key) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`property.${key}`}
                                            name={`property.${key}`}
                                            checked={checkboxes.property[key]}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`property.${key}`}>
                                            {fullNames.property[key]}
                                        </label>
                                    </div>
                                ))}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        name="selectAll"
                                        checked={selectAll}
                                        onChange={(event) =>
                                            handleSelectAllChange(event, "property")
                                        }
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-blue-600 cursor-pointer"
                                    >
                                        Select All
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeModal === "Bhk" && (
                            <div className="p-3 flex flex-col gap-6">
                                {Object.keys(checkboxes.bhk).map((key) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={`bhk.${key}`}
                                            id={`bhk.${key}`}
                                            checked={checkboxes.bhk[key]}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`bhk.${key}`}>{fullNames.bhk[key]}</label>
                                    </div>
                                ))}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        name="selectAll"
                                        checked={selectAll}
                                        onChange={(event) => handleSelectAllChange(event, "bhk")}
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-blue-600 cursor-pointer"
                                    >
                                        Select All
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeModal === "Construction Status" && (
                            <div className="p-3 flex flex-col gap-6">
                                {Object.keys(checkboxes.construction).map((key) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`construction.${key}`}
                                            name={`construction.${key}`}
                                            checked={checkboxes.construction[key]}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`construction.${key}`}>
                                            {fullNames.construction[key]}
                                        </label>
                                    </div>
                                ))}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        name="selectAll"
                                        checked={selectAll}
                                        onChange={(event) =>
                                            handleSelectAllChange(event, "construction")
                                        }
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-blue-600 cursor-pointer"
                                    >
                                        Select All
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeModal === "Area" && (
                            <div className="p-3">
                                <div className="flex items-center justify-between mb-4 text-lg">
                                    <div>Area</div>
                                    <div className="text-sm">
                                        <select name="areaType" className="px-1" id="areaType">
                                            <option value="Sq.ft">Sq.ft</option>
                                            <option value="Sq.ft">Sq.ft</option>
                                            <option value="Sq.ft">Sq.ft</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                    <div className="flex-1">
                                        <select
                                            name="from"
                                            id="from"
                                            value={areaFrom}
                                            onChange={handleFromChange}
                                            className="py-2 outline-none border rounded-md w-full"
                                        >
                                            <option value="0">0 Sq. ft.</option>
                                            <option value="500">500 Sq.ft.</option>
                                            <option value="700">700 Sq.ft.</option>
                                            <option value="900">900 Sq.ft.</option>
                                            <option value="1000">1000 Sq.ft.</option>
                                        </select>
                                    </div>
                                    <span className="md:mx-2">-</span>
                                    <div className="flex-1">
                                        <select
                                            name="to"
                                            id="to"
                                            value={areaTo}
                                            onChange={handleToChange}
                                            className="py-2 outline-none border-black border rounded-full w-full"
                                        >
                                            <option value="1100">1100 Sq.ft.</option>
                                            <option value="2000">2000 Sq.ft.</option>
                                            <option value="3000">3000 Sq.ft.</option>
                                            <option value="4000">4000+ Sq.ft.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeModal === "Amenities" && (
                            <div className="p-3flex flex-col gap-6">
                                {Object.keys(checkboxes.amenities).map((key) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={`amenities.${key}`}
                                            id={`amenities.${key}`}
                                            checked={checkboxes.amenities[key]}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`amenities.${key}`}>
                                            {fullNames.amenities[key]}
                                        </label>
                                    </div>
                                ))}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        name="selectAll"
                                        checked={selectAll}
                                        onChange={(event) =>
                                            handleSelectAllChange(event, "amenities")
                                        }
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-blue-600 cursor-pointer"
                                    >
                                        Select All
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeModal === "Bathrooms" && (
                            <div className="p-3  flex flex-col gap-6">
                                {Object.keys(checkboxes.bathroom).map((key) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={`bathroom.${key}`}
                                            id={`bathroom.${key}`}
                                            checked={checkboxes.bathroom[key]}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`bathroom.${key}`}>
                                            {fullNames.bathroom[key]}
                                        </label>
                                    </div>
                                ))}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        name="selectAll"
                                        checked={selectAll}
                                        onChange={(event) =>
                                            handleSelectAllChange(event, "bathroom")
                                        }
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-blue-600 cursor-pointer"
                                    >
                                        Select All
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeModal === "Furnishing status" && (
                            <div className="p-3 flex flex-col gap-6">
                                {Object.keys(checkboxes.furniture).map((key) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={`furniture.${key}`}
                                            id={`furniture.${key}`}
                                            checked={checkboxes.furniture[key]}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`furniture.${key}`}>
                                            {fullNames.furniture[key]}
                                        </label>
                                    </div>
                                ))}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        name="selectAll"
                                        checked={selectAll}
                                        onChange={(event) =>
                                            handleSelectAllChange(event, "furniture")
                                        }
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-blue-600 cursor-pointer"
                                    >
                                        Select All
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
