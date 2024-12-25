import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import GoogleSignIn from "./GoogleSignIn";
import { hotToastError } from "../../utils";

const SignIn = ({ setIsModalOpen, isModalOpen }) => {
  const { signInUser, setLoading } = useAuth();

  const navigate = useNavigate();

  const onFinish = (values) => {
    signInUser(values.email, values.password)
      .then((result) => {
        if (result && result.user) {
          navigate("/");
          form.resetFields();
          setIsModalOpen(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        hotToastError(error.message ||"Password or email incorrect, please try again");
      });
  };
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Sign in"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          form={form}
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
              Sign in
            </Button>
          </Form.Item>
          <Link
            to="/register"
            onClick={() => setIsModalOpen(false)}
            className="block text-sm mt-4  hover:underline"
          >
            Don&apos;t have an account? Register here
          </Link>
        </Form>

        <div className="flex items-center justify-center mt-4">
          <div className="border-gray-400 border-b w-full "></div>
          <span className="px-6">or</span>
          <div className="border-gray-400 border-b w-full"></div>
        </div>
        
        <GoogleSignIn setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

SignIn.propTypes = {
  setIsModalOpen: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

export default SignIn;
