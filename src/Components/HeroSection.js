import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";
import "animate.css";
import "./swiper-custom.css";

// Install Swiper modules
SwiperCore.use([Autoplay]);

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-yellow-200 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left animate__animated animate__fadeInLeft">
  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-yellow-400 animate__animated animate__fadeInDown animate__delay-1s">
    Discover the Future of Shopping
  </h1>
  <p className="text-base sm:text-lg lg:text-xl text-yellow-200 animate__animated animate__fadeInUp animate__delay-2s leading-relaxed">
    Welcome to Flash Buy, where innovation meets convenience. Explore a seamless blend of physical and digital shopping for a revolutionary retail experience.
  </p>
  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
    <button className="bg-yellow-500 text-gray-900 font-semibold rounded-full py-3 px-8 shadow-md hover:shadow-lg hover:scale-105 hover:bg-yellow-400 transition-all duration-300">
      Explore Now
    </button>
    <button className="bg-gray-800 text-yellow-200 font-semibold rounded-full py-3 px-8 shadow-md hover:shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300">
      Learn More
    </button>
  </div> 
</div>
       

          {/* Swiper Content */}
          <div className="md:w-1/2 w-full animate__animated animate__fadeInRight">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="rounded-lg overflow-hidden"
            >
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/premium-vector/sale-banner-template-design-with-geometric-background-big-sale-special-offer-up-80-off-super-sale-end-season-special-offer-banner-vector-illustration_2307-605.jpg"
                  alt="Flash Buy Slide 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/premium-vector/sale-banner-template-design-with-geometric-background-big-sale-special-offer-up-80-off-super-sale-end-season-special-offer-banner-vector-illustration_2307-653.jpg"
                  alt="Flash Buy Slide 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/premium-vector/flash-sale-banner-template-design-social-media-website-special-offer-flash-sale-campaign_902944-915.jpg"
                  alt="Flash Buy Slide 3"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
