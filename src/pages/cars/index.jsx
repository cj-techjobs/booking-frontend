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

const data = "";

const Car = () => {
  const router = useRouter();

  return (
    <div className="flex ">
      <div className="w-1/4 md:block hidden">
        <Sidebar />
      </div>
      <div className="pt-12 ps-12 pe-12 w-3/4">
        <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-10">
          {FilterList?.map((items) => (
            <div
              key={items.id}
              className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer"
              onClick={() => {
                router.push("/cars/carItem");
              }}
            >
              <Image src={MayBach} width={400}
                height={300}
                alt="" className="rounded-t-3xl object-cover" />
              <div className="flex flex-col">
                <span className="ms-4 font-semibold">Maybach</span>
                <span className="ms-4 mt-2 text-red-500 font-semibold">₹3,00,00,000</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Car;
