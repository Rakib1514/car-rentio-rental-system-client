import axios from "axios";
import { useEffect, useState } from "react";
import RecentCarCard from "./RecentCarCard";

const RecentListings = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/limit-cars").then((res) => {
      setCars(res.data);
    });
  }, []);

  return (
    <div className="mx-auto my-16 w-11/12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold capitalize">
          Recent Listings – Fresh Rides Await!
        </h2>
        <p>
          Discover the latest cars added to Car-Rentio and book your perfect
          ride today.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <RecentCarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
