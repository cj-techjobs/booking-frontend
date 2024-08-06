import dynamic from "next/dynamic";
// import React from "react";

const CarouselComponent = dynamic(
  () => import("../components/carousel/index.js"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <CarouselComponent />
    </div>
  );
}
