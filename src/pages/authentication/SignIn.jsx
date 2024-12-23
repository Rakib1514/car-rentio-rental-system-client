import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, Checkbox, Form, Input } from "antd";

const SignIn = ({ handleClose, open }) => {
  const { signInUser, setLoading } = useAuth();

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Success:", values);
    signInUser(values.email, values.password)
      .then((result) => {
        console.log(result.user);
        navigate('/')
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Sign-in</DialogTitle>
      <DialogContent style={{ padding: "40px" }}>
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
          // onFinishFailed={onFinishFailed}
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
        </Form>

        <Link
          to="/register"
          onClick={handleClose}
          className="block text-sm mt-4  hover:underline"
        >
          Don&apos;t have an account? Register here
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

SignIn.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
};

export default SignIn;
