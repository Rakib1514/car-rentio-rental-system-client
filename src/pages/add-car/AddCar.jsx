import { Form, Input, InputNumber, Radio, Select, Button, Upload } from "antd";
import useAuth from "../../hooks/useAuth";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const { TextArea } = Input;
  const { user } = useAuth();
  const [form] = Form.useForm();
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

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("image", values.image[0].originFileObj);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=070385361e57f4b40f93e79281fa6460",
        formData
      )
      .then((imgbbResponse) => {
        if (imgbbResponse.data.success) {
          const imageUrl = imgbbResponse.data.data.url;

          const carInfo = {
            ...values,
            carOwner: user.uid,
            timePosted: new Date().getTime(),
            bookingStatus: false,
            bookingCount: 0,
            image: imageUrl,
          };

          axios
            .post("/cars", carInfo)
            .then((response) => {
              form.resetFields();
              alert("Car added successfully");
              navigate(`/my-cars/${user?.uid}`);
              console.log(response.data);
            })
            .catch((error) => {
              console.error("Error adding car:", error);
              alert("There was an error adding the car.");
            });
        } else {
          alert("Failed to upload image to ImgBB");
        }
      })
      .catch((error) => {
        console.error("Error uploading image to ImgBB:", error);
        alert("There was an error uploading the image.");
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="py-10 text-3xl font-semibold uppercase">
          Add a car for Rent
        </h2>
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
          <Form.Item label="Car Model" name="carModel" required>
            <Input />
          </Form.Item>

          {/* Vehicle registration number */}
          <Form.Item
            label="Vehicle Registration"
            name="registrationNumber"
            required
          >
            <Input />
          </Form.Item>

          {/* Daily rent price */}
          <Form.Item label="Daily Rent" name="rentPrice" required>
            <InputNumber placeholder="e.g. $35" style={{ width: "100%" }} />
          </Form.Item>

          {/* Features */}
          <Form.Item label="Features" name="features" required>
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
          <Form.Item label="Availability" name="availability" required>
            <Radio.Group>
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

          {/* Upload file */}
          <Form.Item
            label="Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              action="/upload"
              listType="picture-card"
              accept="image/*"
              maxCount={1}
            >
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
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
