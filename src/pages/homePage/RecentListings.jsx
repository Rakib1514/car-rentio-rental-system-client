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
    <div>
      <h2 className="text-center text-3xl font-semibold mb-8 capitalize">Recent listing of cars</h2>
      <div>
        {
          cars.map(car=> <RecentCarCard key={car._id} car={car} />)
        }
      </div>
    </div>
  );
};

export default RecentListings;