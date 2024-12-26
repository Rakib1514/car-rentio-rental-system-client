import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "antd";

const RecentCarCard = ({ car }) => {
  const { carModel, image, availability, rentPrice, timePosted, bookingCount } =
    car;

  const postedTime = new Date(timePosted);
  const timeAgo = formatDistanceToNow(postedTime, { addSuffix: true });

  return (
    <Badge.Ribbon
      color={`${availability ? "" : "red"}`}
      text={`${availability ? "Available" : "Unavailable"} `}
    >
      <Link to={`/car/${car._id}`} className="">
        <div className="card bg-base-100 hover:shadow-xl hover:scale-[1.02] transition-transform border border-base-300 rounded-sm">
          <figure className="border-b-2">
            <img
              src={image}
              alt={carModel}
              className="w-full md:h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{car.carModel}</h2>
              <div>
                <p>Total Rented ✅: {bookingCount}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-semibold md:text-xl text-primary">
                  ${rentPrice}/
                </span>
                <span>Day</span>
              </div>
              <div>
                <p>Posted {timeAgo.replace("about", "")}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Badge.Ribbon>
  );
};

RecentCarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default RecentCarCard;
