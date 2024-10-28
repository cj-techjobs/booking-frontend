import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import homeImage from "/src/assets/propertySvg/homeSvg.svg";
import Sidebar from "../../components/Property/Sidebar";
import { getAllPropertyData } from "../api/api";
import { FaBed, FaBath } from 'react-icons/fa';
import { MdCropSquare } from 'react-icons/md';
import { CiGlobe } from "react-icons/ci";

const Properties = () => {

  const propertyFilterItem = [
    { id: "1", title: "Budget" },
    { id: "2", title: "Property Type" },
    { id: "3", title: "Bhk" },
    { id: "4", title: "Construction Status" },
    { id: "5", title: "Area" },
    { id: "6", title: "Amenities" },
    { id: "7", title: "Bathrooms" },
    { id: "8", title: "Furnishing status" },
  ];

  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const data = await getAllPropertyData();
      setProperties(data.data.list);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties()
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 w-full">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:pr-6 mb-6 md:mb-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="pt-6 px-4 w-full md:w-3/4">
        {properties?.length === 0 && !loading ? (
          <div className="text-center text-red-500 font-semibold">
            No properties exist for the applied filter
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {properties?.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white flex flex-col lg:flex-row gap-4"
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <Image
                    src={item.image || homeImage}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>

                {/* Property Details */}
                <div className="w-full lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.propertyTitle}</h2>
                    <p className="text-gray-500 mb-2">{item.propertyLocation}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600 mt-2">
                      <div className="flex items-center gap-1">
                        <FaBed /> {item.bedrooms} Bedrooms
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBath /> {item.bathrooms} Bathrooms
                      </div>
                      <div className="flex items-center gap-1">
                        <CiGlobe /> {item.area} sqft
                      </div>
                    </div>
                    <p className="text-gray-500 mt-2">{item.propertyDescription}</p>
                    <div className="flex gap-4 mt-5 flex-row flex-wrap">
                      <button
                        onClick={() => router.push(`/property/${item._id}`)}
                        className="bg-gray-200 border font-bold py-2 px-4 rounded-lg"
                      >
                        Chat Seller
                      </button>
                      <button
                        onClick={() => router.push(`/property/${item._id}`)}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                      >
                        View Details
                      </button>
                    </div>

                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-gray-800">INR {item.propertyPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
