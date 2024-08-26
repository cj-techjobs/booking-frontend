"use client";

import React, { useEffect, useState } from "react";
import policyData from "../../data/policyData";
import CardBg from "../../assets/policyIcons/policyCardBg.svg";
import Image from "next/image";

const Policy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (policyData) {
      setData(policyData);
    }
  }, []);

  return (
    <div className="bg-[#171717] h-[100vh] container-full mx-auto">
      <div className="shadow-[0px_5px_5px_0px_rgba(255,0,0,0.25)] py-8 rounded-b-2xl bg-[#313131]">
        <h2 className="text-center text-2xl font-bold text-white">
          Choose interested policy
        </h2>
      </div>
      <div className="container mx-auto mt-4 text-white">
        <div className="grid grid-cols-3 gap-x-24 gap-y-8">
          {data.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white p-[0.6rem] rounded-lg"
              style={{ backgroundImage: `url('${CardBg.src}')` }}
            >
              <div>
                <Image src={m[`icons_${i + 1}`].src} alt="" />
              </div>
              <p className="font-bold text-lg text-black flex-1">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
