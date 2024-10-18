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

const Filter = () => {
    const [isActive, setIsActive] = useState("Hatchback");
    const [isActiveTab, setIsActiveTab] = useState("Buy");

    const [yearValue, setYearValue] = useState("");
    const [ownerValue, setOwnerValue] = useState("");

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




    return (
        <div>
            <div className="p-3">
                <div className="flex justify-between items-center bg-white text-black h-[60px] sm:h-[100px] md:h-[114px] rounded-b-2xl px-4 shadow-lg sm:bg-red-500 sm:text-white">


                    {/* <!-- Centered Text --> */}
                    <div className="text-lg sm:text-3xl md:text-4xl font-semibold text-center">
                        Shop in Cars
                    </div>

                    {/* <!-- Mobile Button for Filter Icon with FaFilter --> */}
                    <button className="block sm:hidden bg-red-500 text-white rounded-full p-2" 
                    // onClick={toggleModal}
                    >
                        <FaFilter className="w-5 h-5" />
                    </button>
                </div>


                <div className="mt-3 rounded-xl px-1 md:flex md:flex-row flex-wrap flex  shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-gray-200">
                    {carCategory?.map((item) => (
                        <div
                            className={`py-1 px-1 rounded-xl cursor-pointer ${isActive === `${item?.title}`
                                ? "bg-[#181616] flex justify-center w-[50px] text-white"
                                : ""
                                }`}
                            onClick={() => setIsActive(`${item?.title}`)}
                            key={item?.id}
                        >
                            <div className="text-[10px] flex items-center flex-col">
                                <div className="flex w-10 justify-center">
                                    <Image src={item?.image} height={20} width={35} alt="" />
                                </div>
                                <div className="flex flex-col text-center">
                                    {item?.title.split(' ').map((word, index) => (
                                        <span key={index}>{word}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <BuyRentButton />

                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4">
                    <div className="text-lg flex items-center justify-center gap-2">
                        <IoMdArrowBack />
                        Filter</div>
                    <div className="px-3 py-1 rounded-2xl shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-[#F9F2F2] text-red-500 mt-2 sm:mt-0">
                        Done
                    </div>
                </div>
                <hr className="mt-2" />

                <div className="flex flex-col md:flex-row mt-4">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        {FilterList?.map((items) => (
                            <div
                                key={items.id}
                                className={`py-3.5 px-1 cursor-pointer ${activeModal === `${items?.title}` ? "bg-[#F6F2F9] text-purple-600" : ""
                                    }`}
                                onClick={() => handleFilterClick(items?.title)}
                            >
                                {items.title}
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:w-2/3">
                        {activeModal === "Price Range" && (
                            <div className="p-4 w-full md:w-[240px]">
                                <div className="text-center py-2">₹{val}</div>
                                <Slider
                                    marks={marks}
                                    step={10}
                                    value={val}
                                    min={MIN}
                                    max={MAX}
                                    onChange={handleChange}
                                    sx={{
                                        color: "rgb(239 68 68)", // Red color
                                        height: 10, // Make the track thicker
                                        "& .MuiSlider-track": {
                                            border: "none",
                                            height: 10, // Make the track thicker
                                        },
                                        "& .MuiSlider-rail": {
                                            height: 10, // Make the rail thicker
                                        },
                                        "& .MuiSlider-thumb": {
                                            width: 28, // Increase thumb size
                                            height: 28, // Increase thumb size
                                            backgroundColor: "#fff",
                                            "&::before": {
                                                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                                            },
                                            "&:hover, &.Mui-focusVisible, &.Mui-active": {
                                                boxShadow: "none",
                                            },
                                        },
                                    }}
                                />
                            </div>

                        )}

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
                                    <input type="checkbox" value={"manual"} className="me-2" />
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
                                            type="checkbox"
                                            value={item?.title}
                                            className="me-2"
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
                                            value={item?.type}
                                            className="me-2"
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
                                {brand?.map((item) => (
                                    <div
                                        key={item?.id}
                                        className="mt-2 mb-4 flex gap-2 items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            value={item?.name}
                                            className="me-2"
                                        />
                                        <div className="w-full">
                                            <select name="modals" className="w-full" id="">
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
                                            type="checkbox"
                                            value={item?.kms}
                                            className="me-2"
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
                                            onChange={handleYearChange}
                                        >
                                            <div className="flex items-center">
                                                <FormControlLabel
                                                    type="radio"
                                                    control={<Radio />}
                                                    value={item.value}
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
                                {owner?.map((item) => (
                                    <div key={item?.id} className="flex mb-2 items-center">
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={ownerValue}
                                            onChange={handleOwnerChange}
                                        >
                                            <div className="flex items-center">
                                                <FormControlLabel
                                                    type="radio"
                                                    control={<Radio />}
                                                    value={item.value}
                                                />
                                                <span className="text-base">
                                                    {item?.owner} & above {"("} {item?.available} {")"}
                                                </span>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
