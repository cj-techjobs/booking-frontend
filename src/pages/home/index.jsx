import React, { useContext, useEffect, useState } from "react";
import CarouselComponent from "../../components/carousel";
import { getUserProfile } from "../api/api";
import { GlobalContext } from "../api/context/context";
import Header from "../../components/bikeComponents/Header/Header";
import Homepage from "../../components/bikeComponents/Home/Homepage";

function Home() {
  const context = useContext(GlobalContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await getUserProfile();
        context?.setName(data?.fullName);
        context?.setIsUpdateUser(context?.isUpdateUser);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [context, context?.isUpdateUser]);
  return (
    <>
    <Header/>
   <CarouselComponent/>
    </>
  )
}
export default Home;


