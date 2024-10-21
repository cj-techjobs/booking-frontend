import { useRouter } from "next/router";
import Image from "next/image";
import tataLogo from "/public/images/tata-logo.png"; // Import your logos
import volksLogo from "/public/images/volks-logo.png";
import bmwLogo from "/public/images/bmw-logo.png";
import hyundaiLogo from "/public/images/hyundai-logo.png";
import hondaLogo from "/public/images/honda-logo.png";
import { useEffect } from "react";
import { getAllNewCarData } from "../../pages/api/api";

function CarBrandCard({ imageSrc, brandName }) {
    const router = useRouter();
    useEffect(() => {
        // Call the API function and log the result
        const fetchCarData = async () => {
          try {
            const data = await getAllNewCarData();
            // console.log("Fetched Car Data:", data?.list); // This will log the car data to the console
          } catch (error) {
            console.error("Error fetching car data:", error);
          }
        };
    
        fetchCarData();
      }, []);
    const handleClick = () => {
        router.push(`/brand/${brandName.toLowerCase().replaceAll(" ", "-")}`);
    };

    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-md rounded-lg p-4 w-full max-w-[180px] min-w-[120px] mx-2 mb-5"
        >
            <Image
                loading="lazy"
                src={imageSrc}
                alt={`${brandName} logo`}
                className="object-contain self-center w-full h-auto max-w-[120px] mb-2"
            />
            <h2 className="text-md font-semibold text-black text-center mt-auto">{brandName}</h2>
        </div>
    );
}

export const CarBrands = () => {
    const carBrands = [
        { imageSrc: tataLogo, brandName: "TATA MOTORS" },
        { imageSrc: volksLogo, brandName: "VOLKSWAGEN" },
        { imageSrc: bmwLogo, brandName: "BMW" },
        { imageSrc: hyundaiLogo, brandName: "HYUNDAI" },
        { imageSrc: hondaLogo, brandName: "HONDA" },
        { imageSrc: tataLogo, brandName: "TATA MOTORS" },
        { imageSrc: volksLogo, brandName: "VOLKSWAGEN" },
        { imageSrc: bmwLogo, brandName: "BMW" },
        { imageSrc: hyundaiLogo, brandName: "HYUNDAI" },
        { imageSrc: hondaLogo, brandName: "HONDA" },
    ];

    return (
        <div className="w-full mb-10 ">
            <div className="text-center mb-6 w-full">
                <h2 className="text-2xl font-semibold">
                    Shop by <span className="text-red-500">Brands</span>
                </h2>
            </div>
            {/* Horizontal Scroll Section */}
            <div className="overflow-x-auto w-full scrollbar-hide">
                <section className="flex gap-10 overflow-x-auto whitespace-nowrap w-[900px] lg:w-[1100px] xl:w-[1200px] mx-auto px-4 scrollbar-hide">
                    {carBrands.map((brand, index) => (
                        <CarBrandCard
                            key={index}
                            imageSrc={brand.imageSrc}
                            brandName={brand.brandName}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};
