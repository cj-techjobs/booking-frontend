"use client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import matrimonyData from "../../data/matrimonalData";
import Image from "next/image";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (matrimonyData) {
      let data = matrimonyData.filter((f) => f.id == id);
      if (data) {
        setUserData(data);
      }
    }
  }, [router, id]);
  return (
    <div className="container mx-auto mt-2">
      {userData.map((m, i) => (
        <div key={i} className="flex gap-24">
          <div className="flex-1 flex flex-col gap-24">
            <div className="flex flex-col gap-4">
              <div>
                <Image
                  className="w-[100%] h-[30rem]"
                  src={m?.profile_full?.src || m?.profile?.src}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold">{m.name}</p>
                <div>
                  <p className="text-xl font-bold text-red-500">{m.age}</p>
                  <p className="text-xl font-bold">{m.location}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={() => router.push('/message')} className="px-2 py-2 w-[80%] mx-auto text-xl text-center bg-[#EFEFEF] shadow-[0px_3px_2px_0px_rgba(255,0,0,0.25)] rounded-lg">
                Chat Now
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-2xl font-bold">Bio</h2>
            <p className="font-bold max-w-[50%]">
              {m.bio ||
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo`}
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Date of Birth - {m.dob || "-"}</p>
              <p className="font-bold">Caste - {m.caste || "-"}</p>
              <p className="font-bold">Gotra - {m.gorta || "-"}</p>
              <p className="font-bold">Education - {m.profession || "-"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Id;
