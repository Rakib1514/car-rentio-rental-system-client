import Banner from "./Banner";
import RecentListings from "./RecentListings";
import SpecialOffers from "./SpecialOffers";
import UserTestimonialStatic from "./UserTestimonialStatic";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyUs />
      <RecentListings />
      <SpecialOffers />
      <UserTestimonialStatic />
    </div>
  );
};

export default Home;
