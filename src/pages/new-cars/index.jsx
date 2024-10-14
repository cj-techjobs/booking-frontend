import Image from "next/image";
import tataLogo from "/public/images/tata-logo.png"; // Import your logos
import volksLogo from "/public/images/volks-logo.png";
import bmwLogo from "/public/images/bmw-logo.png";
import hyundaiLogo from "/public/images/hyundai-logo.png";
import hondaLogo from "/public/images/honda-logo.png";
import carComparisonImage from '/public/images/car-comparison.png';
import hatchbackIcon from "/public/images/hatchback-icon.png";
import suvIcon from "/public/images/suv-icon.png";
import carImage from "/public/images/sample-car.png";
import carImage1 from "/public/images/sample-car1.png";
import carImage2 from '/public/images/sample-car2.png';
import carImage3 from '/public/images/sample-car3.png';
import carImage4 from '/public/images/carImage4.png';
import carImage5 from '/public/images/carImage5.png';
import carImage6 from '/public/images/carImage6.png';
import carImage7 from '/public/images/carImage7.png';
import bookingIcon from '/public/images/booking-icon.png'; 
import { useRouter } from 'next/router';
import testDriveIcon from '/public/images/test-drive-icon.png';
import qualityIcon from '/public/images/quality-icon.png';
import paymentIcon from '/public/images/payment-icon.png';
import escaladeImage from '/public/images/cadillac-escalade.png';
function CarBrandCard({ imageSrc, brandName }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/brand/${brandName.toLowerCase().replaceAll(" ", "-")}`);
  };
 
  return (
    <div
    onClick={handleClick}
    className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-md rounded-lg p-4"
  >
    <Image
      loading="lazy"
      src={imageSrc}
      alt={`${brandName} logo`}
      className="object-contain self-center max-w-full aspect-[1.59] w-[153px] mb-2"
    />
    <h2 className="text-xl font-semibold text-black">{brandName}</h2>
  </div>
  
  );
}

export default function NewCars() {
  const router = useRouter();
  const handleCarType = (carType) => {
    console.log(carType)
    router.push(`/body/${carType.toLowerCase()}`);
  };
  const handlePricingClick = (carName) => {
    router.push(`/pricing/${carName}`);
  };
  const carBrands = [
    { imageSrc: tataLogo, brandName: "TATA MOTORS" },
    { imageSrc: volksLogo, brandName: "VOLKSWAGEN" },
    { imageSrc: bmwLogo, brandName: "BMW" },
    { imageSrc: hyundaiLogo, brandName: "HYUNDAI" },
    { imageSrc: hondaLogo, brandName: "HONDA" },
  ];
  const carTypes = [
    { imageSrc: hatchbackIcon, name: "Hatchback" },
    { imageSrc: suvIcon, name: "SUV" },
    { imageSrc: hatchbackIcon, name: "Sedan" },
    { imageSrc: suvIcon, name: "Convertible" },
    { imageSrc: suvIcon, name: "Coupe" },
  ];
  const featuredCars = [
    { imageSrc: carImage, name: "Mahindra Thar", price: "Rs. 15.5 lakh" },
    { imageSrc: carImage1, name: "Tata Nexon", price: "Rs. 12.7 lakh" },
    { imageSrc: carImage, name: "Hyundai Verna", price: "Rs. 13.4 lakh" },
    {
      imageSrc: carImage1,
      name: "Maruti Suzuki Brezza",
      price: "Rs. 10.5 lakh",
    },
  ];
  // Sample array of car types for filter tabs
  const carTypes1 = ["Sedan", "SUV", "Hatchback", "Coupe"];
  const mostlySearchedCars = [
    {
      imageSrc: carImage2,
      name: "Car name",
      details: "Sedan | 2000 CC | 250 BHP | Automatic",
      price: "Rs. xx Lakh",
    },
    {
      imageSrc: carImage3,
      name: "Car name",
      details: "SUV | 2500 CC | 300 BHP | Automatic",
      price: "Rs. xx Lakh",
    },
    {
      imageSrc: carImage2,
      name: "Car name",
      details: "Hatchback | 1200 CC | 150 BHP | Manual",
      price: "Rs. xx Lakh",
    },
    {
      imageSrc: carImage3,
      name: "Car name",
      details: "Coupe | 3000 CC | 350 BHP | Automatic",
      price: "Rs. xx Lakh",
    },
  ];
  // Sample data for car price tabs and car details
  const priceRanges = ["1-5 Lakh", "5-10 Lakh", "10-20 Lakh", "20-30 Lakh", "30-40 Lakh", "40-50 Lakh", "50-60 Lakh", "1 Crore+"];
  const carData = [
    { imageSrc: carImage5, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { imageSrc: carImage6, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
    { imageSrc: carImage7, name: "Car name with model", priceRange: "Rs XX lakh - XX lakh" },
  ];
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
      <div
        className="w-full h-48 flex items-center justify-center mb-10 rounded-lg"
        style={{ backgroundColor: "#8DAB82" }}
      >
        <p className="text-3xl font-bold text-black">ad</p>
      </div>

      {/* Shop by Brands Section */}
      <div className="text-center mb-4 w-full">
        <h2 className="text-xl font-semibold">
          Shop by <span className="text-red-500">Brands</span>
        </h2>
      </div>
      <section className="grid grid-cols-5 gap-6 w-full px-4">
        {carBrands.map((brand, index) => (
          <CarBrandCard
            key={index}
            imageSrc={brand.imageSrc}
            brandName={brand.brandName}
          />
        ))}
      </section>

      {/* Select your type Section */}
      <div className="text-center mb-4 w-full mt-10">
        <h2 className="text-xl font-semibold">
          Select your <span className="text-red-500">type</span>
        </h2>
      </div>

      <div className="flex items-center justify-around w-full ">
        {carTypes.map((car, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer"   onClick={() => handleCarType(car.name)}>
            <Image src={car.imageSrc} alt={car.name} width={94} height={94} />
            <p className=" text-md font-semibold text-black">{car.name}</p>
          </div>
        ))}
      </div>

      {/* Featured Cars Section  Start*/}
      <div className="mt-10">
        <h2 className="text-2xl text-left font-semibold border-l-4 border-red-500 pl-2">
          Featured Cars
        </h2>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-6 mt-4">
        <button className="px-4 py-2 bg-white text-black rounded-full hover:text-gray-500">
          Latest
        </button>
        <button className="px-4 py-2 text-gray-400 rounded-full hover:text-gray-500">
          Upcoming
        </button>
        <button className="px-4 py-2 text-gray-400 rounded-full hover:text-gray-500">
          Bestseller
        </button>
      </div>

      {/* Cars Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        {featuredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={car.imageSrc}
              alt={car.name}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-md text-gray-700">{car.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Cars Section  Ends*/}

      {/* Car Comparision Section Starts */}
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
      {/* Car Comparision Section Ends */}
      {/* Ad Section */}
      <div
        className="w-full h-48 flex items-center justify-center mt-10 rounded-lg"
        style={{ backgroundColor: "#8DAB82" }}
      >
        <p className="text-3xl font-bold text-black">ad</p>
      </div>


      {/* Mostly Searched Cars Start */}
      <div className=" w-full mb-10 p-6">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
            Mostly searched <span className="text-red-500">Cars</span>
          </h2>
        </div>

        {/* Car Types Tabs Section */}
        <div className="flex space-x-6 mb-8">
          {carTypes1.map((type, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-300 transition duration-300`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Cars Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mostlySearchedCars.map((car, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden"
            >
              {/* Car Image */}
              <Image
                src={car.imageSrc}
                alt={car.name}
                width={400}
                height={200}
                className="w-full object-cover"
              />
              {/* Car Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-700 mb-4">{car.details}</p>
                <p className="text-lg text-red-500 font-bold">{car.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* Mostly Searched Cars Ends */}

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

      {/* Shop Car By Category Starts */}
      <div className=" w-full bg-white p-6">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-2">
            Shop cars by price
          </h2>
        </div>

        {/* Price Range Tabs Section */}
        <div className="flex space-x-6 mb-8 overflow-x-auto">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300 ${index === 0 ? "text-red-500 underline underline-offset-4" : ""
                }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Cars Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {carData.map((car, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden">
              {/* Car Image */}
              <Image
                src={car.imageSrc}
                alt={car.name}
                width={400}
                height={200}
                className="w-full object-cover"
              />
              {/* Car Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-700 mb-4">{car.priceRange}</p>
                <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"    onClick={() => handlePricingClick(car.name)}>
                  Get Pricing
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* Shop Car By Category Ends */}


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
