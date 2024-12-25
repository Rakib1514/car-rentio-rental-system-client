import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[50vh] bg-cover bg-center object-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/jy1SRb6/Yellow-car.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold capitalize text-white">Your Ride, Your Rules- <br /> Find the Perfect Car Today!</h1>
          <p className="mb-5 ">
          Explore a wide range of cars, from budget-friendly options to luxury rides. Easy booking, transparent pricing, and reliable service – your journey starts here!
          </p>
          <Link to={'/available-cars'} className="btn btn-outline bg-primary font-bold text-white font-openSans">View Available Cars</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
