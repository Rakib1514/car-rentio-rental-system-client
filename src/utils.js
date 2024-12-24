import toast from "react-hot-toast";

const hotToastSuccess = (msg) => {
  toast.success(msg, {
    style: {
      background: "green",
      color: "#fff",
    },
  });
};
const hotToastError = (msg) => {
  toast.error(msg, {
    style: {
      padding: "1rem",
      borderRadius: "8px",
    },
  });
};

export { hotToastSuccess, hotToastError };
