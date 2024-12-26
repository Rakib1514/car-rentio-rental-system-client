import PropTypes from "prop-types";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const CardAvailableCar = ({ car, view }) => {
  
  const { carModel, rentPrice, features, image, availability, bookingCount } =
    car;

  return (
    <div
      className={`flex  ${
        view ? "flex-col justify-between" : "justify-between p-4"
      } border border-gray-200  pb-0`}
    >
      <div
        className={`  ${
          view ? "p-4" : "flex gap-6 md:w-2/4 flex-col md:flex-row"
        }`}
      >
        <img
          src={image}
          alt={carModel}
          className={` object-cover rounded-sm  ${
            view ? "w-full md:h-64 sm:h-48 h-56" : "md:h-40 md:w-64 h-24 w-32"
          } `}
        />
        <div className={`${view ? "mt-4" : ""}`}>
          <div>
            <div
              className={`flex justify-between  gap-4 ${
                view ? "" : "flex-col item"
              }`}
            >
              <h3 className="md:text-xl font-bold font-openSans">{carModel}</h3>
              <div
                className={`badge text-white ${
                  availability ? "bg-primary" : "bg-red-700"
                }`}
              >
                {availability ? "Available" : "unavailable"}
              </div>
            </div>
            <div>
              <span className="font-semibold md:text-xl text-primary">
                ${rentPrice}/
              </span>
              <span>Day</span>
            </div>
          </div>
        </div>

        {/* for grid view */}
        <div className={`mt-6 ${view || "hidden"}`}>
          <p className="font-semibold">Features:</p>
          <ul
            className={`grid content-start md:flex-grow px-4 ${
              view ? " grid-cols-2 " : "grid-cols-1  hidden sm:grid"
            }`}
          >
            {features.map((feature, idx) => (
              <li key={idx} className="flex gap-1 items-center">
                <CiCircleCheck />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* For List view */}
      <div className={`${view && "hidden"} md:flex-grow`}>
        <p className="font-semibold hidden sm:block">Features:</p>
        <ul
          className={`grid content-start  px-4 ${
            view ? " grid-cols-2 " : "grid-cols-1  hidden sm:grid "
          }`}
        >
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-1 items-center">
              <CiCircleCheck />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className={`px-4 mb-2 ${view || "hidden"}`}>
          <span className="font-bold">Total Rented:</span> {bookingCount}
        </p>
        <div className="flex flex-col gap-8">
          <Link
            to={`/car/${car._id}`}
            className={` btn bg-primary rounded-sm text-white hover:text-black ${
              view ? "w-full " : ""
            }`}
          >
            Book Now
          </Link>
          <p className={`mb-2 ${view && "hidden"}`}>
            <span className="font-bold">Total Rented ✅:</span> {bookingCount}
          </p>
        </div>
      </div>
    </div>
  );
};

CardAvailableCar.propTypes = {
  car: PropTypes.object.isRequired,
  view: PropTypes.bool.isRequired,
};

export default CardAvailableCar;
