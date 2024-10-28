"use client"
import React from "react";
import { useRouter, useParams } from 'next/navigation';
import Specification from './Specification/Specification'
// import styles from './page.module.css';

const SpecificationPage = ({ params }) => {
  const router = useRouter();
  const Querry_params = useParams();

  console.log(Querry_params, "Querry_params");
  // const { id } = router.params;

  return (
    <>
      <Specification /> 
    </>
  );
};

export default SpecificationPage;
