import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Get 15% Off for Weekend Rentals!",
    description:
      "Enjoy exclusive discounts on weekend car rentals. Book now and save big!",
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "Luxury Cars at $99/day this Holiday Season!",
    description:
      "Experience luxury at an affordable price. Limited time offer!",
    buttonText: "Book Now",
  },
  {
    id: 3,
    title: "First-Time Renters Get 10% Off!",
    description:
      "Your first rental deserves a special discount. Don’t miss out!",
    buttonText: "Get Discount",
  },
  {
    id: 4,
    title: "Free Upgrade on Weekly Rentals!",
    description:
      "Book for a week and enjoy a free car upgrade. Drive in style!",
    buttonText: "Upgrade Now",
  },
];

const SpecialOffers = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-6 ">Special Offers</h2>
      <p className="text-gray-600 text-center mb-8">
        Grab these exclusive deals and make your journey more affordable and
        luxurious.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer, idx) => (
          <motion.div
            key={offer.id}
            className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary"
            initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              {offer.title}
            </h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <button className="btn text-white px-4 py-2 rounded-md hover:bg-primary bg-primary">
              {offer.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
