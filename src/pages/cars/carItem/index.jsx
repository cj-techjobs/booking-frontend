import Image from "next/image";
import React from "react";

//car Image
import carImage from "/src/assets/carsSvg/baleno.png";
import roundView from "/src/assets/carsSvg/360View.png";
import carLoading from "/src/assets/carsSvg/loadingCar.png";
import fullImage from "/src/assets/carsSvg/fullImage.png";

//material icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

//car specificaiton data
import { carSpecification, carOverview } from "../../../utils";


const CarItem = () => {
  return (
    <div className="container mx-auto mt-4 bg-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="mb-7">
            <Image src={carImage} height={298} width={544} alt="" />
          </div>
          <div className="w-[527px]">
            <div className="border rounded-md border-gray-200 p-2 mb-2">
              <div className="flex items-center justify-center gap-3">
                <Image src={roundView} height={98} width={155} alt="" />
                <Image src={carLoading} height={98} width={155} alt="" />
                <Image src={fullImage} height={98} width={155} alt="" />
              </div>
              <div className="text-3xl w-4/5 mt-3">
                2022 Maruti Suzuki Baleno Zeta AMT Petrol
              </div>
              <div className="mt-4 gap-1 flex flex-col">
                <div className="text-base font-medium">
                  10K km : Petrol : Automatic
                </div>
                <div className="text-xs">
                  <HomeRoundedIcon className="text-gray-400" fontSize="small" />{" "}
                  Home Test Drive : Available
                </div>
                <div className="text-xs">
                  <LocationOnRoundedIcon
                    className="text-gray-400"
                    fontSize="small"
                  />{" "}
                  Deoghar, Jharkhand
                </div>
                <div className="text-xs ms-6">
                  <span className="text-purple-400">Assured</span> know more{" "}
                </div>
              </div>
              <div className="flex items-end justify-end z-20">
                <div className="text-red-500 text-2xl cursor-pointer px-12 bg-white py-2 rounded-xl w-fit shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                  Bid Now
                </div>
              </div>
              <div className="border rounded-md border-gray-200 -mt-2 p-2">
                <div className="text-3xl px-4">Price</div>
                <div className="flex items-center justify-between px-4">
                  <div className="w-2/3">
                    Includes RC transfer, insurance, fixes, upgrades & more
                  </div>
                  <div className="text-red-500 text-2xl">₹3,50,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-200 rounded-lg p-2 mb-4">
            <div className="text-2xl mb-2">Car Overview</div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-xs">Make Year</span>
                  Nov 2022
                </div>
                <div className="flex flex-col col-span-2 text-lg">
                  <span className="text-gray-400 text-xs">Reg. Year</span>
                  Nov 2022
                </div>
              </div>
              <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-xs">Fuel</span>
                  Petrol
                </div>
                <div className="flex flex-col col-span-2 text-lg">
                  <span className="text-gray-400 text-xs">Km driven</span>
                  10K km
                </div>
              </div>
              <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-xs">Transmission</span>
                  Automatic {"("}AMT{")"} @
                </div>
                <div className="flex flex-col col-span-2 text-lg">
                  <span className="text-gray-400 text-xs">
                    No. of Owner{"("}s{")"}
                  </span>
                  1st Owner
                </div>
              </div>
              <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-xs">
                    Insurance Validity
                  </span>
                  Nov 2024
                </div>
                <div className="flex flex-col col-span-2 text-lg">
                  <span className="text-gray-400 text-xs">Insurance Type</span>
                  Comprehensive
                </div>
              </div>
              <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-xs">RTO</span>
                  MH47
                </div>
                <div className="flex flex-col col-span-2 text-lg">
                  <span className="text-gray-400 text-xs">Car Location</span>
                  Deoghar,Jharkhand
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-2">
            <div className="text-2xl mb-2">Car Specifications</div>
            <div className="flex flex-col">
              {carSpecification?.map((items) => (
                <div key={items?.id} className="flex border border-gray-200 rounded-lg p-1">
                <Image src={items?.icon} alt="milage" className="me-2"/>
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-xs">
                    {items?.title}
                  </span>
                  {items?.data}
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
