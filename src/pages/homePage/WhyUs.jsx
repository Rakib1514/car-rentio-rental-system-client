import { FaCarSide } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { MdOutlineSupportAgent } from "react-icons/md";




const WhyUs = () => {
  return (
    <div className="w-11/12 mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Car-Rentio?
      </h2>
      <div className="grid  grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div
            className="flex items-end h-52 border rounded shadow-lg  bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/4Nr3vLP/1714414840224.jpg')",
            }}
          >
            <h3 className="font-bold p-4 bg-white rounded-t flex gap-2 items-center ">Wide Variety of Cars <FaCarSide /></h3>
          </div>
          <p className="mt-2">From budget-friendly options to luxury vehicles.</p>
        </div>
        <div>
          <div
            className="flex items-end border h-52 rounded shadow-lg  bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/W3LzYCq/afordable-price.jpg')",
            }}
          >
            <h3 className="font-bold p-4 bg-white rounded-t flex items-center gap-2">Affordable Prices <RiMoneyDollarCircleLine /></h3>
          </div>
          <p className="mt-2">Competitive daily rates you can count on.</p>
        </div>
        <div>
          <div
            className="flex items-end h-52 border rounded shadow-lg  bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/MVPGtcf/Screenshot-2024-12-26-221811.png')",
            }}
          >
            <h3 className="font-bold p-4 bg-white rounded-t flex items-center gap-2">Easy Booking Process <VscServerProcess /></h3>
          </div>
          <p className="mt-2">Seamlessly book your ride in just a few clicks</p>
        </div>
        <div>
          <div
            className="flex items-end h-52 border rounded shadow-lg  bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/FY6xTCC/customer-service-pretty-blonde-girl-white-shirt-with-laptop-headset-talking-140725-164953.jpg')",
            }}
          >
            <h3 className="font-bold p-4 bg-white rounded-t flex items-center gap-2">Customer Support <MdOutlineSupportAgent /></h3>
          </div>
          <p className="mt-2">24/7 assistance for all your queries.</p>
        </div>

        
        
      </div>
    </div>
  );
};

export default WhyUs;
