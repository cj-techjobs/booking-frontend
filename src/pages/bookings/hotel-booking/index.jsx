import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Select from "react-select";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Icon from "/src/assets/bookingsSvg/icon.svg";
import Image from "next/image";

const HotelBooking = () => {
  const data = [
    { value: "nyc", label: "New York City, New York, United States" },
    { value: "buffalo", label: "Buffalo, New York, United States" },
    { value: "la", label: "Los Angeles, California, United States" },
    { value: "sf", label: "San Francisco, California, United States" },
    { value: "toronto", label: "Toronto, Ontario, Canada" },
    { value: "vancouver", label: "Vancouver, British Columbia, Canada" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected:", selectedOption);
  };
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
    borderColor: isHover ? "red" : "red",
  };
  return (
    <div className="container mx-auto">
      <div className="w-full bg-cover hotel-bg">
        <div className="flex flex-col h-[calc(100vh-85px)] justify-center items-center">
          <div className="flex">
            <label
              htmlFor="search Hotel"
              className="absolute ms-8 z-20 text-xs text-gray-400 mt-0.5"
            >
              SELECT DESTINATION
            </label>
            <SearchRoundedIcon
              className="absolute mt-4 ms-2 z-10 text-gray-400"
              fontSize="medium"
            />
            <Select
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              options={data}
              placeholder={""}
              value={selectedOption}
              onChange={handleChange}
              isSearchable
              className="w-[500px]"
              styles={{
                style,
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  padding: "10px",
                  borderRadius: "8px",
                }),
              }}
            />
          </div>
          <div className="bg-white w-[500px] flex items-center justify-evenly py-2 rounded-lg mt-3">
            <div className="flex flex-col">
              <label htmlFor="startDate" className="text-[10px] text-gray-600">
                CHECK-IN
              </label>
              <input
                type="date"
                name="start"
                id="startDate"
                className="p-0 appearance-none outline-none"
              />
            </div>
            <span className="bg-gray-100 text-gray-500">1 NIGHT</span>
            <div className="flex flex-col">
              <label htmlFor="endDate" className="text-[10px] text-gray-600">
                CHECK-OUT
              </label>
              <input type="date" name="end" id="endDate" />
            </div>
          </div>
          <div className="bg-white w-[500px] flex gap-3 items-center py-2 rounded-lg mt-3">
            <AccountCircleRoundedIcon
              fontSize="large"
              className="ms-3 text-gray-400"
            />
            <div className="flex flex-col">
              <label htmlFor="option" className="text-[10px] text-gray-600">
                GUESTS & ROOMS
              </label>
              <select
                name="guestsRooms"
                id="options"
                className="appearance-none outline-none"
              >
                <option selected value="1">
                  SELECT
                </option>
                <option value="1">1 Adult, 1 Room</option>
                <option value="2">2 Adults, 1 Room</option>
                <option value="3">3 Adults, 2 Room</option>
                <option value="4">4 Adults, 2 Room</option>
              </select>
            </div>
          </div>
          <div className="w-[300px] shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] flex justify-center py-3 rounded-lg mb-36 bg-white mt-3 text-xl">
            <button>SEARCH</button>
          </div>
          {/* <div className="bg-white px-2 py-2 rounded-lg mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
            />
            </LocalizationProvider>
            </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <Image src={Icon} width={150} height={150} alt="icon" />
      </div>
        <div className="text-center text-2xl mt-2">Search for 1000+ hotels around you</div>
    </div>
  );
};

export default HotelBooking;
