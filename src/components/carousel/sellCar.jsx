import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import BuyRentButton from "../buttons/buyRentButton/buyRentButton";
import SubmitButton from "../buttons/submitButton/submitButton";

export default function SellCar({ modal }) {
  const [transmission, setTransmission] = useState("");
  const [formValues, setFormValues] = useState({
    brand: "",
    year: "",
    fuel: "",
    km: "",
    owner: "",
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Type", "Buy"); // Assuming default value "Buy"; adjust if needed
    Object.entries(formValues).forEach(([key, value]) => {
      localStorage.setItem(key.charAt(0).toUpperCase() + key.slice(1), value);
    });
    localStorage.setItem("Transmission", transmission);
    modal();
  };

  const getTransmissionClass = (type) => 
    `px-6 rounded-md text-xl py-1 border-2 cursor-pointer ${transmission === type ? "text-gray-900 border-gray-800" : "text-gray-400 border-gray-300"}`;

  return (
    <div className="p-4">
      <div className="text-center text-2xl mb-4">Enter car details</div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-2 mb-4">
          <BuyRentButton />
        </div>
        <div className="px-2 flex flex-col gap-3">
          <TextField
            name="brand"
            label="Brand*"
            variant="standard"
            className="w-full"
            value={formValues.brand}
            onChange={handleInputChange}
          />
          <TextField
            name="year"
            label="Year*"
            variant="standard"
            className="w-full"
            value={formValues.year}
            onChange={handleInputChange}
          />
          <TextField
            name="fuel"
            label="Fuel*"
            variant="standard"
            className="w-full"
            value={formValues.fuel}
            onChange={handleInputChange}
          />
          <div className="text-gray-500 text-lg">
            Transmission
            <div className="flex flex-row gap-10 justify-center mt-2">
              <div className={getTransmissionClass("Automatic")} onClick={() => setTransmission("Automatic")}>
                Automatic
              </div>
              <div className={getTransmissionClass("Manual")} onClick={() => setTransmission("Manual")}>
                Manual
              </div>
            </div>
          </div>
          <TextField
            name="km"
            label="K.M driven*"
            variant="standard"
            className="w-full"
            value={formValues.km}
            onChange={handleInputChange}
          />
          <TextField
            name="owner"
            label="No of Owners*"
            variant="standard"
            className="w-full"
            value={formValues.owner}
            onChange={handleInputChange}
          />
          <TextField
            name="title"
            label="Title of Ad*"
            variant="standard"
            className="w-full"
            value={formValues.title}
            onChange={handleInputChange}
          />
          <TextField
            name="description"
            label="Description*"
            multiline
            variant="standard"
            className="w-full"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </div>
        <SubmitButton className="w-full text-2xl mt-2" title="Next" click={handleSubmit} />
      </form>
    </div>
  );
}
