"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CardBg from "../../assets/policyIcons/basicCardBg.svg";
import Link from "next/link";

const Step = () => {
  const router = useRouter();
  const { step } = router.query;

  useEffect(() => {}, [router]);

  return (
    <div className="container-full mx-auto bg-[#171717] h-[100vh]">
      <div className="shadow-[0px_5px_5px_0px_rgba(255,0,0,0.25)] py-8 rounded-b-2xl bg-[#313131]">
        <h2 className="text-center text-2xl font-bold text-white">
          {Number(step) === 1
            ? "Basic Details"
            : Number(step) === 2
            ? "Contact Details"
            : "Insurance"}
        </h2>
      </div>

      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <div
          className={`${
            Number(step) === 3 ? "h-[415px] w-[360px]" : "h-[320px] w-[300px]"
          } p-4 relative`}
          style={{
            backgroundImage: `url('${CardBg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `100% 100%`,
          }}
        >
          {Number(step) === 1 && (
            <div className="flex flex-1 h-[100%] justify-between flex-col gap-4">
              <div className="flex justify-between flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                    placeholder="Enter name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Date of birth
                  </label>
                  <div className="flex gap-4">
                    <input
                      className="w-[25%]  rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                      type="number"
                      placeholder="DD"
                    />
                    <input
                      className="w-[25%]  rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                      type="number"
                      placeholder="MM"
                    />
                    <input
                      className="w-[50%]  rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                      type="number"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href={"/policy/2"}>
                  <button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-lg px-16 text-white text-xl"
                    type="submit"
                  >
                    Next
                  </button>
                </Link>
              </div>
            </div>
          )}
          {Number(step) === 2 && (
            <div className="flex flex-1 h-[100%] justify-between flex-col gap-4">
              <div className="flex justify-between flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Email
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Phone No
                  </label>
                  <div className="flex gap-4">
                    <input
                      className="w-[25%]  rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                      type="text"
                      value={`+91`}
                      placeholder="MM"
                    />
                    <input
                      className="w-[75%]  rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                      type="number"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href={"/policy/3"}>
                  <button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-lg px-16 text-white text-xl"
                    type="submit"
                  >
                    Next
                  </button>
                </Link>
              </div>
            </div>
          )}
          {Number(step) === 3 && (
            <div className="flex flex-1 h-[100%] justify-between flex-col gap-4">
              <div className="flex justify-between flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Required Details 1
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                    placeholder="Enter here"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Required Details 2
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                    placeholder="Enter here"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">
                    Required Details 3
                  </label>
                  <input
                    type="text"
                    className="rounded-lg bg-[#D9D9D9CC] text-xl p-2"
                    placeholder="Enter here"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Link href={"/policy/3"}>
                  <button
                    onClick={() => {
                      alert("Done");
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-lg px-16 text-white text-xl"
                    type="submit"
                  >
                    Done
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step;
