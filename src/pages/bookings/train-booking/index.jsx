import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

const TrainBooking = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="container mx-auto">
      <div className="w-full bg-cover train-bg">
        <div className="flex justify-center items-center h-[calc(100vh-85px)]">
          <div className="bg-white w-[1164px] p-2">
            <div className="flex justify-between">
              <div>
                <FormControl>
                  <RadioGroup
                    row
                    value={selectedValue}
                    onChange={handleChange}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="book"
                      control={<Radio />}
                      label="Book Train Ticket"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 15,
                        },
                        "& .MuiFormControlLabel-label": {
                          fontWeight: (theme) =>
                            selectedValue === "book" ? "bold" : "normal",
                          fontSize: 15,
                        },
                      }}
                    />
                    <FormControlLabel
                      value="PNR"
                      control={<Radio />}
                      label="Check PNR Status"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 15,
                        },
                        "& .MuiFormControlLabel-label": {
                          fontWeight: (theme) =>
                            selectedValue === "PNR" ? "bold" : "normal",
                          fontSize: 15,
                        },
                      }}
                    />
                    <FormControlLabel
                      value="status"
                      control={<Radio />}
                      label="Live Train Status"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 15,
                        },
                        "& .MuiFormControlLabel-label": {
                          fontWeight: (theme) =>
                            selectedValue === "status" ? "bold" : "normal",
                          fontSize: 15,
                        },
                      }}
                    />
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
                <Typography className="text-xs text-gray-500">FROM</Typography>
                <Typography variant="h4" className="font-bold">
                  Bokra
                </Typography>
                <Typography className="text-xs text-gray-500">
                  BKSC, Bokaro Steel City Railway Station
                </Typography>
              </div>
              <div className="col-span-2 border p-2">
                {" "}
                <Typography className="text-xs text-gray-500">TO</Typography>
                <Typography variant="h4" className="font-bold">
                  Howrah
                </Typography>
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
                  16<span className="text-xl font-normal">{`Jun'24`}</span>
                </Typography>
                <Typography className="text-xs text-gray-500">
                  Sunday
                </Typography>
              </div>
              <div className="border p-2">
                <select name="date" id="date" className="text-xs">
                  <option value="Travel Date" selected>
                    Travel Date
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
              <div className="text-4xl px-2 py-1 text-center text-white w-48 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
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
