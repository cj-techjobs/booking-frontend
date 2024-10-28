// components/ImageBanner.js
import React from 'react';
import Image from 'next/image';
import "./ImageBanner.css"
const ImageBanner = ({setModalOpen}) => {
  return (
    <section className="image-banner" style={{ position: 'relative', textAlign: 'center', color: 'white', marginTop: '67px', borderRadius: '44px', overflow: 'hidden' }}>
      <Image
        src="/bikeImages/ImageBanner.png" // Replace with your actual image path
        alt="Bike Comparison"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        {/* <img src='/Sitelogo.png'/> */}
        <h1 className='main-title'>Bike Comparison</h1>
        <button onClick={() => setModalOpen(true)} style={{ padding: '10px 70px', fontSize: '16px', fontWeight: '700', fontStyle: 'italic', backgroundColor: '#fff', color: '#000', borderRadius: '16px' }}>
          Compare now
        </button>
      </div>

      <div className="overlay"></div>
    </section>
  );
};

export default ImageBanner;
