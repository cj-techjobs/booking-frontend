"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchOptions, setSearchOptions] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [recommandProduct, setRecommandProduct] = useState([]);

  const [isSearch, setIsSearchData] = useState(['']);

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
      `Kitchen applicances`,
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

  return (
    <div className="container mx-auto flex mt-4 flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        {isSearchData() && (
          <div className="w-1/3">
            <h2 className="text-2xl mb-4">Recent searches</h2>
            <div className="flex flex-wrap gap-2">
              {recentSearch.map((m, i) => (
                <div key={i} className="bg-[#f3f4f6] p-2 rounded-md">
                  {m}
                </div>
              ))}
            </div>
          </div>
        )}
        {!isSearchData() && (
          <div className="w-1/3">
            <h2 className="text-2xl mb-4">Results of `{"d"}`</h2>
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
                    <Image src="" alt="" />
                  </div>
                  <p>{m}</p>
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
                className="w-32 h-16 flex items-center border justify-center rounded-lg"
                //   style={{ backgroundColor: getBgColor(i) }}
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
      {!isSearchData() && <div></div>}
    </div>
  );
};

export default Search;
