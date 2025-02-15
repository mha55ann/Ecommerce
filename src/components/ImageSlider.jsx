import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import images from assets folder
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";

const ImageSlider = () => {
  return (
    <div className="w-full md:w-[65vw]   md:h-[50vh] h-[30vh] relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="rounded-lg shadow-lg w-full h-full"
      >
        <SwiperSlide>
          <img
            src={s1}
            alt="Slide 1"
            className="w-full md:w-[65vw]   md:h-[50vh] h-[30vh] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={s2}
            alt="Slide 2"
            className="w-full md:w-[65vw]   md:h-[50vh] h-[30vh]  "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={s3}
            alt="Slide 3"
            className="w-full md:w-[65vw]    md:h-[50vh] h-[30vh] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={s4}
            alt="Slide 4"
            className="w-full md:w-[65vw]    md:h-[50vh] h-[30vh] "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
