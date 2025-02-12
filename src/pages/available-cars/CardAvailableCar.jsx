import { Badge } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardAvailableCar = ({ car, view }) => {
  const { carModel, rentPrice, image, availability, bookingCount } = car;

  return (
    <div
      className={`flex ${
        view ? "flex-col justify-between" : "justify-between p-4"
      } border border-gray-200 pb-0`}
    >
      <div
        className={` ${
          view ? "p-4" : "flex flex-col gap-6 md:w-2/4 md:flex-row"
        }`}
      >
        {view ? (
          <Badge.Ribbon
            color={`${availability ? "" : "red"}`}
            text={`${availability ? "Available" : "Unavailable"} `}
          >
            <img
              src={image}
              alt={carModel}
              className={`rounded-sm object-cover ${
                view
                  ? "h-52 w-full sm:h-48 md:h-40"
                  : "h-24 w-32 md:h-40 md:w-64"
              } `}
            />
          </Badge.Ribbon>
        ) : (
          <img
            src={image}
            alt={carModel}
            className={`rounded-sm object-cover ${
              view ? "h-52 w-full sm:h-48 md:h-40" : "h-24 w-32 md:h-40 md:w-64"
            } `}
          />
        )}
        <div className={`${view ? "mt-4" : ""}`}>
          <div>
            <div
              className={`flex justify-between gap-4 ${
                view ? "" : "item flex-col"
              }`}
            >
              <h3 className="font-openSans font-bold md:text-xl">{carModel}</h3>
            </div>
            <div>
              <span className="font-semibold text-primary md:text-xl">
                ${rentPrice}/
              </span>
              <span>Day</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className={`mb-2 px-4 ${view || "hidden"}`}>
          <span className="font-bold">Total Rented:</span> {bookingCount}
        </p>
        <div className="flex flex-col gap-8">
          <Link
            to={`/car/${car._id}`}
            className={`btn rounded-sm bg-primary text-white hover:text-black ${
              view ? "w-full" : ""
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
