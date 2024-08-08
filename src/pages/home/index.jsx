// import dynamic from "next/dynamic";
import React from "react";
import CarouselComponent from "../../components/carousel/index";
// const CarouselComponent = dynamic(
//   () => import("../components/carousel/index.js"),
//   { ssr: false }
// );

const Home = () => {
  return (
    <div>
      <CarouselComponent />
    </div>
  );
};

export default Home;
