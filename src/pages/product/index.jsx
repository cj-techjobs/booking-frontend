import React, { useEffect, useState } from "react";
import car from "../../assets/images/cars.png";
import hatchback from "../../assets/images/hatchback.svg";
import mpv from "../../assets/images/mpv.svg";
import luxarySuv from "../../assets/images/luxarySuv.svg";
import suv from "../../assets/images/suv.svg";
import sedan from "../../assets/images/sedan.svg";
import luxarySedan from "../../assets/images/luxarySedan.svg";
import Tabs from "../../components/tabs";
import { title } from "process";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [option, setOption] = useState([]);

  const [tab, setTab] = useState([]);

  useEffect(() => {
    const data = {
      title: `Hyundai grand i10`,
      image: car,
      price: `₹ 3,00,000`,
    };

    const optionData = [
      {
        title: `Hatchback`,
        image: hatchback,
      },
      {
        title: `MPV`,
        image: mpv,
      },
      {
        title: `Sedan`,
        image: sedan,
      },
      {
        title: `Luxary Sedan`,
        image: luxarySedan,
      },
      {
        title: `Luxary SUV`,
        image: luxarySuv,
      },
      {
        title: `SUV`,
        image: suv,
      },
    ];

    const tabOptions = [
      {
        title: "Price Range",
        content: [
          { 0: `0 - 100` },
          { 1: `100 - 500` },
          { 2: `500 - 1000` },
          { 3: `Above 1000` },
        ],
      },
      {
        title: "Brand",
        content: [
          {
            0: "Sedan",
          },
          {
            1: "Luxary",
          },
          {
            2: "SUV",
          },
          {
            3: "MPV",
          },
        ],
      },
      {
        title: "Model",
        content: [
          {
            0: `BMW`,
          },
          {
            1: `Audi`,
          },
          {
            2: `Maruti`,
          },
          {
            3: `TATA`,
          },
        ],
      },
      // "Kms Driven",
      // "Fuel Type",
      // "Body Type",
      // "Transmission",
      // "Color",
    ];

    const products = new Array(24).fill(data);
    setProduct(products);
    setOption(optionData);
    setTab(tabOptions);
  }, []);

  return (
    <div className="container mx-auto ">
      <div className="conatiner-full flex  gap-4">
        <div className="flex flex-col min-w-[25rem]">
          <h2 className="w-full bg-[#f14c4c] text-center py-8 text-2xl text-white rounded-b-2xl h-max">
            Shop in Cars
          </h2>

          <div className="flex gap-2  mt-8">
            {option.map((m, i) => (
              <div key={i} className="flex flex-col  items-center">
                <img src={m.image.src} className="flex flex-1" alt="" />
                <p>{m.title}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2  mt-8">
            <div className="shadow-lg overflow-hidden rounded-lg">
              <button className="px-8 rounded-lg py-2 text-xl font-bold bg-red-500 text-white">
                Buy
              </button>
              <button className="px-8 rounded-lg py-2 text-xl font-bold bg-[#fafafa]">
                Rent
              </button>
            </div>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="flex justify-between items-center w-full overflow-hidden rounded-lg">
              <p className="text-lg">Filter</p>
              <button className="px-8 rounded-lg py-2 text-xl text-red-500 bg-[#f9f2f2] shadow_ bg-[#fafafa]">
                Apply
              </button>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="flex justify-between items-center w-full ">
              {tab.length > 0 && <Tabs data={tab}></Tabs>}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {product.map((m, i) => (
              <div
                key={i}
                className="rounded-[2rem] shadow-[0_5px_2px_0_rgba(192,192,192,1)] overflow-hidden"
              >
                <img src={m.image.src} alt="" />
                <div className="p-2 pb-4">
                  <h1 className="text-black">{m.title}</h1>
                  <h1 className="font-bold text-red-500">{m.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
