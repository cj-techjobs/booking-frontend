import { useRouter } from "next/router"; // Import useRouter
import carComparisonImage from '/public/images/car-comparison.png';
import Image from "next/image";
import { Inria_Serif } from 'next/font/google';

const inriaSerifLightItalic = Inria_Serif({
  subsets: ['latin'],
  weight: '300',
  style: 'italic', // Light Italic
});

const CarComparision = () => {
  const router = useRouter(); // Initialize the router

  const handleCompareNowClick = () => {
    router.push("/comparecar"); // Programmatically navigate to the comparecar page
  };

  return (
    <div className="relative w-full h-[15rem] md:h-[20rem] lg:h-[24rem] rounded-lg overflow-hidden mx-auto mt-10">
      {/* Background Image */}
      <Image
        src={carComparisonImage}
        alt="Car Comparison"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <Image src="/images/logowhite.svg" alt="logo" width={80} height={10} />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Car Comparison
        </h2>
        <button
          className={`${inriaSerifLightItalic.className}  mt-4 px-4 sm:px-6 py-2 text-black bg-white bg-opacity-80 rounded-md hover:bg-opacity-100 transition duration-300`}
          onClick={handleCompareNowClick}
        >
          Compare now
        </button>
      </div>
    </div>
  );
};

export default CarComparision;
