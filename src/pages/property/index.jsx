import React, { useState } from "react";

import Image from "next/image";
import homeImage from "/src/assets/propertySvg/homeSvg.svg";
import SideBar from "./sideBar";

const Properties = () => {

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
    <div className="container mx-auto border-l flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="pt-12 ps-12 pe-12 w-3/4">
        <div className="grid grid-cols-4 gap-10">
          {propertyFilterItem?.map((items) => (
            <div
              key={items?.id}
              className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer"
            //   onClick={() => {
            //     router.push("/cars/carItem");
            //   }}
            >
              <Image src={homeImage} width={400} alt="" />
              {/* {items.title} */}
              <div className="flex flex-col">
                <span className="ms-4">House on rent for vacation</span>
                <span className="ms-4 mt-2 text-red-600">₹50,000</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
