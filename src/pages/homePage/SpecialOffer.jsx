import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-11/12 mx-auto my-12 ">
        <h2 className="text-3xl font-bold text-center mb-6">Special Offers</h2>
        <p className="text-gray-600 text-center mb-8">
          Grab these exclusive deals and make your journey more affordable and
          luxurious.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <motion.div
            initial={{
              x: -350,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "circIn",
            }}
          >
            <div
              className="p-3 h-64 bg-center bg-cover flex items-end"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/34f0WHh/black-friday.jpg')",
              }}
            >
              <h2 className="p-2 bg-white rounded font-semibold">
                Unlock Up to 50% Off This Black Friday!
              </h2>
            </div>
            <p className="ml-2 mt-2">
              Grab Up to 50% Off – Black Friday Deals Won&apos;t Last!
            </p>
          </motion.div>

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 700,
            }}
          >
            <div
              className="p-3 h-64 bg-center bg-cover flex items-end"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/jWYNQFc/summer-party-1048-10093.jpg')",
              }}
            >
              <h2 className="p-2 bg-white rounded font-semibold">
                Weekend Frenzy – Grab Amazing Deals!
              </h2>
            </div>
            <p className="ml-2 mt-2">
              Save up to 25% this weekend! Limited-time discounts you won’t want
              to miss.
            </p>
          </motion.div>

          <motion.div
            initial={{
              x: 350,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "circIn",
            }}
          >
            <div
              className="p-3 h-64 bg-center bg-cover flex items-end"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/wBzgHMg/happy-new-year-2025-festive-celebration-background-1035-29586.jpg')",
              }}
            >
              <h2 className="p-2 bg-white rounded font-semibold">
                New Year, New Ride – Special Car Rental Deals!
              </h2>
            </div>
            <p className="ml-2 mt-2">
              Celebrate the New Year with up to 30% off on car rentals. Book now
              and drive into 2024 with great savings!S
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
