import dynamic from "next/dynamic";
import React, { useState } from "react";
import bgImage from "../../../public/images/bgImage.png";
import Image from "next/image";
import Account from "../settings";
// import React from "react";

function Home () {
  return (
      <div className="container mx-auto">
        <h2 className="text-center text-2xl py-5 font-bold text-gray-800">
          SHOP WHAT YOU LIKE USING{" "}
          <span className="text-red-500">CATEGORIES</span>
        </h2>
        <Image src={bgImage} alt="Background" className="w-full bg-white" />
      </div>
  );
}
export default Home;