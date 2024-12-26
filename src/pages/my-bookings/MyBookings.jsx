import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingRow from "./BookingRow";
import NoBooking from "./NoBooking";
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
import { Helmet } from "react-helmet";
import Loading from "../loading-page/loading";

const MyBookings = () => {
  const [refresh, setRefresh] = useState(1);

  const { uid } = useParams();

  const {
    data: myBookingsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const res = await axios.get(`/my-bookings/${uid}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, refresh]);

  if (isLoading) {
    return <Loading />;
  }

  if (!myBookingsData.length > 0) {
    return <NoBooking />;
  }

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Car-Rantio | Manage Bookings</title>
      </Helmet>
      <div className="text-center space-y-2">
        <h2 className="md:text-3xl text-xl font-bold md:mt-8 font-openSans">
          Track and Manage Your Bookings
        </h2>
        <p className="text-gray-600 md:px-12">
          View and manage all your car bookings. Modify rental dates or cancel
          bookings effortlessly.
        </p>
      </div>

      {/* My bookings Table goes here */}
      <div className="my-12 ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-black">
              <tr className="bg-primary text-white">
                <th>sr</th>
                <th>Car Model</th>
                <th>Total Price</th>
                <th>Booking Start</th>
                <th>Booking End</th>
                <th>Booking Status</th>
                <th>Update</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {myBookingsData.map((booking, idx) => (
                <BookingRow
                  key={booking._id}
                  idx={idx}
                  booking={booking}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rechart */}
      <div className="min-h-svh">
        {/* Section heading */}
        <div className="text-center mb-6 space-y-4">
          <h2 className=" md:text-3xl text-xl font-bold font-openSans">
            Daily Rental Rates by Car Model You Rented
          </h2>
          <p>Explore daily rental rates for each model you Rented.</p>
        </div>

        {/* Chart */}
        <div className="h-[50svh] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={myBookingsData}
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
              <YAxis dataKey="dailyRent" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="dailyRent"
                fill="#197BFF"
                activeBar={<Rectangle fill="#719CD5" stroke="blue" />}
              />
              {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
