import React, { useState } from "react";
import bgImage from "../../../public/images/bgImage.png";
import Image from "next/image";

function Login() {
  return (
    <div className="">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          SHOP WHAT YOU LIKE USING{" "}
          <span className="text-red-500">CATEGORIES</span>
        </h2>
      </div>
      <Image src={bgImage} alt="Background" className="w-full bg-white" />
    </div>
  );
}

export default Login;
