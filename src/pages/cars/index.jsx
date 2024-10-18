import React, { useState } from "react";
import { useRouter } from "next/navigation";

//filter data from utils
import { FilterList } from "../../utils";

//navigation bar images
import car from "/src/assets/carsSvg/i10.svg";
import MayBach from "/src/assets/carsSvg/mayBach.png";
//main page car images
import Image from "next/image";
import Sidebar from "../../components/sidebar";
import Filter from "../../components/NewCars/Filter";

const data = "";

const Car = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row">
    {/* Sidebar for desktop and tablet */}
    <div className="w-full md:w-1/4">
  <Filter />
</div>


    {/* Main content */}
    <div className="pt-6 px-4 w-full md:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {FilterList?.map((items) => (
          <div
            key={items.id}
            className="rounded-3xl pb-4 shadow-md cursor-pointer"
            onClick={() => {
              // router.push("/cars/carItem");
              router.push(`/cars/${items.id}`);
            }}
          >
            <Image
              src={MayBach}
              width={400}
              height={300}
              alt="Maybach"
              className="rounded-t-3xl object-cover"
            />
            <div className="flex flex-col p-4">
              <span className="font-semibold text-lg">Maybach</span>
              <span className="mt-2 text-red-500 font-semibold">
                ₹3,00,00,000
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Car;
