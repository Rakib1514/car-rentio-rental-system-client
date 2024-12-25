import PropTypes from "prop-types";
import { Button, Form, Modal, TimePicker } from "antd";
import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const UpdateBookingDate = ({
  isModalOpen,
  setIsModalOpen,
  handleBooking,
  car,
  onChange,
}) => {
  const { carModel, rentPrice, image } = car;

  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);

  const onStartDayChange = (date) => {
    setStartDay(date);
  };
  const onEndDayChange = (date) => {
    setEndDay(date);
  };

  const [totalDays, setTotalDays] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    if (!startDay || !endDay) {
      setTotalDays(0);
      setTax(0);
    }
    if (startDay && endDay) {
      setTotalDays(endDay.diff(startDay, "days") + 1);
      const tax = ((totalDays * rentPrice) / 100) * 3;
      setTax(tax.toFixed(2));
    }
  }, [endDay, rentPrice, startDay, totalDays]);

  return (
    <Modal
      title={carModel}
      open={isModalOpen}
      okText={"Book Car"}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        className="w-full px-6"
        onFinish={handleBooking}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        {/* Start Date picker */}
        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: "Please enter Start Date" }]}
        >
          <DatePicker
            onChange={onStartDayChange}
            placeholder="Start Date"
            disabledDate={(current) =>
              current && current < dayjs().startOf("day")
            }
          />
        </Form.Item>

        {/* End date picker */}
        <Form.Item
          label="End Date"
          name="endDate"
          rules={[{ required: true, message: "Please enter End Date" }]}
        >
          <DatePicker
            onChange={onEndDayChange}
            placeholder="End Date"
            disabledDate={(current) =>
              current && current < dayjs().startOf("day")
            }
          />
        </Form.Item>

        {/* Time Picker */}
        <Form.Item
          label="Start Time"
          name="startTime"
          rules={[{ required: true, message: "Please enter when to start" }]}
        >
          <TimePicker
            use12Hours
            format="h:mm A"
            placeholder="Select Time"
            onChange={onChange}
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item className="md:translate-x-6">
          <Button type="primary" htmlType="submit" className="w-full">
            Book Confirm
          </Button>
        </Form.Item>
      </Form>
      <div
        className="bg-center p-6 "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-white bg-opacity-40 p-4 backdrop-blur-md">
          <h4 className="font-semibold md:text-xl">Total cost:</h4>
          <p>Booking days: {totalDays} days</p>
          <p>Total Car Rent: ${totalDays * rentPrice}</p>
          <p>Fee: ${3}</p>
          <p>Tax: ${tax}</p>
          <p className="font-bold">
            Total Cost: {totalDays * rentPrice + parseFloat(tax) + 3}
          </p>
        </div>
      </div>
    </Modal>
  );
};

UpdateBookingDate.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  handleBooking: PropTypes.func,
  car: PropTypes.object,
  onChange: PropTypes.func,
  totalDay: PropTypes.number,
};

export default UpdateBookingDate;
