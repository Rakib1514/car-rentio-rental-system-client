import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableRow from "./TableRow";
// import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import NoCarAdded from "./NoCarAdded";
import { useQuery } from "@tanstack/react-query";
import { FaSort } from "react-icons/fa";

const MyCars = () => {
  const [refresh, setRefresh] = useState(1);

  const { uid } = useParams();

  const [carData, setCarData] = useState([]);
  const [sortValue, setSortValue] = useState("");


  const {
    data: myCarsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCars"],
    queryFn: async () => {
      const res = await axios.get(`/cars/${uid}?sortValue=${sortValue}`, { withCredentials: true });
      setCarData(res.data);
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, refresh, sortValue]);

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
          Manage and track all the cars you&apos;ve listed for rent. Update
          details, view status, or remove listings with ease.
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
                  <span>Daily Rental Price</span>

                  {/* Drop Down */}
                  <div className="dropdown dropdown-hover hover:text-black ">
                    <button className="px-3">
                      <FaSort />
                    </button>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li onClick={() => setSortValue("dsc")}>
                        <a> Rent High - Low</a>
                      </li>
                      <li onClick={() => setSortValue("asc")}>
                        <a>Rent Low - High</a>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>Booking Count</th>
                <th>Availability</th>
                <th className="flex justify-between">
                  <span>Date Added</span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carData &&
                carData.map((car, idx) => (
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
