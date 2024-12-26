import axios from "axios";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { hotToastSuccess } from "../../utils";
import UpdateBookingDate from "./UpdateBookingDate";
import { SlCalender } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { Popconfirm } from "antd";
import { useState } from "react";

const BookingRow = ({ booking, idx, setRefresh, refresh }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    carImage,
    carModel,
    startDate,
    endDate,
    bookingStatus,
    _id,
    dailyRent,
  } = booking;

  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const newDateObj = {
    startDate: start,
    endDate: end,
  };

  const startDateFormatted = start.format("DD/MM/YYYY");
  const endDateFormatted = end.format("DD/MM/YYYY");

  const totalDays = end.diff(start, "days") + 1;

  const tax = ((totalDays * dailyRent) / 100) * 3;

  const totalCost = totalDays * dailyRent + parseFloat(tax) + 3;

  const handleUpdateBooking = (values) => {
    console.log(values);

    axios.patch(`/my-bookings/${_id}`, values).then((res) => {
      console.log(res.data);
      setRefresh(refresh + 1);
      hotToastSuccess("Reservation date updated");
      setIsModalOpen(false);
    });
  };

  const handleCancel = (id) => {
    axios
      .patch(`/my-bookings/${id}`, { bookingStatus: "Canceled" })
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          hotToastSuccess("Reservation Canceled");
          setRefresh(refresh + 1);
        }
      });
  };

  return (
    <>
      <tr
        className={`hover:bg-primary hover:text-white duration-300 ease-in-out transition-all  ${
          idx % 2 == 0 || "bg-slate-200"
        }`}
      >
        <td>{idx + 1}</td>

        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={carImage} alt={carModel} />
              </div>
            </div>
            <div>
              <div className="font-bold">{carModel}</div>
              <div className="text-sm opacity-80"></div>
            </div>
          </div>
        </td>

        <td>$ {totalCost}</td>

        <td>
          <p>From</p>
          <p>{startDateFormatted}</p>
        </td>

        <td>
          <p>To</p>
          <p>{endDateFormatted}</p>
        </td>

        <td className="capitalize">{bookingStatus}</td>

        <td className={bookingStatus === "Canceled" && "hidden"}>
          <span
            onClick={() => setIsModalOpen(true)}
            className="border-b cursor-pointer bg-primary bg-opacity-20 p-2 hover:text-black flex gap-2 font-semibold hover:scale-105"
          >
            Update <SlCalender />
          </span>
        </td>

        <td className={bookingStatus === "Canceled" && "hidden"}>
          <Popconfirm
            title="Cancel Reservation"
            description="Are you certain you want to cancel this booking?"
            onConfirm={() => handleCancel(_id)}
            okText="Yes. Cancel Reservation"
            cancelText="No"
          >
            <span className="border-b cursor-pointer bg-red-200 p-2 hover:text-black flex gap-2 font-semibold hover:scale-105">
              Cancel <FaTrashAlt />
            </span>
          </Popconfirm>
        </td>
      </tr>
      <UpdateBookingDate
        newDateObj={newDateObj}
        handleUpdateBooking={handleUpdateBooking}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object,
  idx: PropTypes.number,
  setRefresh: PropTypes.func,
  refresh: PropTypes.number,
};

export default BookingRow;
