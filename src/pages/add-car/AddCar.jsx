import { Form, Input, InputNumber, Radio, Select, Button } from "antd";
import useAuth from "../../hooks/useAuth";

const AddCar = () => {
  const { TextArea } = Input;

  const {user} = useAuth();

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
      // we will get time stamp in milliseconds. We can convert it to date using new Date(timePosted)
      timePosted: new Date().getTime(), 
      bookingStatus: false,
      bookingCount: 0,
    };
    console.log(carInfo);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="py-10 text-3xl font-semibold uppercase">
          Add a car for Rent
        </h2>
        <Form
          onFinish={onFinish}
          labelCol={{
            span: 10,
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
          <Form.Item label="Car Model" name="carModel">
            <Input />
          </Form.Item>

          {/* Vehicle registration number */}
          <Form.Item label="Vehicle Registration" name="registrationNumber">
            <Input />
          </Form.Item>

          {/* Daily rent price */}
          <Form.Item label="Daily Rent" name="rentPrice">
            <InputNumber placeholder="e.g. $35" style={{ width: "100%" }} />
          </Form.Item>

          {/* Features */}
          <Form.Item label="Features" name="features">
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
          <Form.Item label="Availability" name="availability">
            <Radio.Group defaultValue={true}>
              <Radio value={true}> Available </Radio>
              <Radio value={false}> Unavailable </Radio>
            </Radio.Group>
          </Form.Item>
           {/* Location */}
           <Form.Item label="Location " name="location">
            <Input />
          </Form.Item>

          {/* Description */}
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Add Car for Rent
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddCar;
