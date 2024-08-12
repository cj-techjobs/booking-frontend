import React, { useState } from "react";

//navigation bar images
import hatchback from "/src/assets/carsSvg/hatchback.svg";
import lsedan from "/src/assets/carsSvg/lsedan.svg";
import lsuv from "/src/assets/carsSvg/lsuv.svg";
import mpv from "/src/assets/carsSvg/mpv.svg";
import sedan from "/src/assets/carsSvg/sedan.svg";
import suv from "/src/assets/carsSvg/suv.svg";
import car from "/src/assets/carsSvg/i10.svg";

//main page car images
import Image from "next/image";

//material UI components
import Slider from "@mui/material/Slider";

const MAX = 1000000;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const Car = () => {
  const [isActive, setIsActive] = useState("Hatchback");
  const [isActiveTab, setIsActiveTab] = useState("Buy");

  //filter states
  const [activeModal, setActiveModal] = useState(null);

  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  //car list
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

  //filter list
  const FilterList = [
    {
      id: "1",
      title: "Price Range",
    },
    {
      id: "2",
      title: "Brands + Models",
      visible: "false",
    },
    {
      id: "3",
      title: "Year",
      visible: "false",
    },
    {
      id: "4",
      title: "Kms Driven",
      visible: "false",
    },
    {
      id: "5",
      title: "Fuel Type",
      visible: "false",
    },
    {
      id: "6",
      title: "Body Type",
      visible: "false",
    },
    {
      id: "7",
      title: "Transmission",
      isVisible: "false",
    },
    {
      id: "8",
      title: "Color",
    },
    {
      id: "9",
      title: "Features",
      visible: "false",
    },
    {
      id: "10",
      title: "Seats",
      visible: "false",
    },
    {
      id: "11",
      title: "Owner",
      visible: "false",
    },
  ];

  //car color list
  const color = [
    { id: 1, available: "20", name: "Red", color: "#ff0000" },
    { id: 2, available: "22", name: "Green", color: "#008000" },
    { id: 3, available: "222", name: "Blue", color: "#0000ff" },
    { id: 4, available: "24", name: "Yellow", color: "#ffff00" },
    { id: 5, available: "1", name: "Pink", color: "#ff00ff" },
    { id: 6, available: "30", name: "Cyan", color: "#00ffff" },
    { id: 7, available: "50", name: "Black", color: "#000" },
    { id: 8, available: "98", name: "White", color: "#fff" },
    { id: 9, available: "2", name: "Orange", color: "#FFA500" },
    { id: 10, available: "26", name: "Lime Green", color: "#89f336" },
    { id: 11, available: "12", name: "Silver", color: "#C0C0C0" },
    { id: 12, available: "42", name: "Violet", color: "#7F00FF" },
  ];

  //transmisson options
  const manual = [
    {
      id: "1",
      gear: "4 Gears",
      available: "50",
    },
    {
      id: "2",
      gear: "5 Gears",
      available: "50",
    },
    {
      id: "3",
      gear: "6 Gears",
      available: "50",
    },
    {
      id: "4",
      gear: "7 Gears",
      available: "50",
    },
  ];
  const auto = [
    {
      id: "1",
      gear: "DCT",
      available: "50",
    },
    {
      id: "2",
      gear: "AMT",
      available: "50",
    },
  ];


  const handleFilterClick = (title) => {
    if (activeModal === title) {
      setActiveModal(null);
    } else {
      setActiveModal(title);
    }
  };
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
              key={item?.id}
            >
              <div className="text-xs">
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
        <div className="flex ">
          <div className="ms-2 w-1/3">
            {FilterList?.map((items) => (
              <div
                key={items.id}
                className={`py-3 px-1 cursor-pointer ${
                  activeModal === `${items?.title}` ? "bg-[#F6F2F9]" : ""
                }`}
                onClick={() => {
                  handleFilterClick(items?.title);
                }}
              >
                {items.title}
              </div>
            ))}
          </div>
          <div className="w-2/3">
            <div className="text-gray-400 mb-4 text-sm">
              SELECT <span>By</span>
            </div>
            {activeModal === "Price Range" && (
              <div className="p-4 w-[240px]">
                <div className="text-center py-2">{val}</div>
                <Slider
                  marks={marks}
                  step={10}
                  value={val}
                  min={MIN}
                  max={MAX}
                  onChange={handleChange}
                />
              </div>
            )}
            {activeModal === "Color" && (
              <div className="ms-3">
                {color?.map((item) => (
                  <div key={item?.id} className="flex gap-4 mb-[21px]">
                    <div
                      className="h-[26px] w-[60px] rounded-md border"
                      style={{ backgroundColor: item?.color }}
                    />
                    <span>
                      {item?.name} {"("}
                      {item?.available}
                      {")"}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {activeModal === "Transmission" && (
              <div className="ms-3">
                <div className="flex mb-10">
                  <input type="checkbox" value={"manual"} className="me-2" />
                  <div className="flex justify-between w-full">
                    <select
                      name="manual"
                      className="outline-none w-full"
                      id="manual"
                    >
                      <option value="Manual" selected>
                        Manual{"("}200{")"}
                      </option>
                      {manual?.map((items) => (
                        <option key={items?.id} value={items?.gear}>
                          {items?.gear} {"("}
                          {items?.available}
                          {")"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <input type="checkbox" value={"automatic"} className="me-2" />
                  <div className="flex justify-between w-full">
                  <select
                      name="manual"
                      className="outline-none w-full"
                      id="manual"
                    >
                      <option value="Manual" selected>
                        Automatic{"("}100{")"}
                      </option>
                      {auto?.map((items) => (
                        <option key={items?.id} value={items?.gear}>
                          {items?.gear} {"("}
                          {items?.available}
                          {")"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-12 ps-12 pe-12 w-full">
        <div className="grid grid-cols-4 gap-10">
          {FilterList?.map((items) => (
            <div
              key={items.id}
              className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]"
            >
              <Image src={car} width={400} alt="" />
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
