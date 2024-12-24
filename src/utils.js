import toast from "react-hot-toast";

const hotToastSuccess = (msg) => {
  toast.success(msg, {
    style: {
      background: 'green',
      color: '#fff',
    },
  });
};

export { hotToastSuccess };
