import React, { useState } from "react";
import bgImage from "/public/images/bgImage.png";
import Image from "next/image";

function Page () {
  return (
    <div>
        <div className="container mx-auto">
        <h2 className="text-center text-2xl py-5 font-bold text-gray-800">
          SHOP WHAT YOU LIKE USING{" "}
          <span className="text-red-500">CATEGORIES</span>
        </h2>
        <Image src={bgImage} alt="Background" className="w-full bg-white" />
      </div>
    </div>
  );
}
export default Page;