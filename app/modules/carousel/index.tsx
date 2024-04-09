"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
const imgs = [
  { url: "/imgs/1.webp", alt: "journal cover" },
  { url: "/imgs/2.webp", alt: "first page of journal" },
  { url: "/imgs/3.webp", alt: "goal setting page of journal" },
  { url: "/imgs/4.webp", alt: "individual goal setting page journal" },
  { url: "/imgs/5.webp", alt: "daily journalling page" },
  { url: "/imgs/6.webp", alt: "daily journalling page" },
  { url: "/imgs/7.webp", alt: "weekly review journalling page" },
  { url: "/imgs/8.webp", alt: "weekly review journalling page" },
];

const Carousel = () => {
  return (
    <div className="md:w-4/6">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        {imgs.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img.url} className="rounded-lg" alt={img.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
