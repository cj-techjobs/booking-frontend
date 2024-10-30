import React, { use, useContext, useEffect, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdSettings } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import Leave from "/src/assets/images/leave.png";
import Lemon from "/src/assets/images/Lemon.png";
import Donut from "/src/assets/images/donut.png";
import Orange from "/src/assets/images/orange.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "/src/components/Modal.jsx";
import SellItem from "./sellItem";
import SellCar from "./sellCar";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import uploadSvg from "/src/assets/homeModalSvg/uploadSvg.svg";
import { GlobalContext } from "../../pages/api/context/context";
import Cars from "../../assets/homeMenuIcons/cars.svg";
import Bikes from "../../assets/homeMenuIcons/bikes.svg";
import Appliances from "../../assets/homeMenuIcons/appliances.svg";
import Books from "../../assets/homeMenuIcons/books.svg";
import Clothing from "../../assets/homeMenuIcons/clothing.svg";
import Jobs from "../../assets/homeMenuIcons/jobs.svg";
import Electronics from "../../assets/homeMenuIcons/electronics.svg";
import Free_Auctions from "../../assets/homeMenuIcons/free_auctions.svg";
import Property from "../../assets/homeMenuIcons/property.svg";
import Vacations from "../../assets/homeMenuIcons/vacations.svg";
import Furniture from "../../assets/homeMenuIcons/furniture.svg";
import Movie_Events from "../../assets/homeMenuIcons/movie_&_events.svg";
import axiosInstance from "../../pages/api/axiosInstance";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import Category from "../Choose-Category/Category";
import MapRoutes from "./mapRoutes";
import Homepage from "../bikeComponents/Home/Homepage";

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  auto: 100,
  infinite: true,
};

const CarouselComponent = () => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const [carouselData, setCarouselData] = useState([]);
  const [quickAccess, setQuickAccess] = useState([]);
  const [products, setProducts] = useState([]);
  const [sellItemModal, setSelltemModal] = useState(false);
  const [carModal, setCarModal] = useState(false);
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [amount, setAmount] = useState("");

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const data = [
      {
        title: "cars",
        bgColor: "#d96849",
        icons: Cars,
        modal: setCarModal,
      },
      {
        title: "bikes",
        bgColor: "#ead795",
        icons: Bikes,
      },
      {
        title: "property",
        bgColor: "#b0d0db",
        icons: Property,
      },
      {
        title: "appliances",
        bgColor: "#fbe0c4",
        icons: Appliances,
      },
      {
        title: "books",
        bgColor: "#6d8891",
        icons: Books,
      },
      {
        title: "furniture",
        bgColor: "#44596e",
        icons: Furniture,
      },
      {
        title: "clothing",
        bgColor: "#e3af99",
        icons: Clothing,
      },
      {
        title: "Free Auctions",
        bgColor: "#b8e2d8",
        icons: Free_Auctions,
      },
      {
        title: "jobs",
        bgColor: "#ffbd31",
        icons: Jobs,
      },
      {
        title: "Movies & Events",
        bgColor: "#c33863",
        icons: Movie_Events,
      },
      {
        title: "electronics",
        bgColor: "#5c7b5d",
        icons: Electronics,
      },
      {
        title: "vacation",
        bgColor: "#fec523",
        icons: Vacations,
      },
    ];

    const product = [
      {
        title: `Leave`,
        rating: 4,
        price: `₹ 250`,
        productImage: Leave,
      },
      {
        title: `Lemon`,
        rating: 3,
        price: `₹ 200`,
        productImage: Lemon,
      },
      {
        title: `Donut`,
        rating: 4,
        price: `₹ 125`,
        productImage: Donut,
      },
      {
        title: `Orange`,
        rating: 4.5,
        price: `₹ 100`,
        productImage: Orange,
      },
    ];

    const products = new Array(5).fill(product).flat(Infinity);

    setProducts(products);

    setQuickAccess([
      {
        modal: setCarModal,
        path: "",
        content: "",
      },
      {
        path: "/settings",
        content: (
          <IoMdSettings
            style={{ color: "#ffffff", width: "32px", height: "32px" }}
          />
        ),
      },
      {
        // path: "/settings",
        modal: setSelltemModal,
        content: (
          <FaTag style={{ color: "#ffffff", width: "32px", height: "32px" }} />
        ),
      },
      {
        path: "/settings",
        content: (
          <MdNotifications
            style={{ color: "#ffffff", width: "32px", height: "32px" }}
          />
        ),
      },
      {
        path: "/settings",
        content: (
          <BsFillBoxSeamFill
            style={{ color: "#ffffff", width: "32px", height: "32px" }}
          />
        ),
      },
      {
        path: "/settings",
        content: (
          <FaUser style={{ color: "#ffffff", width: "32px", height: "32px" }} />
        ),
      },
      //
    ]);
  }, []);

  useEffect(() => {
    axiosInstance
      .get(
        `http://sixback.eu-north-1.elasticbeanstalk.com/api/v1/cms/category?skip=${skip}&limit=${limit}`
      )
      .then((res) => {
        setTotal(Math.ceil(res?.data?.data?.total / 10));
        setCarouselData(res?.data?.data?.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit, skip]);

  const getBgColor = (index) => {
    // console.log(carouselData[index]?.image);
    return carouselData[index].image;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Amount", amount);
    setUploadImageModal(false);
  };

  useEffect(() => {
    setLimit(page * 10);
    setSkip((page - 1) * 10);
  }, [page]);

  const handleRoute = (title) => {
    console.log(title)
    router.push(`/${MapRoutes.filter((f) => f.title === title)[0]?.route || 'not-found'}`);
  };

  return (
    <div>
      {/* <div className="mb-8">
        <h2 className="text-[#000852] mt-4 text-center font-bold text-2xl mb-6">
          SHOP WHAT YOU LIKE USING
          <span className="text-red-500"> CATAGORIES</span>
        </h2>
        <div className="flex items-center justify-center ">
          <button disabled={page === 1} className="disabled:opacity-75">
            <GrFormPrevious
              className="text-4xl cursor-pointer"
              onClick={(e) => setPage(page - 1)}
            />
          </button>
          <div className="flex flex-1 gap-2 justify-center overflow-x-auto max-sm:justify-start">
            {carouselData.map((item, i) => (
              <div
                key={i}
                className="w-32 h-28 p-2 min-w-[120px] flex items-start justify-center rounded-lg cursor-pointer"
                style={{
                  backgroundImage: `url(${getBgColor(i)})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
                // onClick={() =>
                //   router.push(
                //     `/${
                //       item?.title === "Movies & Events"
                //         ? "movies"
                //         : item?.title === "Vacation"
                //         ? "bookings/hotel-search"
                //         : item?.title
                //     }`
                //   )
                // }
                onClick={() => handleRoute(item.title)}
              >
                <div className="flex-1 text-white text-lg capitalize font-bold text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <button disabled={page === total} className="disabled:opacity-75">
            <MdNavigateNext
              className="text-4xl cursor-pointer"
              onClick={(e) => setPage(page + 1)}
            />
          </button>
        </div>
      </div>

      <div className="flex mb-8 gap-8 max-sm:flex-col">
        <div className="h-56 w-1/3 bg-[#50006d] rounded-lg flex items-end justify-center max-sm:w-[100%]">
          <h2 className="text-white font-bold text-2xl py-12">
            Best Product At Lowest Price
          </h2>
        </div>
        <div className="h-56 p-4 bg-[#ececec] rounded-lg flex flex-col items-center justify-between">
          <h2 className="text-black-400 text-xl ">Quick Access</h2>
          <div className="grid grid-cols-3 place-items-center gap-4">
            {quickAccess.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center cursor-pointer w-16 h-16 rounded-full bg-[#fc6e6e]"
                onClick={() =>
                  context?.isLoggedin
                    ? item.path
                      ? router.push(item?.path)
                      : item.modal(true)
                    : {}
                }
              >
                {item?.content}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Homepage/>

      <div className="mb-8 mt-5 mx-6">
        <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2">
          {products.map((m, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 shadow-xl rounded-lg p-2"
            >
              <div className="flex-1">
                <Image
                  src={m.productImage.src}
                  className=""
                  alt="product image"
                  height={220}
                  width={230}
                />
              </div>
              <div className="flex justify-between px-2">
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.rating}</p>
                </div>
                <div className="flex flex-col items-center">
                  <FiPlusCircle style={{ width: "24px", height: "24px" }} />
                  <p className="font-bold">{m.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {sellItemModal && (
        <Modal isVisible={sellItemModal} onClose={() => setSelltemModal(false)}>
          <SellItem />
          {/* <PostAnAdd /> */}
        </Modal>
      )}
      {carModal && (
        <Modal isVisible={carModal} onClose={() => setCarModal(false)}>
          <Category
            modal={() => {
              setCarModal(false);
              setUploadImageModal(true);
            }}
          />
        </Modal>
      )}

      {uploadImageModal && (
        <Modal
          isVisible={uploadImageModal}
          onClose={() => setUploadImageModal(false)}
        >
          <div className="p-4">
            <div className="flex items-center justify-center mb-10">
              <div
                className="absolute left-5 cursor-pointer"
                onClick={() => {
                  setCarModal(true);
                  setUploadImageModal(false);
                }}
              >
                <ChevronLeftRoundedIcon />
              </div>
              <div className="text-lg font-bold text-center">
                You are Almost There
              </div>
            </div>
            <div className="px-4">
              <Input
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment className="font-extrabold" position="start">
                    ₹
                  </InputAdornment>
                }
                className="w-full"
                placeholder="Enter Your price*/No of days"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="mt-4 text-base">
                Rs. 5,000 will be your security money and the responsibility of
                car is our
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-28">
              <div className="cursor-pointer">
                <label htmlFor="upload-file" className="cursor-pointer">
                  <Image
                    src={uploadSvg}
                    alt="upload-Image"
                    height={100}
                    width={100}
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="upload-file"
                  className="absolute opacity-0 -z-20"
                />{" "}
                <span className="text-xs left-[140px] tracking-tighter font-bold absolute">
                  click and upload
                </span>
              </div>
              <div className="text-xl mt-6">Upload Images of your Products</div>
              <div className="px-4 py-2 rounded-md border-2 border-black bg-[#FFB017] mt-8">
                <button
                  onClick={handleSubmit}
                  className="text-base tracking-tighter"
                >
                  Click and Upload
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CarouselComponent;
