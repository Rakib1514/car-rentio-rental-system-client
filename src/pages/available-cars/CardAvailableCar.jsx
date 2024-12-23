import PropTypes from "prop-types";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const CardAvailableCar = ({ car, view }) => {
  // availability, description,
  const { carModel,  rentPrice, features,  image } =
    car;

  return (
    <div
      className={`flex gap-6 ${
        view ? "flex-col justify-between" : "justify-between p-4"
      } border border-gray-200  pb-0`}
    >
      <div className={`  ${view ? 'p-4': "flex gap-6 md:w-2/4 flex-col md:flex-row"}`}>
        <img
          src={image}
          alt={carModel}
          className={` object-cover rounded-sm  ${
            view ? "w-full md:h-64 sm:h-48 h-56" : "md:h-40 md:w-64 h-24 w-32"
          } `}
        />
        <div className="mt-4">
          <h3 className="md:text-xl font-bold font-openSans">{carModel}</h3>
          <div>
            <span className="font-semibold md:text-xl text-primary">
              ${rentPrice}/
            </span>
            <span>Day</span>
          </div>
        </div>
      </div>

      <ul className={`grid md:flex-grow px-4 ${view ? ' grid-cols-2 ': 'grid-cols-1  hidden sm:grid'}`}>
        {features.map((feature, idx) => (
          <li key={idx} className="flex gap-1 items-center">
            <CiCircleCheck />
            {feature}
          </li>
        ))}
      </ul>

      
      <Link to={`/car/${car._id}`} className={` btn bg-primary rounded-sm text-white hover:text-black ${view ? 'w-full ': ''}`}>Book Now</Link>
    </div>
  );
};

CardAvailableCar.propTypes = {
  car: PropTypes.object.isRequired,
  view: PropTypes.bool.isRequired,
};

export default CardAvailableCar;
