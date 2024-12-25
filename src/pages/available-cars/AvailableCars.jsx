import { useLoaderData } from "react-router-dom";
import CardAvailableCar from "./CardAvailableCar";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";


const AvailableCars = () => {
  const [view, setView] = useState(true);
  const initData = useLoaderData();

  const [availableCars, setAvailableCars] = useState(initData);

  const handleSearch = (e) => {
    const initValue = e.target.value;

    const value = initValue.toLowerCase();
    
    const filtered = initData.filter((car) => {
      const carModel = car.carModel.toLowerCase();
      return carModel.includes(value)
    });
    setAvailableCars(filtered)
  };

  return (
    <div className="w-11/12 mx-auto">
      {/* for heading and buttons */}
      <div>
        <div className="space-y-4 border-b border-gray-400 pb-4">
          <h2 className="md:text-3xl text-xl font-bold text-center md:mt-8 font-openSans">
            Available Cars – Find Your Perfect Ride!
          </h2>
          <p className="text-gray-600 text-center md:px-12">
            Browse our collection of available cars and book your next adventure
            with ease.
          </p>
        </div>
        <div className="py-6 flex justify-between">
          <div className="form-control">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search by Model Name"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => setView(!view)} className="btn bg-primary text-white text-xl hover:text-black hover:border hover:border-black">
              <FaList className={view || "hidden"}/> <IoGridSharp  className={`${view && "hidden "}`} />
            </button>
            <button className="btn">filter</button>
          </div>
        </div>
      </div>

      {/* for Cards */}
      <div
        className={`grid grid-cols-1 ${
          view && "md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
        } gap-4`}
      >
        {availableCars.map((car) => (
          <CardAvailableCar key={car._id} car={car} view={view} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
