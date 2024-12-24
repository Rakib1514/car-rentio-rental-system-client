import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateCar from "./UpdateCar";
import { useState } from "react";
import axios from "axios";
import { hotToastSuccess } from "../../utils";

const TableRow = ({ car, setRefresh, refresh }) => {
  const { rentPrice, availability, timePosted, carModel, image } = car;
  const day = new Date(timePosted).getDate();
  const month = new Date(timePosted).getMonth() + 1;
  const year = new Date(timePosted).getFullYear();
  const postedDate = `${day}/${month}/${year}`;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // setIsModalOpen(false);
  const handleOk = (values) => {
    axios.patch(`/update-car/${car._id}`, values).then((res) => {
      if (res.data.modifiedCount) {
        setRefresh(refresh + 1);
        setIsModalOpen(false);
        hotToastSuccess('Updated Successfully')
      }
    });
  };

  return (
    <>
      <tr>
        <td></td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt={carModel} />
              </div>
            </div>
            <div>
              <div className="font-bold">{carModel}</div>
              <div className="text-sm opacity-80"></div>
            </div>
          </div>
        </td>

        <td>
          <span className="font-bold">$ {rentPrice}</span>
        </td>
        <td>
          <span
            className={`badge badge-sm ${
              availability ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {availability ? "Available" : "Unavailable"}
          </span>
        </td>
        <td>
          <p>{postedDate}</p>
        </td>
        <td>
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 mr-2 hover:scale-110 bg-primary text-white"
          >
            <FaEdit />
          </button>
          <button className="p-2 mr-2 hover:scale-110 bg-red-800 text-white">
            <FaTrash />
          </button>
        </td>
        <UpdateCar
          car={car}
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </tr>
    </>
  );
};

TableRow.propTypes = {
  car: PropTypes.object,
  setRefresh: PropTypes.func,
  refresh: PropTypes.number,
};

export default TableRow;
