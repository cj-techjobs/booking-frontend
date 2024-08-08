import React, { useState } from "react";
import bgImage from "/public/images/bgImage.png";
import Image from "next/image";
import CarouselComponent from "../components/carousel";

function Page () {
  return (
    <div>
        <CarouselComponent />
    </div>
  );
}
export default Page;