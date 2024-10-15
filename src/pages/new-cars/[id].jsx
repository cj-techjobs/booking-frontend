import { useRouter } from "next/router";
import Image from "next/image";
import carImage from "/src/assets/carsSvg/baleno.png";
import roundView from "/src/assets/carsSvg/360View.png";
import carLoading from "/src/assets/carsSvg/loadingCar.png";
import fullImage from "/src/assets/carsSvg/fullImage.png";

import Accordian from "../../components/NewCars/Accordian";
import Variants from "../../components/NewCars/Variants";
import { useState } from "react";
import LocationPopup from "../../components/NewCars/LocationPopup";


export default function Home() {
  const router = useRouter();
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const handleLocationClick = () => {
    console.log("handleLocationClick")
    setShowLocationPopup(true);
  };
  const handleTestDriveClick = () => {
    router.push("/testdrive");
  };

  const handleClosePopup = () => {
    setShowLocationPopup(false);
  };
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
      <div className="  rounded-lg  p-6">
        {/* Car Image Section */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3  relative">
            <div className="relative">
              <Image
                src={carImage}
                alt="Maruti Suzuki Baleno"
                height={400}
                className="rounded-md w-full h-auto"
              />
              {/* Thumbnails positioned at the bottom center */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-2 rounded-lg flex space-x-4 shadow-lg mb-2">
                <Image
                  src={roundView}
                  alt="Thumbnail 1"
                  width={100}
                  height={100}
                  className="border rounded"
                />
                <Image
                  src={carLoading}
                  alt="Thumbnail 2"
                  width={100}
                  height={100}
                  className="border rounded"
                />
                <Image
                  src={fullImage}
                  alt="Thumbnail 3"
                  width={100}
                  height={100}
                  className="border rounded"
                />
              </div>
            </div>
            {/* Color Options Section */}
            <div className="flex flex-col items-start bg-white rounded-lg p-4  mt-10">
              <p className="font-semibold text-xl mb-4">Color: Color 1</p>
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <Image
                    src='/images/sample-car1.png'
                    alt="Color 1"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="text-sm text-gray-700 mt-2">Color 1</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src='/images/sample-car1.png'
                    alt="Color 2"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="text-sm text-gray-700 mt-2">Color 2</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src='/images/sample-car1.png'
                    alt="Color 3"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="text-sm text-gray-700 mt-2">Color 3</p>
                </div>
              </div>
            </div>
            {/* Other Variants Available Section */}
            <Variants />
          </div>
          {/* Right Section with Details */}
          <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0 bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold">2022 Maruti Suzuki Baleno Zeta AMT Petrol</h2>
            <p className=" mt-2 ">10K km · Petrol · Automatic</p>

            {/* Price and EMI Info */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className='text-xl'>EMI Available</p>
              <div className="bg-red-500 text-white py-2 px-4 text-xl rounded-lg shadow-lg">
                <p className="text-sm uppercase">emi start from</p>
                <p className="text-xl ">₹10,000/Month</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex mt-6  items-center justify-between gap-4">
              <button className="bg-white text-xl hover:bg-gray-300 text-red-600 font-semibold py-3 px-4 rounded shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] ">
                Book Now
              </button>
              <button className="bg-red-500 text-xl  hover:bg-red-600 text-white  font-semibold py-3 px-4 rounded shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] "    onClick={handleTestDriveClick} >
                Book Test Drive
              </button>
            </div>

            {/* Location */}
            <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md max-w-lg my-4">
              <div className="w-1/2">
                <p className="text-xl font-bold text-black">1 Oct, 2024</p>
                <p className="text-purple-600 mt-2 text-sm">Get free test drive at your desired location</p>
              </div>
              <div  onClick={handleLocationClick} className="cursor-pointer">
                <Image src="/images/location-icon.png" alt="Location Icon" width={50} height={50} />
              </div>
            </div>

            {/* Price Breakup */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3">Price Breakup</h4>

              {/* Price Breakdown Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-500">Ex Showroom</p>
                  <p className="font-semibold text-gray-500">₹7,99,990</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Registration Amount</p>
                  <p className="font-semibold text-gray-500">₹60,949</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Dealer Insurance Premium</p>
                  <p className="text-gray-500 font-semibold">₹38,960</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Fast Tag</p>
                  <p className="text-gray-500 font-semibold">₹800</p>
                </div>
                <div className="flex justify-between mt-10">
                  <p className="text-gray-500 text-sm w-1/2">Includes RC transfer, insurance, fixes, upgrades & more</p>
                  {/* <p className="text-gray-500 font-semibold">₹800</p> */}
                  <p className="text-red-500 text-2xl font-bold">₹8,50,000</p>
                </div>
              </div>

              {/* Additional Information */}
              {/* <p className="mt-4 text-gray-500 text-sm">
                Includes RC transfer, insurance, fixes, upgrades & more
              </p> */}

              {/* Total Price */}
              {/* <div className="mt-2 flex justify-end">
                <p className="text-red-500 text-2xl font-bold">₹8,50,000</p>
              </div> */}
            </div>

          </div>
        </div>

        {/* Accordion Section  and key specifcation*/}
        <Accordian />

         {/* Location Popup */}
      {showLocationPopup && <LocationPopup onClose={handleClosePopup} />}
      </div>
    </div>
  );
}
