import { Form, Input, InputNumber, Radio, Select, Button } from "antd";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { hotToastSuccess } from "../../utils";

const AddCar = () => {
  const { TextArea } = Input;
  const { user } = useAuth();
  const navigate = useNavigate();

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

  const onFinish = (values) => {
    const carInfo = {
      ...values,
      carOwner: user.uid,
      timePosted: new Date().getTime(),
      bookingStatus: false,
      bookingCount: 0,
    };

    axios
      .post("/cars", carInfo)
      .then((res) => {
        if (res.data.insertedId) {
          hotToastSuccess("Car added successfully");
          navigate(`/my-cars/${user?.uid}`);
        }
      })
      .catch(() => {
        alert("There was an error adding the car.");
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="py-10 text-center space-y-2">
        <h2 className=" text-3xl font-semibold uppercase">
          Add Your Car to Car-rentio Fleet
        </h2>
        <p>Fill in the details below to list your car and start earning today!</p>
        </div>
        <Form
          className="w-full px-6"
          onFinish={onFinish}
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
              { required: true, message: "Please enter Vehicle reg number" },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Daily rent price */}
          <Form.Item
            label="Daily Rent"
            name="rentPrice"
            rules={[
              { required: true, message: "Please enter Daily Rent price" },
            ]}
          >
            <InputNumber placeholder="e.g. $35" style={{ width: "100%" }} />
          </Form.Item>

          {/* Features */}
          <Form.Item
            label="Features"
            name="features"
            rules={[
              { required: true, message: "Please select at least 1 feature" },
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
            rules={[
              {
                required: true,
                message: "Please select Vehicle available or not",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}> Available </Radio>
              <Radio value={false}> Unavailable </Radio>
            </Radio.Group>
          </Form.Item>
          {/* Location */}
          <Form.Item
            label="Location "
            name="location"
            rules={[{ required: true, message: "Please enter area" }]}
          >
            <Input />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter Description" }]}
          >
            <TextArea rows={4} maxLength={1000} showCount />
          </Form.Item>

          {/* Upload file */}
          <Form.Item
            label="Image URL"
            name="image"
            rules={[
              { required: true, message: "Please enter image url" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input type="url" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="md:translate-x-32">
            <Button type="primary" htmlType="submit" className="w-full">
              Add Car for Rent
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddCar;
