import PropTypes from "prop-types";
import { Button, Input, InputNumber, Modal, Radio, Select } from "antd";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

const options = [
  { label: "GPS", value: "GPS" },
  { label: "Bluetooth", value: "Bluetooth" },
  { label: "AC", value: "AC" },
  { label: "Heated Seats", value: "Heated Seats" },
  { label: "Sunroof", value: "Sunroof" },
  { label: "Leather Seats", value: "Leather Seats" },
  { label: "Backup Camera", value: "Backup Camera" },
  { label: "Keyless Entry", value: "Keyless Entry" },
  { label: "Cruise Control", value: "Cruise Control" },
  { label: "Parking Sensors", value: "Parking Sensors" },
  { label: "Lane Assist", value: "Lane Assist" },
  { label: "Blind Spot Monitoring", value: "Blind Spot Monitoring" },
  { label: "Apple CarPlay", value: "Apple CarPlay" },
  { label: "Android Auto", value: "Android Auto" },
  { label: "Automatic Headlights", value: "Automatic Headlights" },
  { label: "Wireless Charging", value: "Wireless Charging" },
  { label: "Remote Start", value: "Remote Start" },
  { label: "Navigation System", value: "Navigation System" },
];

const UpdateCar = ({ isModalOpen, setIsModalOpen, handleOk, car }) => {
  return (
    <>
      <Modal
        footer={false}
        title="Update Car Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          initialValues={car}
          className="w-full px-6"
          onFinish={handleOk}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          {/* Car model */}
          <Form.Item
            label="Car Model"
            name="carModel"
            rules={[{ required: true, message: "Please enter car model" }]}
          >
            <Input />
          </Form.Item>

          {/* Vehicle registration number */}
          <Form.Item
            label="Vehicle Registration"
            name="registrationNumber"
            rules={[
              { required: true, message: "Please enter vehicle registration" },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Daily rent price */}
          <Form.Item
            label="Daily Rent"
            name="rentPrice"
            rules={[
              { required: true, message: "Please enter daily rent price" },
            ]}
          >
            <InputNumber placeholder="e.g. $35" style={{ width: "100%" }} />
          </Form.Item>

          {/* Features */}
          <Form.Item
            label="Features"
            name="features"
            rules={[
              { required: true, message: "Please select at least one feature" },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              options={options}
            />
          </Form.Item>

          {/* Availability */}
          <Form.Item
            label="Availability"
            name="availability"
            rules={[{ required: true, message: "Please select availability" }]}
          >
            <Radio.Group>
              <Radio value={true}> Available </Radio>
              <Radio value={false}> Unavailable </Radio>
            </Radio.Group>
          </Form.Item>

          {/* Location */}
          <Form.Item
            label="Location"
            name="location"
            rules={[
              { required: true, message: "Please enter the car location" },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Image URL*/}
          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>

          {/* Description */}
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Update Car Info
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

UpdateCar.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  handleOk: PropTypes.func,
  car: PropTypes.object,
};

export default UpdateCar;
