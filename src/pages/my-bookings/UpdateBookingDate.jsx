import PropTypes from "prop-types";
import { Button, Form, Modal } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const UpdateBookingDate = ({handleUpdateBooking,isModalOpen, setIsModalOpen, newDateObj}) => {
  return (
    <Modal
      title={""}
      open={isModalOpen}
      okText={"Book Car"}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        className="w-full px-6"
        onFinish={handleUpdateBooking}
        initialValues={newDateObj}
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
            placeholder="End Date"
            disabledDate={(current) =>
              current && current < dayjs().startOf("day")
            }
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item className="md:translate-x-6">
          <Button type="primary" htmlType="submit" className="w-full">
            Update
          </Button>
        </Form.Item>
      </Form>
      
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
