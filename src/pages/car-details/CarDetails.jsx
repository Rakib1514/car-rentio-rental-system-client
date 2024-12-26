import { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ModalBooking from "./ModalBooking";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { hotToastSuccess } from "../../utils";

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
    setIsModalOpen(true);
  };

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
        axios.patch(`/booking-count/${car._id}/inc`)
          .then(res=> {console.log(res.data);})
        hotToastSuccess("Reserved. Happy Journey");
      }
      setIsModalOpen(false);
    });

    // todo: booking count need to adjust
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex  flex-col md:flex-row-reverse w-11/12 mx-auto gap-8 rounded-xl shadow-xl bg-base-100">
        <div className="text-center md:w-1/2 lg:text-left p-6">
          <h1 className="text-5xl font-bold space-y-4">
            {carModel}{" "}
            <span
              className={`badge ${
                availability ? "bg-green-700" : "bg-red-700"
              } text-white py-4 font-openSans`}
            >
              {availability ? "Available" : "Unavailable"}
            </span>
          </h1>
          <div className="flex items-center  gap-8 my-4">
            <p>
              <span className="font-semibold text-2xl">${rentPrice}</span> /Day
            </p>
            <button onClick={showModal} className="btn bg-primary text-white">
              Book Now
            </button>
          </div>
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
        </div>

        <div className="card bg-base-200 md:w-1/2 shrink-0 rounded-l-xl rounded-none">
          <div>
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover rounded-l-xl"
            />
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
