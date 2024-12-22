import { FaCarSide } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

const CarDetails = () => {
  const car = useLoaderData();

  // const {user} = useAuth();

  const { carModel, availability, dailyRentalPrice, features, description } =
    car;

  // TODO: need to add collection of review get from server side {reviews, car}

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex  flex-col md:flex-row-reverse w-11/12 mx-auto gap-8 rounded-xl shadow-xl bg-base-100">
        <div className="text-center md:w-1/2 lg:text-left p-6">
          <h1 className="text-5xl font-bold space-y-4">
            {carModel}{" "}
            <span className="badge bg-primary text-white py-4 font-openSans">
              {availability ? "Available" : "Unavailable"}
            </span>
          </h1>
          <p>
            <span className="font-semibold text-2xl">${dailyRentalPrice}</span>{" "}
            /Day
          </p>
          {/* todo: add icons for good looking */}
          <div className="my-4 text-left">
            <p className=" font-semibold">Features</p>
            <ul className="text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCarSide />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <h2 className=" font-semibold">Description</h2>
            <p>{description}</p>
          </div>
          {/* <p>{user? "user ase": " nai"}</p> */}
        </div>

        <div className="card bg-base-200 md:w-1/2 shrink-0 rounded-l-xl rounded-none">
            <img
              src="https://i.ibb.co.com/jy1SRb6/Yellow-car.webp"
              alt=""
              className="h-full w-full object-cover rounded-l-xl"
            />
          
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
