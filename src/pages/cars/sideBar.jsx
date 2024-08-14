import React, { useState } from "react";
import Image from "next/image";
//filter data from utils
import {
  carCategory,
  FilterList,
  color,
  manual,
  auto,
  seats,
  brand,
  kms,
  year,
  owner,
} from "../../utils";

//Radio button MUI for filter
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

//material UI components
import Slider from "@mui/material/Slider";

//price range filter
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

const SideBar = ({data}) => {
  const [isActive, setIsActive] = useState("Hatchback");
  const [isActiveTab, setIsActiveTab] = useState("Buy");

  const [yearValue, setYearValue] = useState("");
  const [ownerValue, setOwnerValue] = useState("");

  const handleYearChange = (event) => {
    setYearValue(event.target.value);
  };
  const handleOwnerChange = (event) => {
    setOwnerValue(event.target.value);
  };
  //filter states
  const [activeModal, setActiveModal] = useState(null);

  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  const handleFilterClick = (title) => {
    if (activeModal === title) {
      setActiveModal(null);
    } else {
      setActiveModal(title);
    }
  };

  return (
    <div>
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
              className={`py-2.5 px-1 cursor-pointer ${
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
        <div className="w-2/3 mt-4">
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
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
              {color?.map((item) => (
                <div key={item?.id} className="flex gap-2 mb-[21px]">
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
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
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
          {activeModal === "Body Type" && (
            <div className="ms-3">
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
              {carCategory?.map((item) => (
                <div key={item?.id} className="flex mb-2">
                  <input type="checkbox" value={item?.title} />
                  <div className="ms-2">{item?.title}</div>
                </div>
              ))}
            </div>
          )}
          {activeModal === "Seats" && (
            <div className="ms-3">
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
              {seats?.map((item) => (
                <div key={item?.id} className="flex mb-2">
                  <input type="checkbox" value={item?.type} />
                  <div className="ms-2">
                    {item?.type} {"("}
                    {item?.available}
                    {")"}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeModal === "Brands + Models" && (
            <div className="ms-3">
              <input
                type="search"
                name="Search Modal"
                placeholder="Search"
                className="py-2 border-2 outline-none rounded-lg w-full px-2"
              />
              <div className="text-xs text-gray-400 py-2">Top Brands</div>
              {brand?.map((item) => (
                <div key={item?.id} className="mt-2 mb-4 flex gap-2">
                  <input type="checkbox" value={item?.name} />
                  <div className="w-full">
                    <select name="modals" className="w-full" id="">
                      <option value={item?.name}>
                        {item?.name} {"("}
                        {item?.available}
                        {")"}
                      </option>
                      {item?.modals?.map((modal) => (
                        <option key={modal?.id} value={modal?.name}>
                          {modal?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeModal === "Kms Driven" && (
            <div className="ms-3">
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
              {kms?.map((item) => (
                <div key={item?.id} className="flex mb-4">
                  <input type="checkbox" value={item?.kms} />
                  <div className="ms-2">
                    {item?.kms} kms or less {"("}
                    {item?.available}
                    {")"}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeModal === "Year" && (
            <div className="ms-3">
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
              {year?.map((item) => (
                <div key={item?.id} className="flex mb-2">
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={yearValue}
                    onChange={handleYearChange}
                  >
                    <div className="flex items-center">
                      <FormControlLabel
                        type="radio"
                        control={<Radio />}
                        value={item.value}
                      />{" "}
                      <span className=" text-base mb-1">
                        {item?.year} & above {"("}
                        {item?.available}
                        {")"}
                      </span>
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>
          )}
          {activeModal === "Owner" && (
            <div className="ms-3">
              <div className="text-gray-400 mb-4 text-sm">
                SELECT <span>By</span>
              </div>
              {owner?.map((item) => (
                <div key={item?.id} className="flex mb-2">
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={ownerValue}
                    onChange={handleOwnerChange}
                  >
                    <div className="flex items-center">
                      <FormControlLabel
                        type="radio"
                        control={<Radio />}
                        value={item.value}
                      />{" "}
                      <span className=" text-base mb-1">
                        {item?.owner} & above {"("}
                        {item?.available}
                        {")"}
                      </span>
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
