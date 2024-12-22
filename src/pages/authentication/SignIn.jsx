import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = ({ handleClose, open }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUser } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // console.log(email, password);

  const handleSignIn = (e) => {
    e.preventDefault()
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleClose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Sign-in</DialogTitle>
      <DialogContent style={{ padding: "40px" }}>
        <form onSubmit={handleSignIn}>
          <TextField
            onChange={handleEmailChange}
            required
            type="email"
            label="Email"
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <TextField
            onChange={handlePasswordChange}
            required
            type="password"
            label="Password"
            fullWidth
          />
          <input type="submit" value="Sign in"  className="mt-4 w-full btn bg-primary font-bold text-white hover:text-black"/>
        </form>

        

        <Link to="/register" onClick={handleClose} className="block text-sm mt-4  hover:underline">
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
