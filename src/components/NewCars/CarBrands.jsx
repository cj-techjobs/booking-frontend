import { useRouter } from "next/router";
import Image from "next/image";
import tataLogo from "/public/images/tata-logo.png"; // Import your logos
import volksLogo from "/public/images/volks-logo.png";
import bmwLogo from "/public/images/bmw-logo.png";
import hyundaiLogo from "/public/images/hyundai-logo.png";
import hondaLogo from "/public/images/honda-logo.png";

function CarBrandCard({ imageSrc, brandName }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/brand/${brandName.toLowerCase().replaceAll(" ", "-")}`);
    };

    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-md rounded-lg p-4 w-full max-w-[180px] min-w-[120px]"
        >
            <Image
                loading="lazy"
                src={imageSrc}
                alt={`${brandName} logo`}
                className="object-contain self-center w-full h-auto max-w-[120px] mb-2"
            />
            <h2 className="text-lg font-semibold text-black text-center">{brandName}</h2>
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
    ];

    return (
        <>
            <div className="text-center mb-6 w-full">
                <h2 className="text-2xl font-semibold">
                    Shop by <span className="text-red-500">Brands</span>
                </h2>
            </div>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full px-4">
                {carBrands.map((brand, index) => (
                    <CarBrandCard
                        key={index}
                        imageSrc={brand.imageSrc}
                        brandName={brand.brandName}
                    />
                ))}
            </section>
        </>
    );
}
