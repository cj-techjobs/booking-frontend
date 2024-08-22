import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Select from "react-select";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Icon from "/src/assets/bookingsSvg/icon.svg";
import Image from "next/image";
import dayjs from "dayjs";
import styled from "styled-components";
import { TextField } from "@mui/material";

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
  const [dateRange, setDateRange] = useState([null, null]);
  const [totalNight, setTotalNight] = useState(0);

  const StyledDateRangePicker = styled(DateRangePicker)(({ theme }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      border: "none",
    },
    "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
      backgroundColor: "none",
      border: "none",
    },
    "& .css-hwkq3c-MuiInputBase-root-MuiFilledInput-root": {
      backgroundColor: "trasnparent",
      background: "transparent",
    },
    "& .css-hwkq3c-MuiInputBase-root-MuiFilledInput-root::after": {
      border: "none",
    },
    "& .css-hwkq3c-MuiInputBase-root-MuiFilledInput-root::before": {
      borderBottom: "none",
    },
    "& .MuiMultiInputDateRangeField-separator": {
      backgroundColor: "#e5e7eb",
      padding: "2px",
      color: "#374151",
      borderRadius: "5px",
      fontSize: "14px",
    },
    "& .MuiInputBase-input": {
      fontSize: "14px",
      backgroundColor: "transparent",
      border: "none",
    },
  }));

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

  const handleDateChange = (newValue) => {
    setDateRange(newValue);

    if (newValue[0] && newValue[1]) {
      const startDate = dayjs(newValue[0]);
      const endDate = dayjs(newValue[1]);
      const nights = endDate.diff(startDate, "day"); // Calculate difference in days
      setTotalNight(nights);
    } else {
      setTotalNight(0);
    }
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
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  padding: "10px",
                  borderRadius: "8px",
                }),
              }}
            />
          </div>
          <div className="bg-white w-[500px] px-2 rounded-lg mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDateRangePicker
                calendars={1}
                value={dateRange}
                onChange={handleDateChange}
                format="DD MMM ddd'YYYY"
                localeText={{ start: "CHECK-IN", end: "CHECK-OUT" }}
                slotProps={{
                  field: {
                    dateSeparator: `${totalNight}NIGHT${
                      totalNight !== 1 ? "S" : ""
                    }`,
                  },
                  textField: { variant: "filled" },
                }}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField {...startProps} variant="filled" />
                    <span>{startProps?.inputProps?.value}</span>
                    <TextField {...endProps} variant="filled" />
                  </>
                )}
              />
            </LocalizationProvider>
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
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <Image src={Icon} width={150} height={150} alt="icon" />
      </div>
      <div className="text-center text-2xl mt-2">
        Search for 1000+ hotels around you
      </div>
    </div>
  );
};

export default HotelBooking;
