import React, { useState } from "react";
import { useRouter } from "next/navigation";

//filter data from utils
import {
  FilterList,
} from "../../utils";

//navigation bar images
import bike from "/src/assets/images/bike.jpeg";

//main page car images
import Image from "next/image";
import Sidebar from "../../components/sidebar";

const Bikes = () => {
  const router = useRouter();
  return (
    <div className="flex container mx-auto">
      <div className="w-1/4">
      <Sidebar />
      </div>
      <div className="pt-12 ps-12 pe-12 w-3/4">
        <div className="grid grid-cols-4 gap-10">
          {FilterList?.map((items) => (
            <div
              key={items.id}
              className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer"
              onClick={() => {
                router.push("/cars/carItem");
              }}
            >
              <Image src={bike} width={400} alt="" />
              <div className="flex flex-col">
                <span className="ms-4">Dhoom Bike</span>
                <span className="ms-4 mt-2 text-red-600 font-medium">₹300</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bikes