import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, Checkbox, Form, Input } from "antd";
import GoogleSignIn from "./GoogleSignIn";
import { hotToastError } from "../../utils";

const SignInPage = () => {
  const { signInUser, setLoading } = useAuth();

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    signInUser(values.email, values.password)
      .then((result) => {
        if (result.user) {
          navigate("/");
        }
      })
      .catch(() => {
        setLoading(false);
        hotToastError("Password or email incorrect, please try again");
      });
  };

  return (
    <div className="py-12 md:w-1/2 mx-auto">
      <div className="mb-12">
        <h2 className="font-bold font-openSans md:text-3xl text-xl text-center">
          Sign in
        </h2>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Link to="/register" className="block text-sm mt-4  hover:underline">
          Don&apos;t have an account? Register here
        </Link>
      </Form>
      <div className="flex items-center justify-center mt-4">
        <div className="border-gray-400 border-b w-full "></div>
        <span className="px-6">or</span>
        <div className="border-gray-400 border-b w-full"></div>
      </div>
      <GoogleSignIn />
    </div>
  );
};

export default SignInPage;
