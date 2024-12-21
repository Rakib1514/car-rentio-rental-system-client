import axios from "axios";
import { useEffect, useState } from "react";
import RecentCarCard from "./RecentCarCard";

const RecentListings = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/limit-cars').then((res) => {
      setCars(res.data); 
    });
  }, []);
  
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-8 capitalize">Recent listing of cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          cars.map(car=> <RecentCarCard key={car._id} car={car} />)
        }
      </div>
    </div>
  );
};

export default RecentListings;