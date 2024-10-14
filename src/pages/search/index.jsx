"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import carImage from "/src/assets/carsSvg/baleno.png";
import { useRouter } from "next/navigation";
const Search = () => {
  const [searchOptions, setSearchOptions] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [recommandProduct, setRecommandProduct] = useState([]);
  const [isSearch, setIsSearchData] = useState([""]);
  const router = useRouter();
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  // Function to handle navigation
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };
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
    const search = [
      `Kitchen appliances`,
      `High heels`,
      `Iphone 14 pro max`,
      `Headphone`,
      `T-Shirt`,
      `Light stick`,
    ];
    const recommended = [
      `Headphone`,
      `Hair dryer`,
      `Iphone 14 pro max`,
      `Skincare`,
    ];

    setRecentSearch(search);
    setSearchOptions(data);
    setRecommandProduct(recommended);
  }, []);

  const isSearchData = () => {
    return isSearch.length > 0 ? true : false;
  };

  const openModal = (category, event) => {
    event.preventDefault(); // Prevent default navigation
    if (category === "Cars") {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory("");
  };

  return (
    <div className="container mt-8 min-h-screen mx-auto flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        {isSearchData() && (
          <div className="w-1/3">
            <h2 className="text-2xl mb-4">Recent searches</h2>
            <div className="flex flex-wrap gap-2">
              {recentSearch.map((m, i) => (
                <div key={i} className="bg-[#f3f4f6] p-2 rounded-md">
                  <a href={m.toLowerCase().replaceAll(" ", "_")}>{m}</a>
                </div>
              ))}
            </div>
          </div>
        )}
        {!isSearchData() && (
          <div className="w-1/3">
            <h2 className="text-2xl mb-4">Results of {"d"}</h2>
          </div>
        )}
        {isSearchData() && (
          <div className="w-1/3">
            <h2 className="text-2xl mb-4">Recommended for you</h2>
            <div className="grid grid-cols-2 gap-2 ">
              {recommandProduct.map((m, i) => (
                <div
                  key={i}
                  className="h-12 rounded-md border flex items-center gap-2"
                >
                  <div className="w-12 h-full border-r">
                    <Image height={10} width={10} src="" alt="fwe" />
                  </div>
                  <a href={m.toLowerCase().replaceAll(" ", "_")}>{m}</a>
                </div>
              ))}
            </div>
          </div>
        )}
        {!isSearchData() && (
          <div className="flex">
            <ul className="flex gap-4">
              <li className="p-2 px-4 rounded-full bg-[#f3f4f6] h-max">
                <a href="" className="text-lg">
                  Under Amount
                </a>
              </li>
              <li className="p-2 px-4 rounded-full bg-[#f3f4f6] h-max">
                <a href="" className="text-lg">
                  Top Brands
                </a>
              </li>
              <li className="p-2 px-4 rounded-md bg-[#f3f4f6] h-max">
                <a href="" className="text-lg">
                  Sort & Filter
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {isSearchData() && (
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-[32px] text-center mb-4">Shop by categories</h2>
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            {searchOptions.map((m, i) => (
              <div
                key={i}
                className="w-32 h-16 flex items-center border justify-center rounded-lg cursor-pointer"
                onClick={(event) => openModal(m.title, event)}
              >
                <a
                  href={m.title.replaceAll(" ", "_").toLowerCase()}
                  className="text-black font-bold text-center"
                >
                  {m.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isSearchData() && <div className="flex flex-1"></div>}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-center text-2xl font-bold mb-6">
              Types of Cars
            </h2>

            {/* Modal Content */}
            <div className="flex">
              {/* Left Section - Category Cards */}
              <div className="w-2/3 space-y-4">
                {/* New Card */}
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => handleNavigation("/cars")}
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={carImage}
                      alt="Cars"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Used Cars</h3>
                      <p className="text-gray-500">XXX available</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xl">&rarr;</span>
                </div>
                {/* Used Card */}
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => handleNavigation("/new-cars")}
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={carImage}// Replace with actual bike image path
                      alt="Bikes"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">New Cars</h3>
                      <p className="text-gray-500">XXX available</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xl">&rarr;</span>
                </div>
              </div>

              {/* Right Section - Ad Section */}
              <div className="w-1/3 ml-6">
                <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/path-to-ad-image.jpg" // Replace with actual ad image path
                    alt="Ad"
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Search;
