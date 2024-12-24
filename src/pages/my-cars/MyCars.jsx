import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableRow from "./TableRow";
import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import NoCarAdded from "./NoCarAdded";

const MyCars = () => {
  const [refresh, setRefresh] = useState(1);
  const [initData, setInitData] = useState([]);
  const [myCarsData, setMyCarsData] = useState([]);

  const [rentFilter, setRentFilter] = useState(false);

  const handleRentSort = () => {
    const sorted = [...initData].sort((a, b) => {
      return rentFilter ? a.rentPrice - b.rentPrice : b.rentPrice - a.rentPrice;
    });
    setRentFilter(!rentFilter);
    setMyCarsData(sorted);
  };

  const { uid } = useParams();
  useEffect(() => {
    axios.get(`/cars/${uid}`, {withCredentials: true}).then((res) => {
      setInitData(res.data);
      setMyCarsData(res.data);
    });
  }, [uid, refresh]);

  if(!initData.length > 0){
    return <NoCarAdded/>
  }

  return (
    <div className="w-11/12">
      <div>
        <h2 className="md:text-3xl text-xl font-bold text-center md:mt-8 font-openSans">
          Section Heading
        </h2>
        <p className="text-gray-600 text-center md:px-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          deserunt rem perspiciatis est modi amet itaque{" "}
        </p>
      </div>
      {/* My Cars Table */}
      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-black">
              <tr>
                <th></th>
                <th>Name</th>
                <th className="flex justify-between">
                  <span>Daily Rental Price</span>{" "}
                  <span onClick={handleRentSort} className="hover:scale-105">
                    <FaSortNumericDown
                      className={`text-[1rem] ${rentFilter && "hidden"}`}
                    />
                    <FaSortNumericDownAlt
                      className={`text-[1rem] ${rentFilter || "hidden"}`}
                    />
                  </span>
                </th>
                <th>Availability</th>
                <th className="flex justify-between">
                  <span>Date Added</span>
                  <span className="hover:scale-105">
                    <FaSortNumericDown className={`text-[1rem]`} />
                    <FaSortNumericDownAlt className={`text-[1rem]`} />
                  </span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myCarsData &&
                myCarsData.map((car) => (
                  <TableRow
                    key={car._id}
                    car={car}
                    setRefresh={setRefresh}
                    refresh={refresh}
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
