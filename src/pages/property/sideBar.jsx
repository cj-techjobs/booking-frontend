import React, { useState } from "react";

const SideBar = () => {

    const [isActiveTab, setIsActiveTab] = useState("Buy");
    const [activeModal, setActiveModal] = useState(null);
  
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
  
    const handleFilterClick = (title) => {
      if (activeModal === title) {
        setActiveModal(null);
      } else {
        setActiveModal(title);
      }
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

  return (
    <div>
      <div className="text-5xl rounded-b-3xl h-[114px] flex justify-center shadow-[0_5px_2px_0_rgba(253,0,0,0.25)] items-center bg-[#F0F0F0] text-center">
        Properties
      </div>
      <div className="shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] items-center justify-center rounded-md flex w-fit cursor-pointer ms-2 mt-4">
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
      <div className="flex">
        <div className="mt-5 w-1/3 border-r border-t">
          {propertyFilterItem?.map((items) => (
            <div
              className="py-5 flex items-center cursor-pointer"
              onClick={() => {
                handleFilterClick(items?.title);
              }}
              key={items?.id}
            >
              <div
                className={`py-5 me-2 w-2 ${
                  activeModal === `${items?.title}` ? "bg-red-500" : ""
                }`}
              ></div>
              {items?.title}
            </div>
          ))}
        </div>
        <div className="mt-5 w-2/3">
          {activeModal === "Budget" && (
            <div className="p-3 border">
              <div className="mb-4">Budget Range</div>
              <div className="flex items-center gap-4">
                <div>
                  <select
                    name="from"
                    id="from"
                    value={priceFrom}
                    onChange={handleFromChange}
                    className="py-2 outline-none border rounded-md "
                  >
                    <option value="0" selected>
                      0
                    </option>
                    <option value="100000">100000</option>
                    <option value="200000">200000</option>
                    <option value="1200000">1200000</option>
                    <option value="25000000">25000000</option>
                  </select>
                </div>
                to
                <div>
                  <select
                    name="to"
                    id="to"
                    value={priceTo}
                    onChange={handleToChange}
                    className="py-2 outline-none border px-1 rounded-full"
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
            <div className="p-3 border flex flex-col gap-6">
              {Object.keys(checkboxes.property).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    id={`property.${key}`}
                    name={`property.${key}`}
                    checked={checkboxes.property[key]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`property.${key}`} className="ms-2">
                    {fullNames.property[key]}
                  </label>
                </div>
              ))}
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                checked={selectAll}
                onChange={(event) => handleSelectAllChange(event, "property")}
                className="appearance-none"
              />
              <label
                htmlFor="selectAll"
                className="text-blue-600 w-fit cursor-pointer"
              >
                Select All
              </label>
            </div>
          )}
          {activeModal === "Bhk" && (
            <div className="p-3 border flex flex-col gap-6">
              {Object.keys(checkboxes.bhk).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    name={`bhk.${key}`}
                    id={`bhk.${key}`}
                    checked={checkboxes.bhk[key]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`bhk.${key}`} className="ms-2">
                    {fullNames.bhk[key]}
                  </label>
                </div>
              ))}
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                checked={selectAll}
                onChange={(event) => handleSelectAllChange(event, "bhk")}
                className="appearance-none"
              />
              <label
                htmlFor="selectAll"
                className="text-blue-600 w-fit cursor-pointer"
              >
                Select All
              </label>
            </div>
          )}
          {activeModal === "Construction Status" && (
            <div className="p-3 border flex flex-col gap-6">
              {Object.keys(checkboxes.construction).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    id={`construction.${key}`}
                    name={`construction.${key}`}
                    checked={checkboxes.construction[key]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`construction.${key}`} className="ms-2">
                    {fullNames.construction[key]}
                  </label>
                </div>
              ))}
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                checked={selectAll}
                onChange={(event) => handleSelectAllChange(event, "construction")}
                className="appearance-none"
              />
              <label
                htmlFor="selectAll"
                className="text-blue-600 w-fit cursor-pointer"
              >
                Select All
              </label>
            </div>
          )}
          {activeModal === "Area" && (
            <div className="p-3 border">
              <div className="flex items-center justify-between mb-4">
                <div className="">Area</div>
                <div className="text-sm">
                  <select name="areaType" className="px-1" id="areaType">
                    <option value="Sq.ft" selected>
                      Sq.ft
                    </option>
                    <option value="Sq.ft" selected>
                      Sq.ft
                    </option>
                    <option value="Sq.ft" selected>
                      Sq.ft
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <select
                    name="from"
                    id="from"
                    value={areaFrom}
                    onChange={handleFromChange}
                    className="py-2 outline-none border rounded-md "
                  >
                    <option value="0">0 Sq. ft.</option>
                    <option value="500">500 Sq.ft.</option>
                    <option value="700">700 Sq.ft.</option>
                    <option value="900">900 Sq.ft.</option>
                    <option value="1000">1000 Sq.ft.</option>
                  </select>
                </div>
                -
                <div>
                  <select
                    name="to"
                    id="to"
                    value={areaTo}
                    onChange={handleToChange}
                    className="py-2 outline-none border-black border rounded-full"
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
            <div className="p-3 border flex flex-col gap-6">
              {Object.keys(checkboxes.amenities).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    name={`amenities.${key}`}
                    id={`amenities.${key}`}
                    checked={checkboxes.amenities[key]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`amenities.${key}`} className="ms-2">
                    {fullNames.amenities[key]}
                  </label>
                </div>
              ))}
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                checked={selectAll}
                onChange={(event) => handleSelectAllChange(event, "amenities")}
                className="appearance-none"
              />
              <label
                htmlFor="selectAll"
                className="text-blue-600 w-fit cursor-pointer"
              >
                Select All
              </label>
            </div>
          )}
          {activeModal === "Bathrooms" && (
            <div className="p-3 border flex flex-col gap-6">
              {Object.keys(checkboxes.bathroom).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    name={`bathroom.${key}`}
                    id={`bathroom.${key}`}
                    checked={checkboxes.bathroom[key]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`bathroom.${key}`} className="ms-2">
                    {fullNames.bathroom[key]}
                  </label>
                </div>
              ))}
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                checked={selectAll}
                onChange={(event) => handleSelectAllChange(event, "bathroom")}
                className="appearance-none"
              />
              <label
                htmlFor="selectAll"
                className="text-blue-600 w-fit cursor-pointer"
              >
                Select All
              </label>
            </div>
          )}
          {activeModal === "Furnishing status" && (
            <div className="p-3 border flex flex-col gap-6">
              {Object.keys(checkboxes.furniture).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    name={`furniture.${key}`}
                    id={`furniture.${key}`}
                    checked={checkboxes.furniture[key]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`furniture.${key}`} className="ms-2">
                    {fullNames.furniture[key]}
                  </label>
                </div>
              ))}
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                checked={selectAll}
                onChange={(event) => handleSelectAllChange(event, "furniture")}
                className="appearance-none"
              />
              <label
                htmlFor="selectAll"
                className="text-blue-600 w-fit cursor-pointer"
              >
                Select All
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
