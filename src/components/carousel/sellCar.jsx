import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Description } from "@mui/icons-material";
import BuyRentButton from "../buttons/buyRentButton/buyRentButton";
import SubmitButton from "../buttons/submitButton/submitButton";

export default function SellCar({ modal }) {
  const [isActive, setIsActive] = useState("");
  const [isActiveTab, setIsActiveTab] = useState("Buy");

  const [formValue, setFormValues] = useState(
    {
      brand: "",
      year: "",
      fuel: "",
      km: "",
      owner: "",
      title: "",
      description: "",
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Type", isActiveTab);
    localStorage.setItem("Brand", formValue?.brand);
    localStorage.setItem("Year", formValue?.year);
    localStorage.setItem("Fuel", formValue?.fuel);
    localStorage.setItem("Transmission", isActive);
    localStorage.setItem("Km", formValue?.km);
    localStorage.setItem("Owner", formValue?.owner);
    localStorage.setItem("Title", formValue?.title);
    localStorage.setItem("Description", formValue?.description);
    modal();
  };

  console.log("🚀 ~ SellCar ~ formValue:", formValue)
  return (
    <div className="p-4">
      <div className="text-center text-2xl mb-4">Enter car details</div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-2 mb-4">
          <BuyRentButton />
        </div>
        <div className="px-2 flex flex-col gap-3">
          <TextField
            id="standard-multiline-flexible"
            label="Brand*"
            variant="standard"
            className="w-full"
            value={formValue?.brand}
            onChange={(e) => setFormValues((prev)=> ({...prev, brand:e.target.value}))}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Year*"
            variant="standard"
            value={formValue?.year}
            onChange={(e) => setFormValues((prev)=> ({...prev, year:e.target.value}))}
            className="w-full"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Fuel*"
            variant="standard"
            value={formValue?.fuel}
            onChange={(e) => setFormValues((prev)=> ({...prev, fuel:e.target.value}))}
            className="w-full"
          />
          <div className="text-gray-500 text-lg">
            Transmission
            <div className="flex flex-row gap-10 justify-center mt-2">
              <div
                className={`px-6 rounded-md text-xl py-1 border-2 cursor-pointer ${
                  isActive === "Automatic"
                    ? "text-gray-900 border-gray-800"
                    : "text-gray-400 border-gray-300"
                }`}
                onClick={() => setIsActive("Automatic")}
              >
                Automatic
              </div>
              <div
                className={`px-8 rounded-md text-xl py-1 border-2 text-gray-400 border-gray-300 cursor-pointer ${
                  isActive === "Manual"
                    ? "text-gray-900 border-gray-800"
                    : "text-gray-400 border-gray-300"
                }`}
                onClick={() => setIsActive("Manual")}
              >
                Manual
              </div>
            </div>
          </div>
          <TextField
            id="standard-multiline-flexible"
            label="K.M driven*"
            variant="standard"
            value={formValue?.km}
            onChange={(e) => setFormValues((prev)=> ({...prev, km:e.target.value}))}
            className="w-full"
          />
          <TextField
            id="standard-multiline-flexible"
            label="No of Owners*"
            variant="standard"
            value={formValue?.owner}
            onChange={(e) => setFormValues((prev)=> ({...prev, owner:e.target.value}))}
            className="w-full"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Title of Ad*"
            variant="standard"
            value={formValue?.title}
            onChange={(e) => setFormValues((prev)=> ({...prev, title:e.target.value}))}
            className="w-full"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Description*"
            multiline
            variant="standard"
            value={formValue?.description}
            onChange={(e) => setFormValues((prev)=> ({...prev, description:e.target.value}))}
            className="w-full"
          />
        </div>
        <SubmitButton className={'w-full text-2xl mt-2'} title={'Next'} click={handleSubmit}/>
      </form>
    </div>
  );
}

// export default SellCar;
