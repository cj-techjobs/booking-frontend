import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MovieData from "../../../data/movieData";
import Image from "next/image";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      const data = MovieData.filter((f) => f.id === id)[0];
      console.log(data);
      setMovie(data);
    }
  }, [id, router]);

  const max = 100;
  return (
    <div className="container mx-auto">
      <div className="bg-[#e9e9e9] h-full rounded-[4rem] pb-12 mb-12">
        <div className="w-full">
          {movie && movie.imageUrl && (
            <Image className="w-full" width={max} height={max} src={movie.imageUrl.src} alt="" />
          )}
        </div>
        <div className="flex w-full h-full -mt-16">
          <div className="w-[90%] mx-auto bg-white p-8 rounded-2xl flex">
            <div className="basis-2/3">
              {
                <p className="bg-[#2b3149] w-max px-2 rounded-md text-white">
                  {movie?.category}
                </p>
              }
              {<p className="text-[48px]">{movie?.title}</p>}
              {<p className="text-lg bg-white">{movie?.details?.dateTime}</p>}
              {<p className="text-lg bg-white">{movie?.details?.duration}</p>}
              {<p className="text-lg bg-white">{movie?.details?.language}</p>}
              {<p className="text-lg bg-white">{movie?.details?.location}</p>}
            </div>
            <div className="basis-1/3 flex flex-col justify-between gap-4">
              <div className="rounded-lg p-4 bg-[#f2f5f9] flex items-center justify-between">
                <div>
                  <p>802 are interested</p>
                  <p>Mark interested to know more about this event</p>
                </div>
                <div>
                  <button className="border border-[#eb4e63] p-2 rounded-md text-[#eb4e63]">
                    Interested
                  </button>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h2 className="text-xl">Artist</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {movie?.cast &&
                    movie?.cast?.map((m, i) => (
                      <div key={i}>
                        <div className="border h-24 w-32 rounded-lg"></div>
                        <p>{m.name}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p>Rs 600 onwards</p>
                  <p>Filing Fast</p>
                </div>
                <div>
                  <button className="bg-[#eb4e63] text-white rounded-md p-2 px-4">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
