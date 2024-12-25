import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateCar from "./UpdateCar";
import { useState } from "react";
import axios from "axios";
import { hotToastSuccess } from "../../utils";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const TableRow = ({ car, setRefresh, refresh, idx }) => {
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
        hotToastSuccess("Updated Successfully");
      }
    });
  };

  const handleDelete = (id) => {
    axios.delete(`/delete-car/${id}`).then((res) => {
      if(res.data.deletedCount){
        hotToastSuccess("Car Removed");
        setRefresh(refresh + 1);
      }
    });
  };

  const submit = (id) => {
    confirmAlert({
      title: "Remove Car from Rent",
      message: "Are you sure you want to remove this car from rent?",
      buttons: [
        {
          label: "Remove",
          onClick: () => handleDelete(id),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  return (
    <>
      <tr className={`hover:bg-primary hover:text-white duration-500 ease-in-out transition-all  ${idx%2 === 0 || "bg-slate-200"}`}>
        <td>{idx+1}</td>
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
          <button
            onClick={() => submit(car._id)}
            className="p-2 mr-2 hover:scale-110 bg-red-800 text-white"
          >
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
  idx: PropTypes.number,
};

export default TableRow;
