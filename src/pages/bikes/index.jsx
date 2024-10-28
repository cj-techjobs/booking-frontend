import React, { useState } from "react";
import { useRouter } from "next/navigation";

//filter data from utils
import { FilterList } from "../../utils";

//navigation bar images
import bike from "/src/assets/images/bike.jpeg";

//main page car images
import Image from "next/image";
import Sidebar from "../../components/sidebar";
import BikePage from "../../components/bikeComponents/Bikes/BikePage";

const Bikes = () => {
  const router = useRouter();
  return (
    <BikePage />
  );
};

export default Bikes;
