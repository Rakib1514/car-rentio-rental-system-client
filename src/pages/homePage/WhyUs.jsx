import {
  FaCar,
  FaDollarSign,
  FaRegCalendarCheck,
  FaHeadset,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Car-Rentio?
      </h2>
      <div className="grid  grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="stateCard">
          <FaCar className="text-6xl text-blue-500 mb-4" />
          <h3>Wide Variety of Cars</h3>
          <p>From budget-friendly options to luxury vehicles.</p>
        </div>
        <div className="stateCard">
          <FaDollarSign className="text-6xl text-green-500 mb-4" />
          <h3>Affordable Prices</h3>
          <p>Competitive daily rates you can count on.</p>
        </div>
        <div className="stateCard">
          <FaRegCalendarCheck className="text-6xl text-yellow-500 mb-4" />
          <h3>Easy Booking Process</h3>
          <p>Seamlessly book your ride in just a few clicks.</p>
        </div>
        <div className="stateCard">
          <FaHeadset className="text-6xl text-red-500 mb-4" />
          <h3>Customer Support</h3>
          <p>24/7 assistance for all your queries.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
