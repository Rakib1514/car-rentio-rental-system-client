import { Link } from "react-router-dom";

const NoCarAdded = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">No Car Added. Please Add a Car for Rent</h1>
          <Link to={'/add-car'} className="btn bg-primary text-white hover:text-black">Add a Car for Rent</Link>
        </div>
      </div>
    </div>
  );
};

export default NoCarAdded;
