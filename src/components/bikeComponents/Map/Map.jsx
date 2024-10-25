import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const defaultCenter = {
  lat: 28.6139, // New Delhi as default location
  lng: 77.209,
};

const showroomLocations = {
  "Showroom 1": { lat: 28.6139, lng: 77.209 }, // Example coordinates for Showroom 1
  "Showroom 2": { lat: 28.7041, lng: 77.1025 }, // Example coordinates for Showroom 2
  "My location": { lat: 28.5355, lng: 77.391 }, // Example coordinates for My location
};

const Map = ({ selectedShowroom }) => {
  const location = showroomLocations[selectedShowroom] || defaultCenter;

  return (
    <>
      <div className="googleMap">
        <div className="header">
          <div className="border"></div>
          <h3>Location of Showroom1</h3>
        </div>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerClassName="mapContainer"
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;
