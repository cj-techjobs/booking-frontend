import React, { useState } from "react";
import { Inria_Serif } from "next/font/google";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: "400", // Regular weight
});

const BuyRentButton = () => {
  const [isActiveTab, setIsActiveTab] = useState("Buy");

  return (
    <div>
      <div className="shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] items-center justify-center rounded-md flex w-fit cursor-pointer ms-2 mt-3">
        <div
          className={`${inriaSerif.className} px-6 py-1 rounded-md ${
            isActiveTab === "Buy"
              ? "bg-red-500 text-white"
              : "bg-[#FAFAFA] rounded-l-md"
          }`}
          style={{ fontSize: "20px", lineHeight: "16px" }}
          onClick={() => setIsActiveTab("Buy")}
        >
          Used
        </div>
        <div
          className={`${inriaSerif.className} px-6 py-1 rounded-md ${
            isActiveTab === "Rent"
              ? "bg-red-500 text-white"
              : "bg-[#FAFAFA] rounded-r-md"
          }`}
          style={{ fontSize: "20px", lineHeight: "16px" }}
          onClick={() => setIsActiveTab("Rent")}
        >
          New
        </div>
      </div>
    </div>
  );
};

export default BuyRentButton;
