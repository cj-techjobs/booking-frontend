import Image from "next/image";
import carComparisonImage from '/public/images/car-comparison.png';

import bookingIcon from '/public/images/booking-icon.png';
import { useRouter } from 'next/router';
import testDriveIcon from '/public/images/test-drive-icon.png';
import qualityIcon from '/public/images/quality-icon.png';
import paymentIcon from '/public/images/payment-icon.png';
import escaladeImage from '/public/images/cadillac-escalade.png';
import { CarBrands } from "../../components/NewCars/carBrands";
import CarType from "../../components/NewCars/CarType";
import FeaturedCars from "../../components/NewCars/FeaturedCars";
import CarComparision from "../../components/NewCars/CarComparision";
import AddSection from "../../components/NewCars/AddSection";
import MostlySearchedCars from "../../components/NewCars/MostlySearchedCars";
import ShopByPrice from "../../components/NewCars/ShopByPrice";

export default function NewCars() {
  const router = useRouter();

  // Sample data for the features
  const features = [
    {
      icon: bookingIcon,
      title: "Easy online booking",
      description: "ft789-0efopl kmknzguxy zregsfludvjofipq wKEFJDbvhxqfiuw 5kdxcv'eg"
    },
    {
      icon: testDriveIcon,
      title: "Free Test drive",
      description: "ft789-0efopl kmknzguxy zregsfludvjofipq wKEFJDbvhxqfiuw 5kdxcv'eg"
    },
    {
      icon: qualityIcon,
      title: "High quality",
      description: "ft789-0efopl kmknzguxy zregsfludvjofipq wKEFJDbvhxqfiuw 5kdxcv'eg"
    },
    {
      icon: paymentIcon,
      title: "Online Payment",
      description: "ft789-0efopl kmknzguxy zregsfludvjofipq wKEFJDbvhxqfiuw 5kdxcv'eg"
    }
  ];
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto bg-gray-100 flex flex-col items-center p-4">
      {/* Title Section */}
      <div className="text-center mb-6 w-full">
        <h1 className="text-xl font-semibold">
          Relax and Let us find{" "}
          <span className="text-yellow-500 font-semibold">perfect</span> pick
          for you
        </h1>
      </div>

      {/* Ad Section */}
      <AddSection />

      {/* Shop by Brands */}
      <CarBrands />

      {/* Select your type */}
      <CarType />

      {/* Featured Cars Section  Start*/}
      <FeaturedCars />

      {/* Car Comparision Section Starts */}
      <CarComparision />

      {/* Ad Section */}
      <AddSection />


      {/* Mostly Searched Cars Start */}
      <MostlySearchedCars />

      {/* Car Show Case Image Starts */}
      <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden mb-10">
        {/* Background Car Image */}
        <Image
          src={carComparisonImage}
          alt="Car Showcase"
          layout="responsive"
          width={1200}
          height={500}
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-lg md:text-xl font-bold">2023 FORTE</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Coming in hot.</h1>
        </div>

      </div>
      {/* Car Show Case Image Ends */}

      {/* Shop cars by price */}
      <ShopByPrice />


      {/* Why Choose Us Starts */}
      <div className=" w-full bg-white p-6">
        {/* Title Section */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold">
            Why choose us?
          </h2>
        </div>

        {/* Features Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-lg ">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
      {/* Why Choose Us Ends */}

      {/* Offer of this month start */}
      <div className="w-full bg-white p-6">
        {/* Title Section */}
        <div className="mb-4 text-center">
          <h2 className="text-4xl font-semibold">Offer of this month</h2>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 mb-10">
          sdfghjkl;lkshgfkscvqbjckxlvbghfjsgrsnfhdikglojdfasxzdgfjhklhljgrsedazsDFHLJHKGHRESDAWqsdaufetylukjfsfdazsctsbghmjklhnfbqdcvdsxzvbmnbvcxz
        </p>

        {/* Offer Card Section */}
        <div className="w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
          <Image
            src={escaladeImage}
            alt="Cadillac Escalade"
            layout="responsive"
            width={1200}
            height={500}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Offer of this month ends */}
      <div className="relative w-full max-w-6xl h-[100px] bg-red-400 rounded-lg overflow-hidden mx-auto mt-10 p-6">
        {/* Logo/Text */}
        <div className="absolute top-6 left-6">
          <h2 className="text-6xl font-bold text-white">S6K</h2>
        </div>
      </div>
    </div>
  );
}
