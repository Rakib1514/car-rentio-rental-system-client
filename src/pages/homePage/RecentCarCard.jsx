import PropTypes from "prop-types";

const RecentCarCard = ({ car }) => {
  const { carModel, image, bookingStatus } = car;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
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
          <button className="btn bg-primary text-white">Book Now</button>
        </div>

        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </div>
  );
};

RecentCarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default RecentCarCard;
