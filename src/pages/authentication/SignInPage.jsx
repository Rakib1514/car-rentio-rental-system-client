import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, Checkbox, Form, Input } from "antd";
import GoogleSignIn from "./GoogleSignIn";
import { hotToastError } from "../../utils";

const SignInPage = () => {
  const { signInUser, setLoading } = useAuth();
  const navigate = useNavigate();

  // sign in handle
  const onFinish = (values) => {
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
    <div className="mx-auto py-12 md:w-1/2">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="font-openSans text-xl font-bold md:text-3xl">
          Welcome Back to Car-Rentio!
        </h2>
        <p>
          Sign in to manage your bookings, add cars, and explore exclusive
          deals.
        </p>
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
        <Link to="/register" className="mt-4 block text-sm hover:underline">
          Don&apos;t have an account? Register here
        </Link>
      </Form>
      <div className="mt-4 flex items-center justify-center">
        <div className="w-full border-b border-gray-400"></div>
        <span className="px-6">or</span>
        <div className="w-full border-b border-gray-400"></div>
      </div>
      <GoogleSignIn />
    </div>
  );
};

export default SignInPage;
