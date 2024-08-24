import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import matrimonyData from "../../data/matrimonalData";
import Link from "next/link";

const Matrimony = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(matrimonyData);
    console.log(data);
  }, []);

  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-4">
        {data.map((m, i) => (
          <Link href={`/matrimony/${m.id}`}>
            <div
              key={i}
              className="flex gap-4  shadow-[0px_5px_5px_0px_rgba(0,0,0,0.25)] rounded-[1.5rem] p-1.5 pr-6"
            >
              <div>
                <img src={m.profile.src} alt="" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-4xl">{m.name}</p>
                <p className="text-red-500 font-bold text-2xl">{m.age}</p>
                <div className="flex justify-between">
                  <p>{m.profession}</p>
                  <p>{m.interest}</p>
                </div>
                <div className="flex justify-between">
                  <p>{m.location}</p>
                  <p>{m.distance}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Matrimony;
