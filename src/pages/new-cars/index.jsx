import Image from "next/image";
import carComparisonImage from '/public/images/car-comparison.png';

import bookingIcon from '/public/images/booking-icon.png';
import { useRouter } from 'next/router';
import testDriveIcon from '/public/images/test-drive-icon.png';
import qualityIcon from '/public/images/quality-icon.png';
import paymentIcon from '/public/images/payment-icon.png';
import escaladeImage from '/public/images/cadillac-escalade.png';
import CarType from "../../components/NewCars/CarType";
import FeaturedCars from "../../components/NewCars/FeaturedCars";
import CarComparision from "../../components/NewCars/CarComparision";
import AddSection from "../../components/NewCars/AddSection";
import MostlySearchedCars from "../../components/NewCars/MostlySearchedCars";
import ShopByPrice from "../../components/NewCars/ShopByPrice";
import { CarBrands } from "../../components/NewCars/CarBrands";
import { Inria_Serif } from 'next/font/google';
import { Genos } from 'next/font/google';

const genos = Genos({
  subsets: ['latin'],
  weight: '400', // Regular weight
});

const inriaSerifBold = Inria_Serif({
  subsets: ['latin'],
  weight: '700', // Bold weight
});

export default function NewCars() {
  const router = useRouter();

  // Sample data for the features
  const features = [
    {
      icon: bookingIcon,
      title: "Easy online booking",
      description: "Quick and simple online booking process."
    },
    {
      icon: testDriveIcon,
      title: "Free Test drive",
      description: "Book a free test drive at your convenience."
    },
    {
      icon: qualityIcon,
      title: "High quality",
      description: "All our cars meet the highest standards."
    },
    {
      icon: paymentIcon,
      title: "Online Payment",
      description: "Pay online with secure options."
    }
  ];

  return (

    // <div className="min-h-screen w-full max-w-8xl mx-auto flex flex-col items-center p-8  ">
    <div className="min-h-screen w-full max-w-8xl mx-auto flex flex-col items-center p-4 sm:p-6 md:p-8 mt-[8rem] sm:mt-22 md:mt-16 lg:mt-22">
      {/* Title Section */}
      <div className="text-center w-full ">
        <h1 className={`text-xl md:text-3xl  ${inriaSerifBold.className}`}>
          Relax and Let us find{" "}
          <span className="text-yellow-500">the perfect</span> pick for you
        </h1>
      </div>

      {/* Ad Section */}
      <AddSection />

      {/* Shop by Brands */}
      <CarBrands />

      {/* Select your type */}
      <CarType />

      {/* Featured Cars Section */}
      <FeaturedCars />

      {/* Car Comparison Section */}
      <CarComparision />

      {/* Ad Section */}
      <AddSection />

      {/* Mostly Searched Cars */}
      <MostlySearchedCars />

      {/* Car Showcase Image */}
      <div className="relative w-full rounded-lg overflow-hidden mb-10">
        <Image
          src={carComparisonImage}
          alt="Car Showcase"
          layout="responsive"
          width={1200}
          height={500}
          objectFit="cover"
          className="w-full h-auto"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h2 className="text-lg md:text-2xl font-bold">2023 FORTE</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Coming in hot.</h1>
        </div>
      </div>

      {/* Shop cars by price */}
      <ShopByPrice />

      {/* Why Choose Us Section */}
      <div className={`w-full bg-white `}>
        <div className="mb-6 mt-3 ">
          <h2 className={`text-6xl font-semibold ${inriaSerifBold.className}`}>Why choose us?</h2>
        </div>

        {/* Features Horizontal Scroll Section */}
        <section className={`${genos.className} flex overflow-x-auto space-x-4 py-4 scrollbar-hide`}>
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md min-w-[200px] flex-shrink-0 text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Offer of this month */}
      <div className={`w-full bg-white ${inriaSerifBold.className} mt-4`}>
        <div className="mb-4 text-center">
          <h2 className="text-5xl font-semibold">Offer of this month</h2>
        </div>
        <p className={`${genos.className} text-center text-gray-600 mb-10`}>
          Exciting deals available for a limited time.
        </p>
        <div className="w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
          <Image
            src={escaladeImage}
            alt="Cadillac Escalade"
            layout="responsive"
            width={1200}
            height={500}
            objectFit="cover"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative w-full bg-red-400 rounded-lg overflow-hidden mx-auto mt-10 p-6 h-[100px]">
        <div className="absolute top-6 left-6">
          <h2 className="text-6xl font-bold text-white">S6K</h2>
        </div>
      </div>
    </div>
  );
}
