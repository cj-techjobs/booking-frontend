// import Image from "next/image";
// import React from "react";

// //car Image
// import carImage from "/src/assets/carsSvg/baleno.png";
// import roundView from "/src/assets/carsSvg/360View.png";
// import carLoading from "/src/assets/carsSvg/loadingCar.png";
// import fullImage from "/src/assets/carsSvg/fullImage.png";

// //material icons
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

// //car specificaiton data
// import { carSpecification, carOverview } from "../../../utils";

// const CarItem = () => {
//   return (
//     <div className="container mx-auto mt-4 bg-white">
//       <div className="xl:grid xl:grid-cols-2 gap-4 grid grid-cols-1">
//         <div className="flex flex-col items-center">
//           <div className="md:w-[527px] w-[400px] xl:w-full">

//           <div className="mb-7 flex justify-center">
//             <Image src={carImage} height={298} width={544} alt="" />
//           </div>
//           <div className="">
//             <div className="border rounded-md border-gray-200 p-2 mb-2">
//               <div className="flex items-center justify-center gap-3">
//                 <Image src={roundView} height={98} width={135} alt="" />
//                 <Image src={carLoading} height={98} width={135} alt="" />
//                 <Image src={fullImage} height={98} width={135} alt="" />
//               </div>
//               <div className="text-3xl w-4/5 mt-3">
//                 2022 Maruti Suzuki Baleno Zeta AMT Petrol
//               </div>
//               <div className="mt-4 gap-1 flex flex-col">
//                 <div className="text-base font-medium">
//                   10K km : Petrol : Automatic
//                 </div>
//                 <div className="text-xs">
//                   <HomeRoundedIcon className="text-gray-400" fontSize="small" />{" "}
//                   Home Test Drive : Available
//                 </div>
//                 <div className="text-xs">
//                   <LocationOnRoundedIcon
//                     className="text-gray-400"
//                     fontSize="small"
//                   />{" "}
//                   Deoghar, Jharkhand
//                 </div>
//                 <div className="text-xs ms-6">
//                   <span className="text-purple-400">Assured</span> know more{" "}
//                 </div>
//               </div>
//               <div className="flex items-end justify-end z-20">
//                 <div className="text-red-500 text-2xl cursor-pointer px-12 bg-white py-2 rounded-xl w-fit shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
//                   Bid Now
//                 </div>
//               </div>
//               <div className="border rounded-md border-gray-200 -mt-2 p-2">
//                 <div className="text-3xl px-4">Price</div>
//                 <div className="flex items-center justify-between px-4">
//                   <div className="w-2/3">
//                     Includes RC transfer, insurance, fixes, upgrades & more
//                   </div>
//                   <div className="text-red-500 text-2xl">₹3,50,000</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-center gap-3">
//           <div className="w-[400px] md:w-[527px] xl:full ">
//             <div className="border border-gray-200 rounded-lg p-2 mb-4">
//               <div className="text-2xl mb-2">Car Overview</div>
//               <div className="flex flex-col gap-3">
//                 <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
//                   <div className="flex flex-col text-lg">
//                     <span className="text-gray-400 text-xs">Make Year</span>
//                     Nov 2022
//                   </div>
//                   <div className="flex flex-col col-span-2 text-lg">
//                     <span className="text-gray-400 text-xs">Reg. Year</span>
//                     Nov 2022
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
//                   <div className="flex flex-col text-lg">
//                     <span className="text-gray-400 text-xs">Fuel</span>
//                     Petrol
//                   </div>
//                   <div className="flex flex-col col-span-2 text-lg">
//                     <span className="text-gray-400 text-xs">Km driven</span>
//                     10K km
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
//                   <div className="flex flex-col text-lg">
//                     <span className="text-gray-400 text-xs">Transmission</span>
//                     Automatic {"("}AMT{")"} @
//                   </div>
//                   <div className="flex flex-col col-span-2 text-lg">
//                     <span className="text-gray-400 text-xs">
//                       No. of Owner{"("}s{")"}
//                     </span>
//                     1st Owner
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
//                   <div className="flex flex-col text-lg">
//                     <span className="text-gray-400 text-xs">
//                       Insurance Validity
//                     </span>
//                     Nov 2024
//                   </div>
//                   <div className="flex flex-col col-span-2 text-lg">
//                     <span className="text-gray-400 text-xs">
//                       Insurance Type
//                     </span>
//                     Comprehensive
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-3 border border-gray-200 rounded-lg p-1 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)]">
//                   <div className="flex flex-col text-lg">
//                     <span className="text-gray-400 text-xs">RTO</span>
//                     MH47
//                   </div>
//                   <div className="flex flex-col col-span-2 text-lg">
//                     <span className="text-gray-400 text-xs">Car Location</span>
//                     Deoghar,Jharkhand
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="border border-gray-200 rounded-lg p-2 w-full">
//               <div className="text-2xl mb-2">Car Specifications</div>
//               <div className="flex flex-col">
//                 {carSpecification?.map((items) => (
//                   <div
//                     key={items?.id}
//                     className="flex border border-gray-200 rounded-lg p-1"
//                   >
//                     <Image src={items?.icon} alt="milage" className="me-2" />
//                     <div className="flex flex-col text-lg">
//                       <span className="text-gray-400 text-xs">
//                         {items?.title}
//                       </span>
//                       {items?.data}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarItem;
// pages/index.js
import Image from 'next/image';
import { carSpecification, carOverview } from "../../../utils";
import carImage from "/src/assets/carsSvg/baleno.png";
import roundView from "/src/assets/carsSvg/360View.png";
import carLoading from "/src/assets/carsSvg/loadingCar.png";
import fullImage from "/src/assets/carsSvg/fullImage.png";
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
      <div className="  rounded-lg  p-6">
        {/* Car Image Section */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3  relative">
            <Image
              src={carImage}
              alt="Maruti Suzuki Baleno"
              height={400}
              className="rounded-md w-full h-auto"
            />

            {/* Thumbnails positioned at the bottom center */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-2 rounded-lg flex space-x-4 shadow-lg mb-2">
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
              <button className="bg-red-500 text-xl  hover:bg-red-600 text-white  font-semibold py-3 px-4 rounded shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] ">
                Book Test Drive
              </button>

            </div>

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

        {/* Key Specifications */}
        <div className="flex flex-col justify-center bg-white rounded-lg p-4 mt-10 md:w-2/3">
          <p className="font-semibold text-xl mb-5">Key Specification</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {carSpecification?.map((items) => (
              <div key={items?.id} className="flex items-center space-x-3 p-2">
                <Image src={items?.icon} alt={items?.title} className="w-10 h-10" />
                <div className="flex flex-col text-lg">
                  <span className="text-gray-400 text-sm">
                    {items?.title}
                  </span>
                  {items?.data}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
