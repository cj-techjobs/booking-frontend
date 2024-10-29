import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import homeImage from "/src/assets/propertySvg/homeSvg.svg";
import Sidebar from "../../components/Property/Sidebar";
import { fetchFilteredProperties } from "../api/api";
import { FaBed, FaBath } from 'react-icons/fa';
import { CiGlobe } from "react-icons/ci";

const Properties = () => {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for MinPrice and MaxPrice
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(200000);
  // Helper function to parse numberOfRoomDetails
  const parseRoomDetails = (details) => {
    const rooms = {};
    details.split(',').forEach((item) => {
      const [count, ...typeParts] = item.trim().split(' ');
      const type = typeParts.join(' ');
      rooms[type] = count;
    });
    return rooms;
  };


  const fetchProperties = async () => {
    try {
      setLoading(true);
      const data = await fetchFilteredProperties(minPrice, maxPrice);
      setProperties(data || []);
      console.log("Form UI", data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [minPrice, maxPrice]); // Re-fetch properties whenever minPrice or maxPrice changes

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 w-full">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:pr-6 mb-6 md:mb-0">
        <Sidebar minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      </div>

      {/* Main content */}
      <div className="pt-6 px-4 w-full md:w-3/4">
        {properties?.length === 0 && !loading ? (
          <div className="text-center text-red-500 font-semibold">
            No properties exist for the applied filter
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {properties?.map((item) => {
              const roomDetails = parseRoomDetails(item.numberOfRoomDetails);

              return (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white flex flex-col sm:flex-row gap-4"
                >
                  {/* Image */}
                  <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4">
                    <Image
                      src={item.image || homeImage}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>

                  {/* Property Details */}
                  <div className="w-full sm:w-2/3 md:w-3/4 lg:w-2/3 xl:w-3/4 flex flex-col justify-center">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">INR {item.propertyPrice}</h2>
                      <p className="mt-2 text-lg">{item.propertyTitle}</p>

                      <div className="flex flex-wrap gap-4 text-gray-600 mt-2">
                        <div className="flex items-center gap-1">
                          <FaBed /> {roomDetails.bedrooms || item.bedrooms} Bedrooms
                        </div>
                        <div className="flex items-center gap-1">
                          <FaBath /> {roomDetails.bathrooms || item.bathrooms} Bathrooms
                        </div>
                        <div className="flex items-center gap-1">
                          <CiGlobe /> {item.bhkType} sqft
                        </div>
                      </div>

                      <div className="mt-2">
                        <p>{item.propertyDescription}</p>
                      </div>

                      <div className="flex gap-4 mt-5 flex-row flex-wrap">
                        <button
                          onClick={() => router.push(`/property/${item._id}`)}
                          className="bg-gray-200 border font-bold py-2 px-4 rounded-lg"
                        >
                          Get Location
                        </button>
                        <button
                          onClick={() => router.push(`/property/${item._id}`)}
                          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                        >
                          Chat Seller
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
