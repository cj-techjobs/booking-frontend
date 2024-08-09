import React, { useState } from "react";
import hatchback from "/src/assets/carsSvg/hatchback.svg";
import lsedan from "/src/assets/carsSvg/lsedan.svg";
import lsuv from "/src/assets/carsSvg/lsuv.svg";
import mpv from "/src/assets/carsSvg/mpv.svg";
import sedan from "/src/assets/carsSvg/sedan.svg";
import suv from "/src/assets/carsSvg/suv.svg";
import car from "/src/assets/carsSvg/i10.svg"
import Image from "next/image";

const Car = () => {
  const [isActive, setIsActive] = useState({});
  const [isActiveFilter, setIsActiveFilter] =useState({})
  const [isActiveTab, setIsActiveTab] = useState("Buy");

  const carCategory = [
    {
      id: "1",
      title: "Hatchback",
      image: hatchback,
    },
    {
      id: "2",
      title: "Sedan",
      image: sedan,
    },
    {
      id: "3",
      title: "SUV",
      image: suv,
    },
    {
      id: "4",
      title: "MPV",
      image: mpv,
    },
    {
      id: "5",
      title: "Luxury Sedan",
      image: lsedan,
    },
    {
      id: "6",
      title: "Luxury SUV",
      image: lsuv,
    },
  ];
  const FilterList = [
    {
      id: "1",
      title: "Price Range",
    },
    {
      id: "2",
      title: "Brands + Models",
    },
    {
      id: "3",
      title: "Year",
    },
    {
      id: "4",
      title: "Kms Driven",
    },
    {
      id: "5",
      title: "Fuel Type",
    },
    {
      id: "6",
      title: "Body Type",
    },
    {
      id: "7",
      title: "Transmission",
    },
    {
      id: "8",
      title: "Color",
    },
    {
      id: "9",
      title: "Features",
    },
    {
      id: "10",
      title: "Seats",
    },
    {
      id: "11",
      title: "Owner",
    },
  ];
  return (
    <div className="flex">
      <div className="w-[550px]">
        <div className="text-4xl rounded-b-lg h-[114px] flex justify-center text-white items-center bg-red-500 text-center">
          Shop in Cars
        </div>
        <div className="mt-3 rounded-xl ps-2 pe-2 justify-between shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-gray-200 flex">
          {carCategory?.map((item) => (
            <div
              className={`py-5 rounded-xl cursor-pointer ${
                isActive === `${item?.title}`
                  ? "bg-[#181616] w-[80px] text-white"
                  : ""
              }`}
              onClick={() => {
                setIsActive(`${item?.title}`);
              }}
            >
              <div key={item?.id} className="text-xs">
                <div className="flex justify-center">
                  <Image src={item?.image} alt="" />
                </div>
                <div className="flex justify-around">{item?.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] items-center justify-center rounded-md flex w-fit cursor-pointer ms-2 mt-3">
          <div
            className={`px-6 py-1 rounded-md ${
              isActiveTab === "Buy"
                ? "bg-red-500 text-white"
                : "bg-[#FAFAFA] rounded-l-md"
            }`}
            onClick={() => setIsActiveTab("Buy")}
          >
            Buy
          </div>
          <div
            className={`px-6 py-1 rounded-md ${
              isActiveTab === "Rent"
                ? "bg-red-500 text-white"
                : "bg-[#FAFAFA] rounded-r-md"
            }`}
            onClick={() => setIsActiveTab("Rent")}
          >
            Rent
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 px-4">
          <div>Filter</div>
          <div className="px-3 py-1 rounded-2xl shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-[#F9F2F2] text-red-500">
            Apply
          </div>
        </div>
        <div>
          <div className="ms-2 w-[150px]">
            {FilterList?.map((items) => (
              <div
                key={items.id}
                className={`py-3 px-1 cursor-pointer ${
                    isActiveFilter === `${items?.title}`
                    ? "bg-[#F6F2F9]"
                    : ""
                }`}
                onClick={() => {
                    setIsActiveFilter(`${items?.title}`);
                  }}
              >
                {items.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-12 ps-12 pe-12 w-full">
        <div className="grid grid-cols-4 gap-10">
            {FilterList?.map((items) => (
                <div key={items.id} className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
                    <Image src={car} width={400} alt=""/>
                    {/* {items.title} */}
                    <div className="flex flex-col">
                    <span className="ms-4">Hyundai grand i10</span>
                    <span className="ms-4 mt-2 text-red-600">₹3,00,000</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Car;
