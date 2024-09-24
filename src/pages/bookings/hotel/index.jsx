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
import SearchIcon from "/src/assets/bookingsSvg/searchIcon.svg"
import { Autocomplete, TextField } from "@mui/material";

const HotelBooking = () => {
  const options = [
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

  const CustomTextField = styled(TextField)({
    width: "100%",
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#6B7280 !important",
    },

    "& .MuiInputBase-input": {
      color: "black",
      fontSize: "15px",
      padding: "0px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none !important",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important",
    },
  });

  const CustomAutocomplete = styled(Autocomplete)({
    "& .MuiAutocomplete-endAdornment": {
      display: "none",
    },
    "& .MuiAutocomplete-root": {
      width: "100% !important",
    },
  });

  const StyledDateRangePicker = styled(DateRangePicker)(({ theme }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      border: "none",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent !important",
      border: "none",
      "&:before": {
        borderBottom: "none !important",
      },
      "&:after": {
        borderBottom: "none !important",
      },
      "&:hover:before": {
        borderBottom: "none !important",
      },
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
          <div className="flex gap-2 items-center bg-white w-[380px] md:w-[500] rounded-xl p-1">
            <Image src={SearchIcon} alt="search" width={25} height={25} />
            <CustomAutocomplete
              id="standard-basic"
              options={options}
              sx={{ width: "100%", padding: "0px" }}
              renderInput={(params) => (
                <CustomTextField
                  {...params}
                  sx={{ padding: "0px" }}
                  label="SELECT DESTINATION"
                  variant="standard"
                />
              )}
            />
          </div>
          <div className="bg-white w-[380px] md:w-[500] px-2 rounded-lg mt-3">
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
          <div className="bg-white w-[380px] md:w-[500] flex gap-3 items-center py-2 rounded-lg mt-3">
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
          <div className="w-[200px] md:w-[300px] shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] flex justify-center py-3 rounded-lg mb-36 bg-white mt-3 text-xl">
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
