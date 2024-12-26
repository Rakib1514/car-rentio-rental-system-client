import Lottie from "lottie-react";
import carCrash from "../../../public/carCrash.json";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-svh flex flex-col items-center w-11/12 mx-auto">
        <h2 className="py-4 md:text-3xl text-xl font-bold font-openSans">Uh-oh! This Page Crashed</h2>
        <Lottie className="h-96" animationData={carCrash} loop={true} />
        <Link className="btn bg-primary text-white hover:text-black">
          Take me Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
