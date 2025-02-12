import { useState } from "react";
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
        (a, b) => b.rentPrice - a.rentPrice,
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
    <div className="mx-auto w-11/12">
      <Helmet>
        <title>Car-Rantio | Available Cars</title>
      </Helmet>
      {/* for heading and buttons */}
      <div>
        <div className="space-y-4 border-b border-gray-400 pb-4">
          <h2 className="text-center font-openSans text-xl font-bold md:mt-8 md:text-3xl">
            Available Cars – Find Your Perfect Ride!
          </h2>
          <p className="text-center text-gray-600 md:px-12">
            Browse our collection of available cars and book your next adventure
            with ease.
          </p>
        </div>
        <div className="flex justify-between py-6">
          <div className="form-control">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search by Model Name"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setView(!view)}
              className="btn bg-primary text-xl text-white hover:border hover:border-black hover:text-black"
            >
              <FaList className={view || "hidden"} />
              <IoGridSharp className={`${view && "hidden"}`} />
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
                className="menu dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow"
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
          view && "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } gap-4`}
      >
        {paginatedCars.map((car) => (
          <CardAvailableCar key={car._id} car={car} view={view} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-8 flex justify-center">
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
