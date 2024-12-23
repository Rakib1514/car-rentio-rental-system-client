import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableRow from "./TableRow";

const MyCars = () => {
  const [myCarsData, setMyCarsData] = useState();
  const [refresh, setRefresh] = useState(1);

  const { uid } = useParams();

  useEffect(() => {
    axios.get(`/cars?myCar=${uid}`).then((res) => {
      setMyCarsData(res.data);
    });
  }, [uid, refresh]);

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
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Daily Rental Price</th>
                <th>Availability</th>
                <th>Date Added</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myCarsData &&
                myCarsData.map((car) => (
                  <TableRow key={car._id} car={car} setRefresh={setRefresh} refresh={refresh}/>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCars;
