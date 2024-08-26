"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CardBg from "../../assets/policyIcons/basicCardBg.svg";

const Step = () => {
  const router = useRouter();
  const { step } = router.query;

  useEffect(() => {
  }, [router]);

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

      <div className="flex items-center justify-center">
        {Number(step) === 1 && (
          <div
            className="max-w-[340px] max-h-[415px] h-[100%] p-4 relative"
            style={{
              backgroundImage: `url('${CardBg.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `100% 100%`,
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name">name</label>
                <input type="text" placeholder="Entet name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Date of birth</label>
                <div className="flex">
                  <input
                    className="flex-1 w-max"
                    type="number"
                    placeholder="DD"
                  />
                  <input
                    className="flex-1 w-max"
                    type="number"
                    placeholder="MM"
                  />
                  <input
                    className="flex-2 w-max"
                    type="number"
                    placeholder="YYYY"
                  />
                </div>
              </div>
              <div>
                <button type="submit">Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step;
