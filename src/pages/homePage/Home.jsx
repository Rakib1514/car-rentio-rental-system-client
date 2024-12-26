import Banner from "./Banner";
import RecentListings from "./RecentListings";
import SpecialOffer from "./SpecialOffer";
// import SpecialOffers from "./SpecialOffers";
import UserTestimonialStatic from "./UserTestimonialStatic";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecentListings />
      <WhyUs />
      <SpecialOffer />
      <UserTestimonialStatic />
    </div>
  );
};

export default Home;
