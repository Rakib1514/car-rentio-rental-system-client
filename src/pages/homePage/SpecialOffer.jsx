import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto my-12 w-11/12">
        <h2 className="mb-6 text-center text-3xl font-bold">Special Offers</h2>
        <p className="mb-8 text-center text-gray-600">
          Grab these exclusive deals and make your journey more affordable and
          luxurious.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
              className="flex h-64 items-end bg-cover bg-center p-3"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/34f0WHh/black-friday.jpg')",
              }}
            >
              <h2 className="rounded bg-white p-2 font-semibold">
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
              className="flex h-64 items-end bg-cover bg-center p-3"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/jWYNQFc/summer-party-1048-10093.jpg')",
              }}
            >
              <h2 className="rounded bg-white p-2 font-semibold">
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
              className="flex h-64 items-end bg-cover bg-center p-3"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/wBzgHMg/happy-new-year-2025-festive-celebration-background-1035-29586.jpg')",
              }}
            >
              <h2 className="rounded bg-white p-2 font-semibold">
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
