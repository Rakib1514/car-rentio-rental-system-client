import Lottie from "lottie-react";
import carCrash from "../../assets/carCrash.json";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Error | Car-Rantio</title>
      </Helmet>
      <Navbar />
      <div className="mx-auto flex min-h-svh w-11/12 flex-col items-center">
        <h2 className="py-4 font-openSans text-xl font-bold md:text-3xl">
          Uh-oh! This Page Crashed
        </h2>
        <p>404 Page Not Found...... Go home</p>
        <Lottie className="h-96" animationData={carCrash} loop={true} />
        <Link className="btn bg-primary text-white hover:text-black">
          Take me Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
