import axios from "axios";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { hotToastSuccess } from "../../utils";
import UpdateBookingDate from "./UpdateBookingDate";
import { SlCalender } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { Button, message, Popconfirm } from "antd";

const BookingRow = ({ booking, idx, setRefresh, refresh }) => {
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

  const startDateFormatted = start.format("DD/MM/YYYY");
  const endDateFormatted = end.format("DD/MM/YYYY");

  // (totalDays * rentPrice) / 100) * 3

  const totalDays = end.diff(start, "days") + 1;

  const tax = ((totalDays * dailyRent) / 100) * 3;

  const totalCost = totalDays * dailyRent + parseFloat(tax) + 3;

  const handleUpdateBooking = (id) => {};

  const handleCancel = (id) => {
    axios.delete(`/my-bookings/${id}`).then((res) => {
      if (res.data.deletedCount) {
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

        <td>
          <span
            onClick={() => handleUpdateBooking(_id)}
            className="border-b cursor-pointer hover:bg-white p-2 hover:text-black flex gap-2 font-semibold hover:scale-105"
          >
            Update <SlCalender />
          </span>
        </td>

        <td>
          <Popconfirm
            title="Cancel Reservation"
            description="Are you certain you want to cancel this booking?"
            onConfirm={() => handleCancel(_id)}
            okText="Yes. Cancel Reservation"
            cancelText="No"
          >
            <span className="border-b cursor-pointer hover:bg-red-200 p-2 hover:text-black flex gap-2 font-semibold hover:scale-105">
              Cancel <FaTrashAlt />
            </span>
          </Popconfirm>
        </td>
      </tr>
      {/* <UpdateBookingDate/> */}
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
