import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsCloudMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { PiSunHorizon } from "react-icons/pi";
import { airLines, filterItems } from "../../utils";

const MAX = 15999;
const MIN = 2999;
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

const FlightSideNavbar = () => {
  const [val, setVal] = useState(MIN);
  const handleSliderChange = (_, newValue) => {
    setVal(newValue);
  };

  const [showAll, setShowAll] = useState(false);

  const itemsShow = filterItems.slice(0, 2);
  const itemsToShow = showAll ? filterItems : filterItems.slice(0, 4);
  return (
    <div>
      <Typography variant="h6" className="font-semibold">
        Popular Filters
      </Typography>
      <div className="px-2 py-1">
        {itemsToShow.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      padding: "5px",
                    }}
                    size="small"
                  />
                }
                label={item?.label}
              />
            </FormGroup>
            <Typography variant="body1" className="font-medium">
              ₹{item?.price}
            </Typography>
          </div>
        ))}
        {filterItems.length > 4 && (
          <div
            onClick={() => setShowAll(!showAll)}
            variant="outlined"
            className="mt-2 text-blue-500 font-medium cursor-pointer w-fit"
          >
            {showAll
              ? "Show less"
              : `+ ${filterItems.length - itemsToShow.length} more`}
          </div>
        )}
      </div>
      <div>
        <Typography variant="h6" className="font-semibold mt-4">
          One Way Price
        </Typography>
        <div className="px-4 mt-2">
          <Slider
            marks={marks}
            value={val}
            min={MIN}
            max={MAX}
            onChange={handleSliderChange}
            sx={{
              height: "5px",
              color: "rgb(59 130 246)",
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
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
        <div className="flex justify-between">
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: "pointer" }}
          >
            ₹{MIN}
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: "pointer" }}
          >
            ₹{MAX}
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant="h6" className="font-semibold mt-4">
          Stops From Mwanza
        </Typography>
        <div className="px-2 py-1">
          {itemsShow.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        padding: "5px",
                      }}
                      size="small"
                    />
                  }
                  label={item?.label}
                />
              </FormGroup>
              <Typography variant="body1" className="font-medium">
                ₹{item?.price}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Typography variant="h6" className="font-semibold mt-4">
          Departure From Mwanza
        </Typography>
        <div className="flex gap-2 mt-2">
          <div className="rounded-lg w-[68px] border border-gray-200 px-1 py-3 *: flex items-center flex-col gap-2 justify-center">
            <FiSun className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              6 AM - 12 PM
            </Typography>
          </div>
          <div className="rounded-lg w-[68px] border border-gray-200 px-1 py-3 flex items-center flex-col gap-2 justify-center">
            <IoPartlySunnyOutline className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              12 PM - 6 PM
            </Typography>
          </div>
          <div className="rounded-lg w-[68px] border border-gray-200 px-1 py-3 flex items-center flex-col gap-2 justify-center">
            <BsCloudMoon className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              After 6 PM
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="h6" className="font-semibold mt-4">
          Arrival at Dar es Salaam
        </Typography>
        <div className="flex gap-2 mt-2">
          <div className="rounded-lg w-[65px] border border-gray-200 px-1 py-3 *: flex items-center flex-col gap-2 justify-center">
            <PiSunHorizon className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              Before 6 AM
            </Typography>
          </div>
          <div className="rounded-lg w-[68px] border border-gray-200 px-1 py-3 *: flex items-center flex-col gap-2 justify-center">
            <FiSun className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              6 AM - 12 PM
            </Typography>
          </div>
          <div className="rounded-lg w-[68px] border border-gray-200 px-1 py-3 flex items-center flex-col gap-2 justify-center">
            <IoPartlySunnyOutline className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              12 PM - 6 PM
            </Typography>
          </div>
          <div className="rounded-lg w-[65px] border border-gray-200 px-1 py-3 flex items-center flex-col gap-2 justify-center">
            <BsCloudMoon className="text-2xl text-gray-400" />
            <Typography
              variant="body2"
              className="tracking-tighter text-[10px] font-bold"
            >
              After 6 PM
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="h6" className="font-semibold mt-4 mb-3">
          Airlines
        </Typography>
        <div className="px-2 py-1.5">
          {airLines.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        padding: "5px",
                      }}
                      size="small"
                    />
                  }
                  label={item?.label}
                />
              </FormGroup>
              <Typography variant="body1" className="font-medium">
                ₹{item?.price}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSideNavbar;
