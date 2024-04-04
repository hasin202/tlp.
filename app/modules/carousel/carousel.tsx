"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
const imgs = [
  "/imgs/1.png",
  "/imgs/2.png",
  "/imgs/3.png",
  "/imgs/4.png",
  "/imgs/5.png",
  "/imgs/6.png",
  "/imgs/7.png",
  "/imgs/8.png",
];

// const Carousel = () => {
//   const [curr, setCurr] = useState<number>(0);
//   return (
//     <div className="relative">
//       <img src={imgs[curr]} className="rounded-lg" />
//       <div className="absolute inset-0 flex justify-between items-center px-4">
//         <button
//           className="border rounded-full"
//           onClick={() =>
//             curr === imgs.length - 1 ? setCurr(0) : setCurr(curr + 1)
//           }
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           className="border rounded-full"
//           onClick={() =>
//             curr === 0 ? setCurr(imgs.length - 1) : setCurr(curr - 1)
//           }
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

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
              <img src={img} className="rounded-lg" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
