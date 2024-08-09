import React, { useState } from "react";
import Modal from "/src/components/Modal.jsx";
import Image from "next/image";
import uploadSvg from "/src/assets/homeModalSvg/uploadSvg.svg";

const SellItem = () => {
  const [isActive, setIsActive] = useState("Sell");

  return (
    <div className="p-4">
      <div className="text-[48px] text-center">
        Sell an <span className="text-red-500">item</span>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <div className="shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] items-center justify-center rounded-md flex w-fit">
          <div
            className={`px-6 py-1 rounded-md cursor-pointer ${
              isActive === "Sell"
                ? "bg-red-500 text-white"
                : "bg-[#FAFAFA] rounded-l-md"
            }`}
            onClick={() => setIsActive("Sell")}
          >
            Sell
          </div>
          <div
            className={`px-6 py-1 rounded-md cursor-pointer ${
              isActive === "Rent"
                ? "bg-red-500 text-white"
                : "bg-[#FAFAFA] rounded-r-md"
            }`}
            onClick={() => setIsActive("Rent")}
          >
            Rent
          </div>
        </div>
      </div>
      <div>
        <form>
          <div className="flex gap-5 flex-col">
            <div>
              <label className="text-xl">What are you selling</label>
              <input
                type="text"
                className="outline-none placeholder:text-sm appearance-none border-b-2 border-black w-full"
                placeholder="Text here*"
              />
            </div>
            <div>
              <label className="text-xl">Description</label>
              <input
                type="text"
                className="outline-none placeholder:text-sm appearance-none border-b-2 border-black w-full"
                placeholder="Text here*"
              />
            </div>
            <div>
              <label className="text-xl">Reason on selling</label>
              <input
                type="text"
                className="outline-none placeholder:text-sm appearance-none border-b-2 border-black w-full"
                placeholder="Text here*"
              />
            </div>
            <div>
              <label className="text-xl">Brand Name</label>
              <input
                type="text"
                className="outline-none placeholder:text-sm appearance-none border-b-2 border-black w-full"
                placeholder="Text here*"
              />
            </div>
            <div>
              <label className="text-xl">Age</label>
              <input
                type="text"
                className="outline-none placeholder:text-sm appearance-none border-b-2 border-black w-full"
                placeholder="Text here*"
              />
            </div>
            <div>
              <label className="text-xl">Purchase Rate</label>
              <input
                type="text"
                className="outline-none placeholder:text-sm appearance-none border-b-2 border-black w-full"
                placeholder="Text here*"
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="cursor-pointer">
                <label htmlFor="upload-file" className="cursor-pointer">
                  <Image
                    src={uploadSvg}
                    alt="upload-Image"
                    height={100}
                    width={100}
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="upload-file"
                  className="absolute opacity-0 -z-20"
                />{" "}
                <span className="text-xs tracking-tighter left-[140px] font-bold absolute">
                  click and upload
                </span>
              </div>
              <div className="px-16 py-2 rounded-xl bg-[#F8F8F8] shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] mt-8">
                <button className="text-red-500 text-2xl">Upload</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellItem;
