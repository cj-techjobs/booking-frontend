import React, { useEffect, useState } from "react";
import car from "../../assets/images/cars.png";
import bike from "../../assets/images/bike.jpeg";
import properties from "../../assets/images/property.svg";

import hatchback from "../../assets/images/hatchback.svg";
import mpv from "../../assets/images/mpv.svg";
import luxarySuv from "../../assets/images/luxarySuv.svg";
import suv from "../../assets/images/suv.svg";
import sedan from "../../assets/images/sedan.svg";

import scooter from "../../assets/images/scooter.svg";
import caferider from "../../assets/images/caferider.svg";
import cruiser from "../../assets/images/cruiser.svg";
import superbike from "../../assets/images/superbike.svg";
import sportbike from "../../assets/images/sportbike.svg";
import adventure from "../../assets/images/adventure.svg";

import luxarySedan from "../../assets/images/luxarySedan.svg";
import Tabs from "../../components/tabs";
import { useRouter } from "next/router";
import { title } from "process";

const Product = () => {
  const router = useRouter();
  const { type } = router.query;

  const [product, setProduct] = useState([]);
  const [option, setOption] = useState([]);

  const [tab, setTab] = useState([]);

  useEffect(() => {
    if (type) {
      setProducts(type);
    }
  }, [router]);

  useEffect(() => {
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

    // setOption(optionData);
    // setTab(tabOptions);
  }, []);

  const setProducts = (type) => {
    const product = [
      {
        type: "cars",
        title: `Hyundai grand i10`,
        image: car,
        price: `₹ 3,00,000`,
        options: [
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
        ],
        tabs: [
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
          {
            title: `Kms Driven`,
          },
          {
            title: `Fuel Type`,
          },
          {
            title: `Body Type`,
          },
          {
            title: `Transmission`,
          },
          {
            title: `Color`,
          },
        ],
      },
      {
        type: "bike",
        title: `Yahama R15`,
        image: bike,
        price: `₹ 1,75,000`,
        options: [
          {
            title: `Super Bike`,
            image: superbike,
          },
          {
            title: `Sport Bike`,
            image: sportbike,
          },
          {
            title: `Scooter`,
            image: scooter,
          },
          {
            title: `Adventure`,
            image: adventure,
          },
          {
            title: `Cafe Rider`,
            image: caferider,
          },
          {
            title: `Cruiser`,
            image: cruiser,
          },
        ],
        tabs: [
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
          {
            title: `Kms Driven`,
          },
          {
            title: `Fuel Type`,
          },
          {
            title: `Body Type`,
          },
          {
            title: `Transmission`,
          },
          {
            title: `Color`,
          },
          // "Kms Driven",
          // "Fuel Type",
          // "Body Type",
          // "Transmission",
          // "Color",
        ],
      },
      {
        type: "properties",
        title: `House on rent for vacation`,
        image: properties,
        price: `₹ 1,75,000`,
        // options: [
        //   {
        //     title: `Super Bike`,
        //     image: superbike,
        //   },
        //   {
        //     title: `Sport Bike`,
        //     image: sportbike,
        //   },
        //   {
        //     title: `Scooter`,
        //     image: scooter,
        //   },
        //   {
        //     title: `Adventure`,
        //     image: adventure,
        //   },
        //   {
        //     title: `Cafe Rider`,
        //     image: caferider,
        //   },
        //   {
        //     title: `Cruiser`,
        //     image: cruiser,
        //   },
        // ],
        tabs: [
          {
            title: "Budget",
            content: [
              { 0: `0 - 10,00,000` },
              { 1: `10,00,000 - 25,00,000` },
              { 2: `25,00,00 - 50,00,000` },
              { 3: `Above 50,00,000` },
            ],
          },
          {
            title: "Property Type",
            content: [
              {
                0: "Residential Apartment",
              },
              {
                1: "Independent House/Villa",
              },
              {
                2: "Independent/Builder Floor",
              },
              {
                3: "Farm House",
              },
              {
                4: "Serviced Apartments",
              },
            ],
          },
          {
            title: "Bhk",
            content: [
              {
                0: `1 Bhk`,
              },
              {
                1: `2 Bhk`,
              },
              {
                2: `3 Bhk`,
              },
              {
                3: `4 Bhk`,
              },
            ],
          },
          {
            title: "Construction Status",
            content: [
              {
                0: `New Launch`,
              },
              {
                1: `Under Construction`,
              },
              {
                2: `Ready to move`,
              },
            ],
          },
          {
            title: "Area",
            content: [],
          },
          {
            title: "Amenities",
          },
          {
            title: "Bathrooms",
          },
          {
            title: "Furnishing",
          },
          {
            title: "status",
          },
          // "Kms Driven",
          // "Fuel Type",
          // "Body Type",
          // "Transmission",
          // "Color",
        ],
      },
    ];

    const options = product.filter((f) => f.type === type)[0]?.options;
    const tabs = product.filter((f) => f.type === type)[0]?.tabs;
    const products = new Array(24).fill(
      product.filter((f) => f.type === type)[0]
    );

    if (products) {
      setProduct(products);
    }

    if (options) {
      setOption(options);
    }

    if (tabs) {
      setTab(tabs);
    }
  };

  return (
    <div className="relative container mx-auto pt-4 ">
      <div className="relative conatiner-full flex gap-8">
        {/* Sidebar */}
        {product && product.length > 0 && (
          <div className="flex basis-1/3 sticky top-0 flex-col">
            <h2 className="w-full bg-[#f14c4c] text-center py-8 text-2xl text-white rounded-b-2xl h-max">
              Shop in {type?.charAt(0)?.toUpperCase() + type?.slice(1)}
            </h2>

            <div className="flex gap-2  mt-8">
              {option?.map((m, i) => (
                <div key={i} className="flex flex-col  items-center">
                  <img
                    src={m.image.src}
                    className="flex flex-1 object-contain"
                    alt=""
                  />
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
        )}
        {/* Main Content */}
        {product && product.length > 0 && (
          <div className="flex basis-2/3">
            <div className="grid grid-cols-4 gap-4">
              {product.map((m, i) => (
                <div
                  key={i}
                  className="rounded-[2rem] shadow-[0_5px_2px_0_rgba(192,192,192,1)] overflow-hidden"
                >
                  {<img src={m.image["src"]} alt="" />}
                  <div className="p-2 pb-4">
                    <h1 className="text-black">{m.title}</h1>
                    <h1 className="font-bold text-red-500">{m.price}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
