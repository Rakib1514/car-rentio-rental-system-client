import { FaCarSide } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const { carModel, availability, dailyRentalPrice, features, description } =
    useLoaderData();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex  flex-col lg:flex-row-reverse w-11/12 mx-auto gap-8 rounded-xl shadow-xl bg-base-100">
        <div className="text-center w-1/2 lg:text-left p-6">
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
          <div className="my-4">
            <p className=" font-semibold">Features</p>
            <ul className="text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCarSide/>{feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className=" font-semibold">Description</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="card bg-base-100 w-1/2 shrink-0 shadow-2xl">
          <div>
            <img
              src="https://i.ibb.co.com/jy1SRb6/Yellow-car.webp"
              alt=""
              className="w-full rounded-l-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
