import React from "react";
import FlightNavbar from "../../../../components/flight-booking-nav/topNavbar";
import FlightSideNavbar from "../../../../components/flight-booking-nav/sideNavbar";
import FlightLogo from "/src/assets/bookingsSvg/flightLogo.png";
import Image from "next/image";
import { Typography } from "@mui/material";
import { flightDetails } from "../../../../utils";

const FlightSearch = () => {
  return (
    <div className="container scrollbar-hide mx-auto">
      <div className="sticky top-[84px] z-20">
        <FlightNavbar />
      </div>
      <div className="flight-background">
        <div className="pt-4 gap-10 flex">
          <div className="scrollbar w-[400px] h-[calc(100vh-163px)] overflow-auto p-2 bg-white  ml-2">
            <FlightSideNavbar />
          </div>
          <div className="w-full bg-gray-300 mr-2 flex flex-col gap-3 scrollbar h-[calc(100vh-163px)] overflow-auto">
            {flightDetails.map((item, index) => (
              <div key={index} className="p-2 bg-white">
                <div className="grid px-4 py-2 grid-cols-5">
                  <div className="flex gap-2">
                    <Image
                      src={FlightLogo}
                      width={50}
                      height={50}
                      alt="FlightLogo"
                    />
                    <div className="flex flex-col">
                      <Typography variant="h5" className="font-bold">
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-xs text-gray-400"
                      >
                        {item?.flightNumber}
                      </Typography>
                    </div>
                  </div>
                  <div className="text-center">
                    <Typography variant="h5" className="font-bold">
                      {item?.departureTime}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-xs text-gray-400"
                    >
                      {item?.departureFrom}
                    </Typography>
                  </div>
                  <div className="text-center flex flex-col justify-center gap-1 items-center">
                    <Typography variant="body2" className="">
                      {item?.totalTime}
                    </Typography>

                    {item?.stop ? (
                      <div className="relative">
                        <div className="py-0.5 bg-yellow-400 w-16 rounded-md"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gray-600 h-2.5 w-2.5 border-2 border-gray-200"></div>
                      </div>
                    ) : (
                      <div>
                        <div className="py-0.5 bg-green-400 w-16 rounded-md"></div>
                      </div>
                    )}

                    <Typography
                      variant="body2"
                      className="text-xs text-sky-500 font-semibold"
                    >
                      {item?.stop ? item?.stop : "Non Stop"}
                    </Typography>
                  </div>
                  <div className="text-center flex flex-col justify-center items-center">
                    <div className="flex gap-2 items-center">
                      <Typography variant="h5" className="font-bold">
                        {item?.arrivalTime}
                      </Typography>
                      {item?.days ? (
                        <Typography
                          variant="body2"
                          className="text-red-500 flex flex-col font-semibold text-left text-[11px]"
                        >
                          <span>+{item?.days}</span>
                          <span>DAY</span>
                        </Typography>
                      ) : (
                        ""
                      )}
                    </div>
                    <Typography
                      variant="body2"
                      className="text-xs text-gray-400"
                    >
                      {item?.arrivalTo}
                    </Typography>
                  </div>
                  <div className="flex justify-center ms-4 items-center gap-1">
                    <div className="text-center">
                      <Typography variant="h5" className="font-bold">
                        ₹{item?.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-xs text-gray-400"
                      >
                        per adult
                      </Typography>
                    </div>
                    <div className="px-3 py-1 rounded-3xl bg-blue-100 border-2 border-blue-600 cursor-pointer">
                      <Typography
                        variant="body"
                        className="text-md font-semibold text-blue-500"
                      >
                        VIEW PRICES
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="px-4 mt-4">
                  <div className="w-full bg-red-500 text-white py-2 text-center">
                    <Typography>Card offer or coupan code goes here</Typography>
                  </div>
                </div>
                <div className="flex justify-end mr-4">
                  <Typography className="text-blue-400 font-medium text-sm mt-2 cursor-pointer">
                    View Flight Details
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
