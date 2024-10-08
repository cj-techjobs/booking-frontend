import React from 'react';
import TextField from '@mui/material/TextField';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Image from 'next/image';
import Icon1 from '/src/assets/bookingsSvg/icon1.svg';

const FlightBooking = () => {
  const DatePickerStyled = ({ label }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        placeholder=""
        format="DD MMM ddd, YYYY"
        label={label}
        slotProps={{ textField: { variant: 'filled' } }}
        sx={{
          '& .css-1bl45wc-MuiInputBase-root-MuiFilledInput-root::before': {
            borderBottom: 'none !important',
          },
          '& .css-1bl45wc-MuiInputBase-root-MuiFilledInput-root::after': {
            borderBottom: 'none !important',
          },
          '& .css-1bl45wc-MuiInputBase-root-MuiFilledInput-root': {
            backgroundColor: 'transparent !important',
          },
        }}
      />
    </LocalizationProvider>
  );

  const InputField = ({ icon: Icon, label, placeholder }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        p: 1,
        paddingBottom: 2,
        paddingTop: 2,
        borderRadius: '8px',
      }}
    >
      <Icon sx={{ mr: 1, color: '#9095A1' }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: '#9095A1', lineHeight: 1 }}
        >
          {label}
        </Typography>
        <TextField
          variant="standard"
          fullWidth
          InputProps={{
            disableUnderline: true,
            sx: {
              fontWeight: 'bold',
              fontSize: '1rem',
            },
          }}
          placeholder={placeholder}
        />
      </Box>
    </Box>
  );

  return (
    <div className="container mx-auto">
      <div className="w-full bg-cover flex justify-center items-center flight-bg">
        <div className="w-[380px] md:w-[450] mt-28">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 justify-evenly bg-white rounded-lg">
              <div className="text-center py-3">ONE WAY</div>
              <div className="text-center rounded-lg text-white bg-red-500 py-3">
                ROUND TRIP
              </div>
            </div>
            <div className="bg-white rounded-lg">
              <InputField icon={FlightTakeoffIcon} label="FROM" placeholder="Ranchi IXR" />
              <br />
              <InputField icon={FlightLandIcon} label="TO" placeholder="Mumbai IXR" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg py-1">
                <DatePickerStyled label="DEPARTURE DATE" />
              </div>
              <div className="bg-white rounded-lg py-1">
                <DatePickerStyled label="RETURN DATE" />
              </div>
            </div>
            <div className="bg-white flex gap-3 items-center py-2 rounded-lg">
              <AccountCircleRoundedIcon fontSize="small" className="ms-3 text-gray-400" />
              <div className="flex flex-col">
                <label htmlFor="option" className="text-[14px] text-gray-400">
                  TRAVELLER & CLASS
                </label>
                <select
                  name="guestsRooms"
                  id="options"
                  className="appearance-none outline-none text-sm"
                >
                  <option value="1">SELECT</option>
                  <option value="1">1 Eco</option>
                  <option value="2">1 Premium</option>
                  <option value="3">2 Eco, 1 Premium</option>
                  <option value="4">2 Eco, 2 Premium</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg bg-blue-300 cursor-pointer w-[363px] py-3 text-lg text-white text-center">
                SEARCH FLIGHTS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Image src={Icon1} width={206} height={206} alt="icon" />
      </div>
      <div className="text-center text-4xl mt-5">Book flights across world</div>
    </div>
  );
};

export default FlightBooking;
