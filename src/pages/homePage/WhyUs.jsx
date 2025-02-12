import { FaCarSide } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { MdOutlineSupportAgent } from "react-icons/md";

const WhyUs = () => {
  return (
    <div className="mx-auto w-11/12 px-4 py-12 md:px-0">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Why Choose Car-Rentio?
      </h2>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div>
          <div
            className="flex h-52 items-end rounded border bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/4Nr3vLP/1714414840224.jpg')",
            }}
          >
            <h3 className="flex items-center gap-2 rounded-t bg-white p-4 font-bold">
              Wide Variety of Cars <FaCarSide />
            </h3>
          </div>
          <p className="mt-2">
            From budget-friendly options to luxury vehicles.
          </p>
        </div>
        <div>
          <div
            className="flex h-52 items-end rounded border bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/W3LzYCq/afordable-price.jpg')",
            }}
          >
            <h3 className="flex items-center gap-2 rounded-t bg-white p-4 font-bold">
              Affordable Prices <RiMoneyDollarCircleLine />
            </h3>
          </div>
          <p className="mt-2">Competitive daily rates you can count on.</p>
        </div>
        <div>
          <div
            className="flex h-52 items-end rounded border bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/MVPGtcf/Screenshot-2024-12-26-221811.png')",
            }}
          >
            <h3 className="flex items-center gap-2 rounded-t bg-white p-4 font-bold">
              Easy Booking Process <VscServerProcess />
            </h3>
          </div>
          <p className="mt-2">Seamlessly book your ride in just a few clicks</p>
        </div>
        <div>
          <div
            className="flex h-52 items-end rounded border bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/FY6xTCC/customer-service-pretty-blonde-girl-white-shirt-with-laptop-headset-talking-140725-164953.jpg')",
            }}
          >
            <h3 className="flex items-center gap-2 rounded-t bg-white p-4 font-bold">
              Customer Support <MdOutlineSupportAgent />
            </h3>
          </div>
          <p className="mt-2">24/7 assistance for all your queries.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
