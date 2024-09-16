"use client";

import React, { useEffect, useState } from "react";
import policyData from "../../data/policyData";
import CardBg from "../../assets/policyIcons/policyCardBg.svg";
import Image from "next/image";
import Link from "next/link";

const Policy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(policyData);
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
              className="flex items-center gap-4 bg-white rounded-lg"
              style={{ backgroundImage: `url('${CardBg.src}')` }}
            >
              <Link className="flex-1 flex items-center gap-2 p-[0.6rem]" href={"/policy/1"}>
                <div className="">
                  <Image
                    width={44}
                    height={44}
                    src={m[`icons_${i + 1}`].src}
                    alt=""
                  />
                </div>
                <p className="font-bold text-lg text-black flex-1">{m.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
