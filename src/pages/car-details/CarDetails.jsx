import { useState } from "react";
import { FaCarSide, FaRegFile } from "react-icons/fa";
import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import ModalBooking from "./ModalBooking";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { hotToastSuccess } from "../../utils";
import { BsTools } from "react-icons/bs";
import { Helmet } from "react-helmet";

const CarDetails = () => {
  const car = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { carModel, availability, rentPrice, features, description, image } =
    car;
  const [timeString, setTimeString] = useState(null);

  const onChange = (time, timeString) => {
    setTimeString(timeString);
  };

  const { user } = useAuth();

  const showModal = () => {
    if (!user) {
      navigate("/sign-in");
    } else {
      setIsModalOpen(true);
    }
  };

  const navigate = useNavigate();

  const [totalDay, setTotalDay] = useState(0);

  const handleBooking = (values) => {
    const { startDate, endDate } = values;
    setTotalDay(endDate.diff(startDate, "days"));
    const bookingInfo = {
      ...values,
      timeString,
      carModel,
      carImage: image,
      dailyRent: rentPrice,
      renter: user.uid,
      carId: car._id,
      bookingStatus: "Confirmed",
      timeOfBooking: new Date().getTime(),
    };
    axios.post("/my-bookings", bookingInfo).then((res) => {
      if (res.data.insertedId) {
        axios.patch(`/booking-count/${car._id}/inc`).then((res) => {
          console.log(res.data);
        });
        hotToastSuccess("Reserved. Happy Journey");
        navigate(`/my-bookings/${user.uid}`);
      }
      setIsModalOpen(false);
    });
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Helmet>
        <title>Car-Rantio | {carModel} </title>
      </Helmet>
      <ScrollRestoration />
      <div className="mx-auto w-11/12 py-10 text-center">
        <h2 className="text-xl font-semibold">
          Experience the Thrill of{" "}
          <span className="text-primary">{carModel}</span>!
        </h2>
        <p>
          Dive into the details and see why{" "}
          <span className="italic">&quot;{carModel}&quot;</span> is the perfect
          choice for your next adventure.
        </p>
      </div>
      <div className="mx-auto grid w-11/12 grid-cols-1 gap-8 rounded-xl border border-gray-400 bg-base-100 shadow-xl md:grid-cols-2">
        <div className="card h-full w-full rounded-none bg-base-200 md:rounded-l-xl">
          <img
            src={image}
            alt={carModel}
            className="h-full w-full object-cover md:rounded-l-xl"
          />
        </div>
        <div className="px-6 py-6 md:w-1/2 md:px-0 lg:text-left">
          <h1 className="space-y-4 text-xl font-bold md:text-3xl lg:text-5xl">
            {carModel}
            <span
              className={`badge ${
                availability ? "bg-green-700" : "bg-red-700"
              } py-4 font-openSans text-white`}
            >
              {availability ? "Available" : "Unavailable"}
            </span>
          </h1>
          <div className="my-4 flex items-center gap-8">
            <p>
              <span className="text-2xl font-semibold">${rentPrice}</span> /Day
            </p>
            <button
              onClick={showModal}
              className={`btn bg-primary text-white ${
                availability || "btn-disabled"
              }`}
            >
              Book Now
            </button>
          </div>
          {/* todo: add icons for good looking */}
          <div className="my-4 text-left">
            <p className="flex items-center gap-2 font-semibold">
              Features <BsTools className="text-black" />
            </p>
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
            <h2 className="flex items-center gap-2 font-semibold">
              Description <FaRegFile />
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <ModalBooking
        handleBooking={handleBooking}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        car={car}
        onChange={onChange}
        totalDay={totalDay}
      />
    </div>
  );
};

export default CarDetails;
