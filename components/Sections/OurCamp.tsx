"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SW } from "swiper/types";
import Image from "next/image";
import { LuArrowUp as ArrowUp } from "react-icons/lu";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { div } from "framer-motion/client";

const images = [
  "/assets/images/activity/c1.webp",
  "/assets/images/activity/c2.webp",
  "/assets/images/activity/c3.webp",
  "/assets/images/activity/c4.webp",
  "/assets/images/activity/c5.webp",
  "/assets/images/activity/c6.webp",
  "/assets/images/activity/c7.webp",
  "/assets/images/activity/c8.webp",
  "/assets/images/activity/c9.webp",
  "/assets/images/activity/c10.webp",
  "/assets/images/activity/c11.webp",
];

const OurCamp = () => {
  const [activeSlide, setActiveSlide] = useState<number>(
    Math.floor(images.length / 2),
  );

  useEffect(() => {
    const slides = document.querySelectorAll(".swiper-slide");
    const activeIndex = Array.from(slides).findIndex((el) =>
      Array.from(el.classList).find((c) => c == "swiper-slide-active"),
    );
    document.querySelectorAll(".swiper-slide").forEach((el, i) => {
      if (i < activeIndex) {
        (el as HTMLElement).style.opacity = "0";
      } else {
        (el as HTMLElement).style.opacity = "1";
      }
    });
  }, [activeSlide]);

  const handleSlideChange = (swiper: SW) => {
    const currentSlideIndex = swiper.realIndex;
    if (currentSlideIndex != activeSlide) {
      setActiveSlide(currentSlideIndex);
    }
  };

  return (
    <div className="py-20 relative bg-black" id="ourcamp">
      <div className="absolute bg-[url(/assets/images/TimelineBG.gif)] inset-0 bg-cover bg-center opacity-30 z-0"></div>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center gap-10 px-10">
        <div className="text-white relative max-w-[500px] space-y-5">
          <h1 className="text-5xl">ค่ายของเรา</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vestibulum ante sit amet libero pellentesque lobortis. Sed vel
            turpis leo. Nullam euismod ante turpis, vel vulputate ex maximus
            eget. Integer aliquet ex vitae ipsum imperdiet dictum. Nulla feugiat
            gravida enim, ac sodales urna malesuada in. Integer est quam,
            scelerisque feugiat ipsum vitae, ornare rhoncus arcu. Proin lacinia
            rutrum dictum.
          </p>
        </div>
        <div className="w-full h-[400px] md:h-[600px] xl:content-center content-start">
          <div className="relative overflow-x-hidden">
            <div className="navi-prev absolute p-1 bg-Indigo rounded-full top-1/2 left-0 -translate-y-1/2 cursor-pointer z-20">
              <ArrowUp className="text-white -rotate-90" />
            </div>
            <div className="navi-next absolute p-1 bg-Indigo rounded-full top-1/2 right-0 -translate-y-1/2 cursor-pointer z-20">
              <ArrowUp className="text-white rotate-90" />
            </div>
            <div className="px-8">
              <Swiper
                navigation={{
                  enabled: true,
                  nextEl: ".navi-next",
                  prevEl: ".navi-prev",
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                allowTouchMove={false}
                simulateTouch={false}
                onSlideChangeTransitionEnd={handleSlideChange}
                effect="coverflow"
                centeredSlides={true}
                spaceBetween={-300}
                loopAdditionalSlides={1}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 400,
                  scale: 1,
                  modifier: 1,
                }}
                modules={[Autoplay, EffectCoverflow, Navigation]}
                className="lg:w-200 h-[300px] md:h-[350px]"
                initialSlide={activeSlide}
                loop
              >
                {images.map((image, i) => (
                  <SwiperSlide key={i} className="!w-[500px]">
                    <Image
                      src={image}
                      alt="activity"
                      fill
                      unoptimized
                      sizes="500px"
                      className="object-cover"
                      quality={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCamp;
