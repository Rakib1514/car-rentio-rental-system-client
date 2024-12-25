import { Link } from "react-router-dom";

const NoBooking = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">No Booking. Wanna make a Reservation!</h1>
          <Link to={'/available-cars'} className="btn bg-primary text-white hover:text-black">Make A Reservation</Link>
        </div>
      </div>
    </div>
  );
};

export default NoBooking;
