import React, { useEffect, useState } from "react";
import city1 from "../../assets/images/city1.svg";
import city2 from "../../assets/images/city2.svg";
import city3 from "../../assets/images/city3.svg";
import city4 from "../../assets/images/city4.svg";
import city5 from "../../assets/images/city5.svg";
import city6 from "../../assets/images/city6.svg";
import city7 from "../../assets/images/city7.svg";
import city8 from "../../assets/images/city8.svg";
import Link from "next/link";

import MovieData from "./../../data/movieData";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const cities = [
      {
        title: `Mumbai`,
        bgImage: city1,
      },
      {
        title: `Delhi`,
        bgImage: city2,
      },
      {
        title: `Bengaluru`,
        bgImage: city3,
      },
      {
        title: `Hyderabad`,
        bgImage: city4,
      },
      {
        title: `Kolkata`,
        bgImage: city5,
      },
      {
        title: `Jaipur`,
        bgImage: city6,
      },
      {
        title: `Chennai`,
        bgImage: city7,
      },
      {
        title: `Pune`,
        bgImage: city8,
      },
    ];
    setCity(cities);
    setMovies(MovieData);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="container-full flex gap-8 min-h-screen">
        <div className="basis-1/4 w-full">
          <div className="border-y">
            <div>
              <i></i>
            </div>
            <input
              type="text"
              className="p-[0.8rem] w-full"
              placeholder="Search for your city"
            />
          </div>
          <button className="flex text-[#eb4e63] p-[1rem]">
            <div></div>
            Fetch from device
          </button>
          <div className="p-[1rem] bg-[#f5f5f5] h-full">
            <p className="uppercase">popular cities</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {city.length > 0 &&
                city.map((m, i) => (
                  <div key={i} className="basis-1/3 rounded-xl">
                    <div
                      style={{
                        backgroundImage: `url(${m.bgImage.src})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `100% 100%`,
                      }}
                      className="w-full min-w-[5rem] h-full min-h-[6rem] z-20 flex items-end justify-center"
                    >
                      <p className="font-bold text-lg text-white mb-2">
                        {m.title}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 basis-3/4 h-max">
          {movies.map((m, i) => (
            <Link key={i} href={"/movies/view?id=" + m.id} className="h-full">
              <div className="shadow-lg rounded-lg cursor-pointer flex flex-col">
                <div className="flex flex-1">
                  <img src={m.imageUrl.src} alt="" />
                </div>
                <div className="flex justify-between p-4 gap-4">
                  <p className="">{m.title}</p>
                  <p className="bg-[#b5f995] h-max px-2 rounded-md whitespace-nowrap">
                    {m.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
