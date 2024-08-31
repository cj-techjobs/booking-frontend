import Image from "next/image";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6"
import Cars from '../../assets/settingsModalSvg/Cars.png'
import property from '../../assets/settingsModalSvg/property.png'
import Mobile from '../../assets/settingsModalSvg/Mobile.png';
import Electronics from '../../assets/settingsModalSvg/Electronics.png';
import Books from '../../assets/settingsModalSvg/Books.png';
import bikes from '../../assets/settingsModalSvg/bikes.png';
import Sports from '../../assets/settingsModalSvg/Sports.png';
import Homedecor from '../../assets/settingsModalSvg/Homedecor.png';
import Clothing from '../../assets/settingsModalSvg/Clothing.png';
import accesories from '../../assets/settingsModalSvg/accesories.png';
import pet from '../../assets/settingsModalSvg/pet.png';
import vaca from '../../assets/settingsModalSvg/vaca.png';
import job from '../../assets/settingsModalSvg/job.png';

const Category = () => {

    return (
        <div className="p-[22px]">
            <div className="text-[#000] font-semibold text-[20px] mb-4">Choose Category</div>
            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[10px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Cars} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Cars & Vechiles</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={property} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Property</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Mobile} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Mobile</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Electronics} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Electronics</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Books} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Books</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={bikes} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Bikes</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Sports} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Sports</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Homedecor} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Home decor  & Furniture</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={Clothing} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Clothing</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={accesories} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Accessories</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={pet} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Pets</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[15px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={vaca} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Vacation</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>

            <div className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[5px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image src={job} />
                    <h1 className="text-[16px] font-medium text-[#070000]">Jobs</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>
        </div>
    )
}

export default Category
