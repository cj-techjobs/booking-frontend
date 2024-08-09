import React, { useState } from "react";
import TextField from '@mui/material/TextField';

export default function SellCar ({onClick}) {
    
    const [isActive, setIsActive] = useState('');
    const [isActiveTab, setIsActiveTab] = useState('Buy');
  return (
    <div className="p-4">
      <div className="text-center text-2xl mb-4">Enter car details</div>
      <div className="flex justify-center mt-2 mb-4">
        <div className="shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] items-center justify-center rounded-md flex w-fit cursor-pointer">
          <div className={`px-6 py-1 rounded-md ${isActiveTab === 'Buy' ? 'bg-red-500 text-white' : 'bg-[#FAFAFA] rounded-l-md'}`} onClick={() => setIsActiveTab('Buy')}>Buy</div>
          <div className={`px-6 py-1 rounded-md ${isActiveTab === 'Rent' ? 'bg-red-500 text-white' : 'bg-[#FAFAFA] rounded-r-md'}`} onClick={() => setIsActiveTab('Rent')} >Rent</div>
        </div>
      </div>
      <div className="px-2 flex flex-col gap-3">
      <TextField
          id="standard-multiline-flexible"
          label="Brand*"
          variant="standard"
          className="w-full"
          />
          <TextField
          id="standard-multiline-flexible"
          label="Year*"
          variant="standard"
          className="w-full"
          />
          <TextField
          id="standard-multiline-flexible"
          label="Fuel*"
          variant="standard"
          className="w-full"
          />
          <div className="text-gray-500 text-lg">
            Transmission
            <div className="flex flex-row gap-10 justify-center mt-2">
                <div className={`px-6 rounded-md text-xl py-1 border-2 cursor-pointer ${isActive === 'Automatic' ? 'text-gray-900 border-gray-800' : 'text-gray-400 border-gray-300'}`} onClick={() => setIsActive('Automatic')}>Automatic</div>
                <div className={`px-8 rounded-md text-xl py-1 border-2 text-gray-400 border-gray-300 cursor-pointer ${isActive === 'Manual' ? 'text-gray-900 border-gray-800' : 'text-gray-400 border-gray-300'}`} onClick={() => setIsActive('Manual')}>Manual</div>
            </div>
          </div>
          <TextField
          id="standard-multiline-flexible"
          label="K.M driven*"
          variant="standard"
          className="w-full"
          />
          <TextField
          id="standard-multiline-flexible"
          label="No of Owners*"
          variant="standard"
          className="w-full"
          />
          <TextField
          id="standard-multiline-flexible"
          label="Title of Ad*"
          variant="standard"
          className="w-full"
          />
          <TextField
          id="standard-multiline-flexible"
          label="Description*"
          multiline
          variant="standard"
          className="w-full"
          />
      </div>
      <div className="text-2xl font-bold mt-4 text-white rounded-xl bg-[#040A3F] w-full text-center py-2" onClick={onClick}>
        <button>
            Next
        </button>
      </div>
    </div>
  );
};

// export default SellCar;
