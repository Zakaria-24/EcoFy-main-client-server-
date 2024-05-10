// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bgimg1 from "../../../public/EcoFy.png";
import bgimg2 from "../../../public/EcoFy.png";
import bgimg3 from "../../../public/EcoFy.png";
import Slider from "./Slider";

const Carousel = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            image={bgimg1}
            text="Get Your Web Development Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={bgimg2}
            text="Get Your Graphics Design Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={bgimg3}
            text="Start Your Digital Marketing Campaigns up n running"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
