import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableRow from "./TableRow";
// import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import NoCarAdded from "./NoCarAdded";
import { useQuery } from "@tanstack/react-query";

const MyCars = () => {
  const [refresh, setRefresh] = useState(1);

  const { uid } = useParams();

  const {
    data: myCarsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCars"],
    queryFn: async () => {
      const res = await axios.get(`/cars/${uid}`, { withCredentials: true });
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, refresh]);

  if (isLoading) {
    return <h2>Loading ....</h2>;
  }

  if (!myCarsData.length > 0) {
    return <NoCarAdded />;
  }

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h2 className="md:text-3xl text-xl font-bold text-center md:mt-8 font-openSans">
        Your Rental Listings
        </h2>
        <p className="text-gray-600 text-center md:px-12">
        Manage and track all the cars you've listed for rent. Update details, view status, or remove listings with ease.
        </p>
      </div>
      {/* My Cars Table */}
      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-white bg-primary ">
              <tr>
                <th></th>
                <th>Name</th>
                <th className="flex justify-between">
                  <span>Daily Rental Price</span>{" "}
                  <span className="hover:scale-105">
                    {/* <FaSortNumericDown className={`text-[1rem]`} />
                    <FaSortNumericDownAlt className={`text-[1rem] `} /> */}
                  </span>
                </th>
                <th>Availability</th>
                <th className="flex justify-between">
                  <span>Date Added</span>
                  <span className="hover:scale-105">
                    {/* <FaSortNumericDown className={`text-[1rem]`} /> */}
                    {/* <FaSortNumericDownAlt className={`text-[1rem]`} /> */}
                  </span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myCarsData &&
                myCarsData.map((car, idx) => (
                  <TableRow
                    key={car._id}
                    car={car}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    idx={idx}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCars;
