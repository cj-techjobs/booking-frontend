import React, { useState, useMemo, useCallback } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import { PiSunHorizon } from "react-icons/pi";
import { airLines, filterItems, timeSlots } from "../../utils";

const MAX = 15999;
const MIN = 2999;
const marks = [
  { value: MIN, label: "" },
  { value: MAX, label: "" },
];

const FilterCheckbox = ({ item: { label, price } }) => (
  <div className="flex justify-between items-center">
    <FormGroup>
      <FormControlLabel
        control={<Checkbox sx={{ padding: "5px" }} size="small" />}
        label={label}
      />
    </FormGroup>
    <div className=""></div>
    <Typography variant="body1" className="font-medium">
      ₹{price}
    </Typography>
  </div>
);


const TimeSlot = ({ icon: Icon, label, isSelected, onClick }) => (
  <div
    className={`rounded-lg w-[68px] border px-1 py-3 flex items-center flex-col gap-2 justify-center cursor-pointer ${
      isSelected ? "border-blue-500" : "border-gray-200"
    }`}
    onClick={onClick}
  >
    <Icon className={`text-2xl ${isSelected ? "text-blue-500" : "text-gray-400"}`} />
    <Typography variant="body2" className="tracking-tighter text-[10px] font-bold">
      {label}
    </Typography>
  </div>
);

const FlightSideNavbar = () => {
  const [val, setVal] = useState(MIN);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({
    departure: null,
    arrival: null,
  });
  const [showAll, setShowAll] = useState(false);

  const handleSliderChange = useCallback((_, newValue) => setVal(newValue), []);

  const handleTimeSlotClick = (time, type) => {
    setSelectedTimeSlot((prev) => ({
      ...prev,
      [type]: prev[type] === time ? null : time,
    }));
  };

  const itemsToShow = useMemo(
    () => (showAll ? filterItems : filterItems.slice(0, 4)),
    [showAll]
  );

  return (
    <div>
      <Typography variant="h6" className="font-semibold">Popular Filters</Typography>
      <div className="px-2 py-1">
        {itemsToShow.map((item, index) => (
          <FilterCheckbox key={index} item={item} />
        ))}
        {filterItems.length > 4 && (
          <div
            onClick={() => setShowAll(!showAll)}
            className="mt-2 text-blue-500 font-medium cursor-pointer w-fit"
          >
            {showAll ? "Show less" : `+ ${filterItems.length - itemsToShow.length} more`}
          </div>
        )}
      </div>

      <Typography variant="h6" className="font-semibold mt-4">One Way Price</Typography>
      <div className="px-4 mt-2">
        <Slider
          marks={marks}
          valueLabelDisplay="auto" 
          value={val}
          min={MIN}
          max={MAX}
          onChange={handleSliderChange}
          sx={{
            height: "5px",
            color: "rgb(59 130 246)",
            "&:hover, &.Mui-focusVisible, &.Mui-active": { boxShadow: "none" },
            "& .MuiSlider-track": { border: "none" },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              "&::before": { boxShadow: "0 4px 8px rgba(0,0,0,0.4)" },
              "&:hover, &.Mui-focusVisible, &.Mui-active": { boxShadow: "none" },
            },
          }}
        />
      </div>
      <div className="flex justify-between">
        <Typography variant="body2" onClick={() => setVal(MIN)} sx={{ cursor: "pointer" }}>
          ₹{MIN}
        </Typography>
        <Typography variant="body2" onClick={() => setVal(MAX)} sx={{ cursor: "pointer" }}>
          ₹{MAX}
        </Typography>
      </div>

      <Typography variant="h6" className="font-semibold mt-4">Stops From Mwanza</Typography>
      <div className="px-2 py-1">
        {filterItems.slice(0, 2).map((item, index) => (
          <FilterCheckbox key={index} item={item} />
        ))}
      </div>

      <Typography variant="h6" className="font-semibold mt-4">Departure From Mwanza</Typography>
      <div className="flex gap-2 mt-2">
        {timeSlots.filter((slot) => slot.isDeparture).map((item, index) => (
          <TimeSlot
            key={index}
            icon={PiSunHorizon}
            label={item.time}
            isSelected={selectedTimeSlot.departure === item.time}
            onClick={() => handleTimeSlotClick(item.time, 'departure')}
          />
        ))}
      </div>

      <Typography variant="h6" className="font-semibold mt-4">Arrival at Dar es Salaam</Typography>
      <div className="flex gap-1 mt-2">
        {timeSlots.filter((slot) => slot.isArrival).map((item, index) => (
          <TimeSlot
            key={index}
            icon={PiSunHorizon}
            label={item.time}
            isSelected={selectedTimeSlot.arrival === item.time}
            onClick={() => handleTimeSlotClick(item.time, 'arrival')}
          />
        ))}
      </div>

      <Typography variant="h6" className="font-semibold mt-4 mb-3">Airlines</Typography>
      <div className="px-2 py-1.5">
        {airLines.map((item, index) => (
          <FilterCheckbox key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FlightSideNavbar;
