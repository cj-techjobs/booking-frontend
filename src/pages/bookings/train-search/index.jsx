import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {
  FormControlLabel,
  FormControl,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TrainBooking = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const CustomTextField = styled(TextField)({
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#6B7280 !important",
    },
    "& .MuiInputBase-input": {
      color: "black",
      fontWeight: "bold",
      fontSize: "20px",
      padding: "0",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none !important",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important",
    },
  });

  const getStyles = (selectedValue, value) => ({
    "& .MuiSvgIcon-root": {
      fontSize: 15,
      marginLeft: 1,
    },
    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root": {
      padding: 0,
    },
    "& .MuiFormControlLabel-label": {
      fontWeight: selectedValue === value ? "bold" : "normal",
      backgroundColor: selectedValue === value ? "#bae6fd" : "transparent",
      padding: selectedValue === value ? "2px 8px" : "0",
      borderRadius: selectedValue === value ? "9999px" : "0",
      fontSize: 13,
      marginLeft: 1,
    },
  });

  const CustomAutocomplete = styled(Autocomplete)({
    "& .MuiAutocomplete-endAdornment": {
      display: "none",
    },
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="container mx-auto">
      <div className="w-full bg-cover train-bg">
        <div className="flex justify-center items-center h-[calc(100vh-85px)]">
          <div className="bg-white w-[750px] lg:w-[1000px] xl:w-[1164px] p-2">
            <div className="flex justify-between items-center">
              <div>
                <FormControl>
                  <RadioGroup
                    row
                    value={selectedValue}
                    onChange={handleChange}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    {["book", "PNR", "status"].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value}
                        control={<Radio />}
                        label={
                          value === "book"
                            ? "Book Train Ticket"
                            : value === "PNR"
                            ? "Check PNR Status"
                            : "Live Train Status"
                        }
                        sx={getStyles(selectedValue, value)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="flex flex-col items-center">
                <Typography className="text-xs">
                  Train Ticket Booking
                </Typography>
                <Typography className="text-xs">
                  IRCTC Authorized e-ticketing
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-2 border p-2">
                <CustomAutocomplete
                  id="standard-basic"
                  options={options}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      label="FROM"
                      variant="standard"
                    />
                  )}
                />
                <Typography className="text-xs text-gray-500">
                  BKSC, Bokaro Steel City Railway Station
                </Typography>
              </div>
              <div className="col-span-2 border p-2">
                {" "}
                <CustomAutocomplete
                  id="standard-basic"
                  options={options}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      label="TO"
                      variant="standard"
                    />
                  )}
                />
                <Typography className="text-xs text-gray-500">
                  HWH, Kolkata - All Stations
                </Typography>
              </div>
              <div className="border p-2">
                <select name="date" id="date" className="text-xs">
                  <option value="Travel Date" selected>
                    Travel Date
                  </option>
                </select>
                <Typography className="font-bold" variant="h4">
                  16<span className="text-xl font-normal"> Jun{"'"}24</span>
                </Typography>
                <Typography className="text-xs text-gray-500">
                  Sunday
                </Typography>
              </div>
              <div className="border p-2">
                <select name="date" id="date" className="text-xs">
                  <option value="Class" selected>
                    Class
                  </option>
                </select>
                <Typography className="font-bold" variant="h4">
                  ALL
                </Typography>
                <Typography className="text-xs text-gray-500">
                  All Class
                </Typography>
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <div className="text-4xl px-12 cursor-pointer py-1 text-center text-white  rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;
