import FlightNavbar from "../../../../components/flight-booking-nav/topNavbar";
import FlightSideNavbar from "../../../../components/flight-booking-nav/sideNavbar";

const FlightSearch = () => {
  return (
    <div className="container scrollbar-hide mx-auto">
      <div className="sticky top-[84px] z-20">
        <FlightNavbar />
      </div>
      <div className="flight-background">
        <div className="pt-4">
          <div className="scrollbar w-[310px] h-[calc(100vh-163px)] overflow-auto p-2 bg-white  ml-2">
            <FlightSideNavbar />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
