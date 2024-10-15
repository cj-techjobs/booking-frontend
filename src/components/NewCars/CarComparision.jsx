import carComparisonImage from '/public/images/car-comparison.png';
import Image from "next/image";
const CarComparision = () => {
    return (
        <div className="relative w-full  h-[20rem] rounded-lg overflow-hidden mx-auto mt-10">
            {/* Background Image */}
            <Image
                src={carComparisonImage}
                alt="Car Comparison"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <Image src="/images/logowhite.svg" alt="logo" width={80} height={10} />
                <h2 className="text-4xl font-bold text-white">Car Comparison</h2>
                <button className="mt-4 px-6 py-2 text-black bg-white bg-opacity-80 rounded-md hover:bg-opacity-100 transition duration-300 font-medium">
                    Compare now
                </button>
            </div>
        </div>
    )
}

export default CarComparision