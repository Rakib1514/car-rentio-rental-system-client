import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableRow from "./TableRow";
// import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import NoCarAdded from "./NoCarAdded";
import { useQuery } from "@tanstack/react-query";
import { FaSort } from "react-icons/fa";
import { Helmet } from "react-helmet";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle,
  CartesianGrid,
} from "recharts";
import Loading from "../loading-page/loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCars = () => {
  const [refresh, setRefresh] = useState(1);

  const { uid } = useParams();

  const [carData, setCarData] = useState([]);
  const [sortValue, setSortValue] = useState("");

  const axiosSecure = useAxiosSecure();

  const {
    data: myCarsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCars"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cars/${uid}?sortValue=${sortValue}`);
      setCarData(res.data);
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, refresh, sortValue]);

  if (isLoading) {
    return <Loading />;
  }

  if (!myCarsData.length > 0) {
    return <NoCarAdded />;
  }

  return (
    <div className="mx-auto w-11/12">
      <Helmet>
        <title>Car-Rantio | Manage Cars</title>
      </Helmet>
      <div>
        <h2 className="text-center font-openSans text-xl font-bold md:mt-8 md:text-3xl">
          Your Rental Listings
        </h2>
        <p className="text-center text-gray-600 md:px-12">
          Manage and track all the cars you&apos;ve listed for rent. Update
          details, view status, or remove listings with ease.
        </p>
      </div>
      {/* My Cars Table */}
      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-primary text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th className="flex justify-between">
                  <span>Daily Rental Price</span>

                  {/* Drop Down */}
                  <div className="dropdown dropdown-hover hover:text-black">
                    <button className="px-3">
                      <FaSort />
                    </button>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow"
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

      <div>
        {/* Section heading */}
        <div className="mb-6 space-y-4 text-center">
          <h2 className="font-openSans text-xl font-bold md:text-3xl">
            Daily Rental Rates by Car Model of Your Cars
          </h2>
          <p>Explore daily rental rates for each model you Added.</p>
        </div>

        {/* Chart */}
        <div className="h-[50svh] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={myCarsData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="carModel"
                tickFormatter={(value) => value.split(" ")[0]}
              />
              <YAxis dataKey="rentPrice" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="rentPrice"
                fill="#197BFF"
                activeBar={<Rectangle fill="#719CD5" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MyCars;
