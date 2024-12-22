import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecentCarCard = ({ car }) => {
  const { carModel, image, bookingStatus } = car;

  return (
    <Link to={`/car/${car._id}`} className="">
      <div className="card bg-base-100 hover:shadow-xl hover:scale-[1.02] transition-transform border border-base-300">
        <figure>
          <img src={image} alt={carModel} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {car.carModel}
            <div className="badge badge-secondary">
              {bookingStatus ? "on Ride" : "Available"}
            </div>
          </h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="justify-end card-actions">
            
          </div>

          {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

RecentCarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default RecentCarCard;
