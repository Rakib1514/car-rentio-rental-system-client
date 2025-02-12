import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { hotToastError } from "../utils";

const axiosInstance = axios.create({
  baseURL: "https://carrentio.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/sign-in");
              hotToastError("Something went Wrong. Please sign-in again.");
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
        return Promise.reject(error);
      },
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
