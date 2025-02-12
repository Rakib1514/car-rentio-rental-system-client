import { Swiper, SwiperSlide } from "swiper/react";
import { UserOutlined } from "@ant-design/icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Avatar } from "antd";

const UserTestimonialStatic = () => {
  return (
    <>
      <div className="mx-auto max-h-svh lg:w-4/6">
        <div className="rounded-2xl border-b-2 border-primary pb-4 text-center font-openSans text-xl font-semibold md:text-3xl">
          <h1>What Clients Say</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {/* Slider 1 */}
          <SwiperSlide>
            <div className="relative max-w-md rounded-xl bg-[#121212] p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-primary">“</span>
                <div className="flex space-x-1">
                  <span className="text-xl text-[#FFA500]">★★★★★</span>
                </div>
              </div>

              <p className="mb-4 mt-2 text-white">
                “Rented a car from this website, and the experience was
                seamless! The car was in excellent condition, the booking
                process was smooth, and customer support was fantastic. Highly
                recommend their service!” 🚗✨
              </p>

              <div className="mt-6 flex items-center">
                <Avatar
                  src="https://media.architecturaldigest.com/photos/6761a27784cfd20ac302174d/16:9/w_2560%2Cc_limit/GettyImages-2188252121.jpg"
                  size={64}
                  icon={<UserOutlined />}
                />
                <div className="ml-3">
                  <h4 className="font-bold text-white">Jenifer L</h4>
                  <p className="text-sm text-gray-400">Renter</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider 2 */}
          <SwiperSlide>
            <div className="relative max-w-md rounded-xl bg-[#121212] p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-primary">“</span>
                <div className="flex space-x-1">
                  <span className="text-xl text-[#FFA500]">★★★★★</span>
                </div>
              </div>

              <p className="mb-4 mt-2 text-white">
                “Had an amazing experience renting a car from this site! The
                process was quick, the car was spotless, and the service was
                top-notch. Will definitely rent again. Highly recommended!” 🚘🌟
              </p>

              <div className="mt-6 flex items-center">
                <Avatar
                  src="https://variety.com/wp-content/uploads/2013/12/01-iron-man-3.jpg"
                  size={64}
                  icon={<UserOutlined />}
                />
                <div className="ml-3">
                  <h4 className="font-bold text-white">Robert D</h4>
                  <p className="text-sm text-gray-400">Renter</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider 3 */}
          <SwiperSlide>
            <div className="relative max-w-md rounded-xl bg-[#121212] p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-primary">“</span>
                <div className="flex space-x-1">
                  <span className="text-xl text-[#FFA500]">★★★★★</span>
                </div>
              </div>

              <p className="mb-4 mt-2 text-white">
                “Had an amazing experience renting a car from this site! The
                process was quick, the car was spotless, and the service was
                top-notch. Will definitely rent again. Highly recommended!” 🚘🌟
              </p>

              <div className="mt-6 flex items-center">
                <Avatar
                  src="https://www.thekeyexecutives.com/wp-content/uploads/2021/08/Emma-Watson.jpg"
                  size={64}
                  icon={<UserOutlined />}
                />
                <div className="ml-3">
                  <h4 className="font-bold text-white">Emma Watson</h4>
                  <p className="text-sm text-gray-400">Renter</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider 4 */}
          <SwiperSlide>
            <div className="relative max-w-md rounded-xl bg-[#121212] p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-primary">“</span>
                <div className="flex space-x-1">
                  <span className="text-xl text-[#FFA500]">★★★★★</span>
                </div>
              </div>

              <p className="mb-4 mt-2 text-white">
                “Absolutely loved my experience renting a car from this site!
                The booking was seamless, the car was in perfect condition, and
                the customer support was exceptional. I’ll definitely be using
                this service again. Highly recommend!” 🚗🌟
              </p>

              <div className="mt-6 flex items-center">
                <Avatar
                  src="https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg"
                  size={64}
                  icon={<UserOutlined />}
                />
                <div className="ml-3">
                  <h4 className="font-bold text-white">Chris Hemsworth</h4>
                  <p className="text-sm text-gray-400">Renter</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider 5 */}
          <SwiperSlide>
            <div className="relative max-w-md rounded-xl bg-[#121212] p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-primary">“</span>
                <div className="flex space-x-1">
                  <span className="text-xl text-[#FFA500]">★★★★★</span>
                </div>
              </div>

              <p className="mb-4 mt-2 text-white">
                “Fantastic experience renting from this site! The car was clean,
                well-maintained, and the rental process was incredibly smooth.
                The team made everything easy and hassle-free. Will definitely
                be back for my next trip!” 🚙🌟
              </p>

              <div className="mt-6 flex items-center">
                <Avatar
                  src="https://cdn.britannica.com/59/182359-050-C6F38CA3/Scarlett-Johansson-Natasha-Romanoff-Avengers-Age-of.jpg"
                  size={64}
                  icon={<UserOutlined />}
                />
                <div className="ml-3">
                  <h4 className="font-bold text-white">Scarlett Johansson</h4>
                  <p className="text-sm text-gray-400">Renter</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default UserTestimonialStatic;
