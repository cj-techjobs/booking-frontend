import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import homeImage from "/src/assets/propertySvg/homeSvg.svg";
import Sidebar from "../../components/Property/Sidebar";
import { getAllPropertyData } from "../api/api";

const Properties = () => {

  const propertyFilterItem = [
    {
      id: "1",
      title: "Budget",
    },
    {
      id: "2",
      title: "Property Type",
    },
    {
      id: "3",
      title: "Bhk",
    },
    {
      id: "4",
      title: "Construction Status",
    },
    {
      id: "5",
      title: "Area",
    },
    {
      id: "6",
      title: "Amenities",
    },
    {
      id: "7",
      title: "Bathrooms",
    },
    {
      id: "8",
      title: "Furnishing status",
    },
  ];
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProperties, setfilteredProperties] = useState([]);

  // Function to fetch cars based on filters
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const data = await getAllPropertyData();
      setProperties(data.data.list);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

useEffect(()=>{
  fetchProperties()
})

  return (
    // <div className="container mx-auto border-l flex">
    //   <div className="w-1/4 md:block hidden">
    //     <Sidebar />
    //     {/* <SideBar /> */}
    //   </div>
    //   <div className="pt-12 ps-12 pe-12 w-3/4">
    //     <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-10">
    //       {propertyFilterItem?.map((items) => (
    //         <div
    //           key={items?.id}
    //           className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer "
    //         //   onClick={() => {
    //         //     router.push("/cars/carItem");
    //         //   }}
    //         >
    //           <Image src={homeImage} width={400} alt="" />
    //           {/* {items.title} */}
    //           <div className="flex flex-col">
    //             <span className="ms-4">House on rent for vacation</span>
    //             <span className="ms-4 mt-2 text-red-600">₹50,000</span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 md:pr-6">
      <Sidebar
        // onPriceChange={setMaxPrice}
        // onColorChange={setSelectedColor}
        // onTransmissionChange={setSelectedTransmission}
        // onBodyTypeChange={handleBodyType}
        // onBrandChange={handleBrandChange} 
        // onModelChange={handleModelChange} 
        // brand={brands} 
        // onYearChange={handleYearChange}
        // onSeatsChange={handleSeatsChange} 
        // onKmsDrivenChange={handleKmsDrivenChange} 
        // onOwnerChange={handleOwnerChange} 
      />
    </div>

    {/* Main content */}
    <div className="pt-6 px-4 w-full md:w-3/4">
      {
        properties?.length === 0 && !loading ? (
          <div className="text-center text-red-500 font-semibold">
            No properties exist for the applied filter
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties?.map((item) => (
              <div
                key={item._id}
                className="rounded-3xl pb-4 shadow-[0_5px_2px_0_rgba(0,0,0,0.25)] cursor-pointer"
                onClick={() => {
                  router.push(`/properties/${item._id}`);
                }}
              >
                <Image
                  src={item.images && item.images[0] ? item.images[0] : "/images/sample-car1.png"}
                  width={400}
                  height={300}
                  alt={item.propertyTitle}
                  className="rounded-t-3xl object-cover w-full h-auto"
                />
                <div className="flex flex-col p-4">
                  <span className="font-semibold text-lg">{item.propertyTitle}</span>
                  <span className="mt-2 text-red-500 font-semibold">₹ {item.propertyPrice}</span>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  </div>
  );
};

export default Properties;
