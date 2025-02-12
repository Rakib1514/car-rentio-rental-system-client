import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [bannerImg, setBannerImg] = useState();

  useEffect(() => {
    axios.get("/random-image").then((res) => setBannerImg(res.data[0].image));
  }, []);

  return (
    <div
      className="hero min-h-[50vh] bg-cover bg-center bg-no-repeat object-cover transition-all duration-1000"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl rounded-md bg-black bg-opacity-25 p-3 backdrop-blur-md">
          <h1 className="mb-5 text-2xl font-bold capitalize text-white md:text-3xl lg:text-5xl">
            Your Ride, Your Rules- <br /> Find the Perfect Car Today!
          </h1>
          <p className="mb-5">
            Explore a wide range of cars, from budget-friendly options to luxury
            rides. Easy booking, transparent pricing, and reliable service –
            your journey starts here!
          </p>
          <Link
            to={"/available-cars"}
            className="btn btn-outline rounded-md bg-primary font-openSans font-bold text-white"
          >
            Find Your Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
