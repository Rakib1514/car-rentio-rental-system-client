import axios from "axios";

const carLoader = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`/car/${id}`);
  return res.data;
};

export default carLoader;
