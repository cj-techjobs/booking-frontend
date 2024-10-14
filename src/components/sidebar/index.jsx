import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

//filter data from utils
import {
  carCategory,
  bikeFilterList,
  bikeCategory,
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
import BuyRentButton from "../buttons/buyRentButton/buyRentButton";
import { red } from "@mui/material/colors";

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

const Sidebar = () => {
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

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState(25000000);
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState(4000);

  const handleFromChange = (event) => {
    setPriceFrom(event.target.value);
    setAreaFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setPriceTo(event.target.value);
    setAreaTo(event.target.value);
  };

  const [selectAll, setSelectAll] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    property: {
      resiApart: false,
      indepHouse: false,
      resiLand: false,
      indepFloor: false,
      farmHouse: false,
      servApart: false,
    },
    bhk: {
      bhk: false,
      tbhk: false,
      thbhk: false,
      fbhk: false,
      fpbhk: false,
    },
    construction: {
      new: false,
      ongoing: false,
      completed: false,
    },
    amenities: {
      parking: false,
      power: false,
      lift: false,
      park: false,
      security: false,
      club: false,
      pool: false,
      gym: false,
      gas: false,
    },
    bathroom: {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    },
    furniture: {
      unFurnished: false,
      semiFurnished: false,
      furnished: false,
    },
  });

  const fullNames = {
    property: {
      resiApart: "Residential Apartment",
      indepHouse: "Independent House",
      resiLand: "Residential Land",
      indepFloor: "Independent Floor",
      farmHouse: "Farm House",
      servApart: "Serviced Apartment",
    },
    bhk: {
      bhk: "1 BHK",
      tbhk: "2 BHK",
      thbhk: "3 BHK",
      fbhk: "4 BHK",
      fpbhk: "5+ BHK",
    },
    construction: {
      new: "New Construction",
      ongoing: "Ongoing Construction",
      completed: "Completed Construction",
    },
    amenities: {
      parking: "Parking",
      power: "Power Backup",
      lift: "Lift",
      park: "Park",
      security: "Security Personnel",
      club: "Club House",
      pool: "Swimming Pool",
      gym: "Gymnasium",
      gas: "Gas Pipeline",
    },
    bathroom: {
      one: "1+",
      two: "2+",
      three: "3+",
      four: "4+",
      five: "5+",
    },
    furniture: {
      unFurnished: "Unfurnished",
      semiFurnished: "Semifurnished",
      furnished: "Furnished",
    },
  };

  const handleSelectAllChange = (event, category) => {
    const isChecked = event.target.checked;
    setCheckboxes((prevState) => ({
      ...prevState,
      [category]: Object.keys(prevState[category]).reduce((acc, key) => {
        acc[key] = isChecked;
        return acc;
      }, {}),
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const [category, key] = name.split("."); // 'category.key'
    setCheckboxes((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [key]: checked,
      },
    }));
  };

  const propertyFilterItem = [
    {
      id: "1",
      title: "Budget",
    },
    {
      id: "2",
      title: "Property Type",
    },
    {
      id: "3",
      title: "Bhk",
    },
    {
      id: "4",
      title: "Construction Status",
    },
    {
      id: "5",
      title: "Area",
    },
    {
      id: "6",
      title: "Amenities",
    },
    {
      id: "7",
      title: "Bathrooms",
    },
    {
      id: "8",
      title: "Furnishing status",
    },
  ];
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/cars" && (
        <div className="p-3">
          <div className="text-2xl sm:text-3xl md:text-4xl rounded-b-2xl h-[70px] sm:h-[100px] md:h-[114px] flex justify-center items-center bg-red-500 text-white text-centerr">
            Shop in Cars
          </div>

          <div className="mt-3 rounded-xl px-1 md:flex md:flex-row flex-wrap flex  shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-gray-200">
            {carCategory?.map((item) => (
              <div
                className={`py-1 px-1 rounded-xl cursor-pointer ${isActive === `${item?.title}`
                  ? "bg-[#181616] flex justify-center w-[50px] text-white"
                  : ""
                  }`}
                onClick={() => setIsActive(`${item?.title}`)}
                key={item?.id}
              >
                <div className="text-[10px] flex items-center flex-col">
                  <div className="flex w-10 justify-center">
                    <Image src={item?.image} height={20} width={35} alt="" />
                  </div>
                  <div className="flex flex-col text-center">
                    {item?.title.split(' ').map((word, index) => (
                      <span key={index}>{word}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <BuyRentButton />

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4">
            <div className="text-lg flex items-center justify-center gap-2">
              <IoMdArrowBack />
              Filter</div>
            <div className="px-3 py-1 rounded-2xl shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-[#F9F2F2] text-red-500 mt-2 sm:mt-0">
              Done
            </div>
          </div>
          <hr className="mt-2" />

          <div className="flex flex-col md:flex-row mt-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              {FilterList?.map((items) => (
                <div
                  key={items.id}
                  className={`py-3.5 px-1 cursor-pointer ${activeModal === `${items?.title}` ? "bg-[#F6F2F9] text-purple-600" : ""
                    }`}
                  onClick={() => handleFilterClick(items?.title)}
                >
                  {items.title}
                </div>
              ))}
            </div>

            <div className="w-full md:w-2/3">
              {activeModal === "Price Range" && (
               <div className="p-4 w-full md:w-[240px]">
               <div className="text-center py-2">₹{val}</div>
               <Slider
                 marks={marks}
                 step={10}
                 value={val}
                 min={MIN}
                 max={MAX}
                 onChange={handleChange}
                 sx={{
                   color: "rgb(239 68 68)", // Red color
                   height: 10, // Make the track thicker
                   "& .MuiSlider-track": {
                     border: "none",
                     height: 10, // Make the track thicker
                   },
                   "& .MuiSlider-rail": {
                     height: 10, // Make the rail thicker
                   },
                   "& .MuiSlider-thumb": {
                     width: 28, // Increase thumb size
                     height: 28, // Increase thumb size
                     backgroundColor: "#fff",
                     "&::before": {
                       boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                     },
                     "&:hover, &.Mui-focusVisible, &.Mui-active": {
                       boxShadow: "none",
                     },
                   },
                 }}
               />
             </div>
             
              )}

              {activeModal === "Color" && (
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  {color?.map((item) => (
                    <div key={item?.id} className="flex mb-2 items-center">
                      <div
                        className="h-6 w-16 rounded-md border"
                        style={{ backgroundColor: item?.color }}
                      />
                      <span className="ml-2 text-sm">
                        {item?.name} {"("} {item?.available} {")"}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "Transmission" && (
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  <div className="flex mb-4 items-center">
                    <input type="checkbox" value={"manual"} className="me-2" />
                    <div className="w-full">
                      <select
                        name="manual"
                        className="outline-none w-full"
                        id="manual"
                      >
                        <option value="Manual" selected>
                          Manual {"("}200{")"}
                        </option>
                        {manual?.map((items) => (
                          <option key={items?.id} value={items?.gear}>
                            {items?.gear} {"("} {items?.available} {")"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value={"automatic"}
                      className="me-2"
                    />
                    <div className="w-full">
                      <select
                        name="automatic"
                        className="outline-none w-full"
                        id="automatic"
                      >
                        <option value="Automatic" selected>
                          Automatic {"("}100{")"}
                        </option>
                        {auto?.map((items) => (
                          <option key={items?.id} value={items?.gear}>
                            {items?.gear} {"("} {items?.available} {")"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "Body Type" && (
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  {carCategory?.map((item) => (
                    <div key={item?.id} className="flex mb-2 items-center">
                      <input
                        type="checkbox"
                        value={item?.title}
                        className="me-2"
                      />
                      <div className="text-sm">{item?.title}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "Seats" && (
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  {seats?.map((item) => (
                    <div key={item?.id} className="flex mb-2 items-center">
                      <input
                        type="checkbox"
                        value={item?.type}
                        className="me-2"
                      />
                      <div className="text-sm">
                        {item?.type} {"("} {item?.available} {")"}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "Brands + Models" && (
                <div className="flex flex-col ms-3">
                  <div className="relative w-full ">
                    <input
                      type="search"
                      name="Search Modal"
                      placeholder="Search"
                      className="py-2 border-2 outline-none rounded-lg w-full px-2 pr-10 mb-4"
                    />
                    <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-400 py-2">Top Brands</div>
                  {brand?.map((item) => (
                    <div
                      key={item?.id}
                      className="mt-2 mb-4 flex gap-2 items-center"
                    >
                      <input
                        type="checkbox"
                        value={item?.name}
                        className="me-2"
                      />
                      <div className="w-full">
                        <select name="modals" className="w-full" id="">
                          <option value={item?.name}>
                            {item?.name} {"("} {item?.available} {")"}
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
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  {kms?.map((item) => (
                    <div key={item?.id} className="flex mb-4 items-center">
                      <input
                        type="checkbox"
                        value={item?.kms}
                        className="me-2"
                      />
                      <div className="text-sm">
                        {item?.kms} kms or less {"("} {item?.available} {")"}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "Year" && (
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  {year?.map((item) => (
                    <div key={item?.id} className="flex mb-2 items-center">
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
                          />
                          <span className="text-base">
                            {item?.year} & above {"("} {item?.available} {")"}
                          </span>
                        </div>
                      </RadioGroup>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "Owner" && (
                <div className="flex flex-col ms-3">
                  <div className="text-gray-400 mb-4 text-sm">
                    SELECT <span>By</span>
                  </div>
                  {owner?.map((item) => (
                    <div key={item?.id} className="flex mb-2 items-center">
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
                          />
                          <span className="text-base">
                            {item?.owner} & above {"("} {item?.available} {")"}
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
      )}
      {pathname === "/property" && (
        <div className="w-full p-4">
          <div className="text-xl md:text-2xl lg:text-4xl rounded-b-3xl h-[114px] flex justify-center shadow-[0_5px_2px_0_rgba(253,0,0,0.25)] items-center bg-[#F0F0F0] text-center">
            Properties
          </div>
          <BuyRentButton />
          <div className="flex flex-col md:flex-row mt-6">
            <div className="w-full md:w-1/3 border-r border-t md:border-r-0 md:border-t-0 md:border-r border-gray-300">
              {propertyFilterItem?.map((items) => (
                <div
                  className="py-6 flex items-center cursor-pointer"
                  onClick={() => {
                    handleFilterClick(items?.title);
                  }}
                  key={items?.id}
                >
                  <div
                    className={`py-5 me-2 w-2 ${activeModal === `${items?.title}` ? "bg-red-500" : ""
                      }`}
                  ></div>
                  {items?.title}
                </div>
              ))}
            </div>
            <div className="w-full md:w-2/3">
              {activeModal === "Budget" && (
                <div className="p-3 border border-gray-300">
                  <div className="mb-4 text-lg">Budget Range</div>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1">
                      <select
                        name="from"
                        id="from"
                        value={priceFrom}
                        onChange={handleFromChange}
                        className="py-2 outline-none border rounded-md w-full"
                      >
                        <option value="0">0</option>
                        <option value="100000">100000</option>
                        <option value="200000">200000</option>
                        <option value="1200000">1200000</option>
                        <option value="25000000">25000000</option>
                      </select>
                    </div>
                    <span className="md:mx-2">to</span>
                    <div className="flex-1">
                      <select
                        name="to"
                        id="to"
                        value={priceTo}
                        onChange={handleToChange}
                        className="py-2 outline-none border px-1 rounded-full w-full"
                      >
                        <option value="100000">100000</option>
                        <option value="200000">200000</option>
                        <option value="1200000">1200000</option>
                        <option value="25000000">100 Cr+</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {activeModal === "Property Type" && (
                <div className="p-3 border border-gray-300 flex flex-col gap-6">
                  {Object.keys(checkboxes.property).map((key) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`property.${key}`}
                        name={`property.${key}`}
                        checked={checkboxes.property[key]}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={`property.${key}`}>
                        {fullNames.property[key]}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      checked={selectAll}
                      onChange={(event) =>
                        handleSelectAllChange(event, "property")
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor="selectAll"
                      className="text-blue-600 cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              )}
              {activeModal === "Bhk" && (
                <div className="p-3 border border-gray-300 flex flex-col gap-6">
                  {Object.keys(checkboxes.bhk).map((key) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        name={`bhk.${key}`}
                        id={`bhk.${key}`}
                        checked={checkboxes.bhk[key]}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={`bhk.${key}`}>{fullNames.bhk[key]}</label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      checked={selectAll}
                      onChange={(event) => handleSelectAllChange(event, "bhk")}
                      className="mr-2"
                    />
                    <label
                      htmlFor="selectAll"
                      className="text-blue-600 cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              )}
              {activeModal === "Construction Status" && (
                <div className="p-3 border border-gray-300 flex flex-col gap-6">
                  {Object.keys(checkboxes.construction).map((key) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`construction.${key}`}
                        name={`construction.${key}`}
                        checked={checkboxes.construction[key]}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={`construction.${key}`}>
                        {fullNames.construction[key]}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      checked={selectAll}
                      onChange={(event) =>
                        handleSelectAllChange(event, "construction")
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor="selectAll"
                      className="text-blue-600 cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              )}
              {activeModal === "Area" && (
                <div className="p-3 border border-gray-300">
                  <div className="flex items-center justify-between mb-4 text-lg">
                    <div>Area</div>
                    <div className="text-sm">
                      <select name="areaType" className="px-1" id="areaType">
                        <option value="Sq.ft">Sq.ft</option>
                        <option value="Sq.ft">Sq.ft</option>
                        <option value="Sq.ft">Sq.ft</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <div className="flex-1">
                      <select
                        name="from"
                        id="from"
                        value={areaFrom}
                        onChange={handleFromChange}
                        className="py-2 outline-none border rounded-md w-full"
                      >
                        <option value="0">0 Sq. ft.</option>
                        <option value="500">500 Sq.ft.</option>
                        <option value="700">700 Sq.ft.</option>
                        <option value="900">900 Sq.ft.</option>
                        <option value="1000">1000 Sq.ft.</option>
                      </select>
                    </div>
                    <span className="md:mx-2">-</span>
                    <div className="flex-1">
                      <select
                        name="to"
                        id="to"
                        value={areaTo}
                        onChange={handleToChange}
                        className="py-2 outline-none border-black border rounded-full w-full"
                      >
                        <option value="1100">1100 Sq.ft.</option>
                        <option value="2000">2000 Sq.ft.</option>
                        <option value="3000">3000 Sq.ft.</option>
                        <option value="4000">4000+ Sq.ft.</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {activeModal === "Amenities" && (
                <div className="p-3 border border-gray-300 flex flex-col gap-6">
                  {Object.keys(checkboxes.amenities).map((key) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        name={`amenities.${key}`}
                        id={`amenities.${key}`}
                        checked={checkboxes.amenities[key]}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={`amenities.${key}`}>
                        {fullNames.amenities[key]}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      checked={selectAll}
                      onChange={(event) =>
                        handleSelectAllChange(event, "amenities")
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor="selectAll"
                      className="text-blue-600 cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              )}
              {activeModal === "Bathrooms" && (
                <div className="p-3 border border-gray-300 flex flex-col gap-6">
                  {Object.keys(checkboxes.bathroom).map((key) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        name={`bathroom.${key}`}
                        id={`bathroom.${key}`}
                        checked={checkboxes.bathroom[key]}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={`bathroom.${key}`}>
                        {fullNames.bathroom[key]}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      checked={selectAll}
                      onChange={(event) =>
                        handleSelectAllChange(event, "bathroom")
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor="selectAll"
                      className="text-blue-600 cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              )}
              {activeModal === "Furnishing status" && (
                <div className="p-3 border border-gray-300 flex flex-col gap-6">
                  {Object.keys(checkboxes.furniture).map((key) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        name={`furniture.${key}`}
                        id={`furniture.${key}`}
                        checked={checkboxes.furniture[key]}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={`furniture.${key}`}>
                        {fullNames.furniture[key]}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      checked={selectAll}
                      onChange={(event) =>
                        handleSelectAllChange(event, "furniture")
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor="selectAll"
                      className="text-blue-600 cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {pathname === "/bikes" && (
        <div className="">
          <div className="text-2xl sm:text-3xl md:text-4xl rounded-b-2xl h-[80px] sm:h-[100px] md:h-[114px] flex justify-center items-center bg-red-500 text-white text-center">
            Shop in Bikes
          </div>

          <div className="mt-3 rounded-xl ps-2 pe-2 justify-between shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] bg-gray-200 md:flex md:flex-row flex flex-wrap">
            {bikeCategory?.map((item) => (
              <div
                className={`py-5 rounded-xl cursor-pointer ${isActive === `${item?.title}`
                  ? "bg-[#181616] text-center flex justify-center w-[65px] text-white"
                  : ""
                  }`}
                onClick={() => {
                  setIsActive(`${item?.title}`);
                }}
                key={item?.id}
              >
                <div className="text-[10px]  w-12">
                  <div className="flex justify-center">
                    <Image src={item?.image} height={10} width={30} alt="" />
                  </div>
                  <div className="flex text-center justify-around">
                    {item?.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <BuyRentButton />
          </div>

          <div className="mt-4 sm:mt-5 flex flex-col gap-4 ">
            {bikeFilterList?.map((items) => (
              <div
                key={items?.id}
                className={`py-2 px-3 rounded-md cursor-pointer ${activeModal === `${items?.title}` ? "bg-[#F6F2F9]" : ""
                  }`}
                onClick={() => handleFilterClick(items?.title)}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={items?.image}
                    alt="brand"
                    height={40}
                    width={45}
                  />
                  <span className="text-sm sm:text-base">{items?.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
