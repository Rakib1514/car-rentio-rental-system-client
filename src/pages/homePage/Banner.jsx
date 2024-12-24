import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[50vh] bg-cover bg-center object-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/jy1SRb6/Yellow-car.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold capitalize text-white">your next car awaits you</h1>
          <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={'/available-cars'} className="btn btn-outline bg-primary font-bold text-white font-openSans">View Available Cars</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
