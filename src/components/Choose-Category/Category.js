import Image from "next/image";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6"
import { category } from "../../utils";

const Category = () => {

    return (
        <div className="p-[22px]">
            <div className="text-[#000] font-semibold text-[20px] mb-4">Choose Category</div>
            {category.map((items, index) => (
                <div key={index} className=" cursor-pointer hover:translate-x-2 duration-200 flex mb-[10px] items-center justify-between">
                <div className="flex gap-[1rem] items-center">
                    <Image alt="images" src={items?.image} />
                    <h1 className="text-[16px] font-medium text-[#070000]">{items?.title}</h1>
                </div>
                <FaChevronRight className="text-[]" />
            </div>
            ))}
        </div>
    )
}

export default Category
