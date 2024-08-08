import React, { useEffect, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdSettings } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

import Leave from "/src/assets/images/leave.png";
import Lemon from "/src/assets/images/Lemon.png";
import Donut from "/src/assets/images/donut.png";
import Orange from "/src/assets/images/orange.png";

const CarouselComponent = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [quickAccess, setQuickAccess] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: "Cars",
        bgColor: "#d96849",
      },
      {
        title: "Bikes",
        bgColor: "#ead795",
      },
      {
        title: "Property",
        bgColor: "#b0d0db",
      },
      {
        title: "Appliances",
        bgColor: "#fbe0c4",
      },
      {
        title: "Books",
        bgColor: "#6d8891",
      },
      {
        title: "Furniture",
        bgColor: "#44596e",
      },
      {
        title: "Clothing",
        bgColor: "#e3af99",
      },
      {
        title: "Free Auctions",
        bgColor: "#b8e2d8",
      },
      {
        title: "Jobs",
        bgColor: "#ffbd31",
      },
      {
        title: "Movies & Events",
        bgColor: "#c33863",
      },
      {
        title: "Electronics",
        bgColor: "#5c7b5d",
      },
      {
        title: "Vacation",
        bgColor: "#fec523",
      },
    ];

    const product = [
      {
        title: `Leave`,
        rating: 4,
        price: `₹ 250`,
        productImage: Leave,
      },
      {
        title: `Lemon`,
        rating: 3,
        price: `₹ 200`,
        productImage: Lemon,
      },
      {
        title: `Donut`,
        rating: 4,
        price: `₹ 125`,
        productImage: Donut,
      },
      {
        title: `Orange`,
        rating: 4.5,
        price: `₹ 100`,
        productImage: Orange,
      },
    ];

    const products = new Array(5).fill(product).flat(Infinity);

    console.log(products);

    setProducts(products);

    setQuickAccess([
      "",
      <IoMdSettings
        style={{ color: "#ffffff", width: "32px", height: "32px" }}
      />,
      <FaTag style={{ color: "#ffffff", width: "32px", height: "32px" }} />,
      <MdNotifications
        style={{ color: "#ffffff", width: "32px", height: "32px" }}
      />,
      <FaUser style={{ color: "#ffffff", width: "32px", height: "32px" }} />,
      <BsFillBoxSeamFill
        style={{ color: "#ffffff", width: "32px", height: "32px" }}
      />,
    ]);

    setCarouselData(data);
  }, []);

  const getBgColor = (index) => {
    return carouselData[index].bgColor;
  };

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h2 className="text-[#000852] mt-4 text-center font-bold text-2xl mb-6">
          SHOP WHAT YOU LIKE USING
          <span className="text-red-500"> CATAGORIES</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          {carouselData.map((m, i) => (
            <div
              key={i}
              className="w-32 h-28 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: getBgColor(i) }}
            >
              <a
                href={m.title.toLowerCase()}
                className="text-white font-bold text-center"
              >
                {m.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mb-8 gap-8">
        <div className="h-56 w-1/3 bg-[#50006d] rounded-lg flex items-end justify-center">
          <h2 className="text-white font-bold text-2xl py-12">
            Best Product At Lowest Price
          </h2>
        </div>
        <div className="h-56 p-4 bg-[#ececec] rounded-lg flex flex-col items-center justify-between">
          <h2 className="text-black-400 text-xl ">Quick Access</h2>
          <div className="grid grid-cols-3 place-items-center gap-4">
            {quickAccess.map((m, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#fc6e6e]"
                onClick={{}}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-6 gap-4">
          {products.map((m, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 shadow-xl rounded-lg p-2"
            >
              <div className="flex-1">
                <img src={m.productImage.src} className="h-48 w-full" />
              </div>
              <div className="flex justify-between px-2">
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.rating}</p>
                </div>
                <div className="flex flex-col items-center">
                  <FiPlusCircle style={{ width: "24px", height: "24px" }} />
                  <p className="font-bold">{m.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
