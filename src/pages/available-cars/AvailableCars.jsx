import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardAvailableCar from "./CardAvailableCar";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { Pagination } from "antd";

const AvailableCars = () => {
  const [view, setView] = useState(true);
  const initData = useLoaderData();
  const [availableCars, setAvailableCars] = useState(initData);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate sliced data for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCars = availableCars.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    const initValue = e.target.value;
    const value = initValue.toLowerCase();
    const filtered = initData.filter((car) => {
      const carModel = car.carModel.toLowerCase();
      return carModel.includes(value);
    });
    setAvailableCars(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleSort = (value) => {
    if (value === "high") {
      const sortedHigh = [...initData].sort(
        (a, b) => b.rentPrice - a.rentPrice
      );
      setAvailableCars(sortedHigh);
    } else if (value === "low") {
      const sortedLow = [...initData].sort((a, b) => a.rentPrice - b.rentPrice);
      setAvailableCars(sortedLow);
    }
    setCurrentPage(1); // Reset to first page after sorting
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Car-Rantio | Available Cars</title>
      </Helmet>
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
            <button
              onClick={() => setView(!view)}
              className="btn bg-primary text-white text-xl hover:text-black hover:border hover:border-black"
            >
              <FaList className={view || "hidden"} />
              <IoGridSharp className={`${view && "hidden "}`} />
            </button>

            {/* Sort button */}
            <div className="dropdown dropdown-left">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-primary text-white hover:text-black"
              >
                Sort by Rent
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={() => handleSort("high")}>
                  <a>Rent high to low</a>
                </li>
                <li onClick={() => handleSort("low")}>
                  <a>Rent low to high</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* for Cards */}
      <div
        className={`grid grid-cols-1 ${
          view && "md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4"
        } gap-4`}
      >
        {paginatedCars.map((car) => (
          <CardAvailableCar key={car._id} car={car} view={view} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-8">
        <Pagination
          current={currentPage}
          total={availableCars.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AvailableCars;
