"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Magna Aliqua.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "Investing with tradecrptix.com has been one of the best decisions I have ever made. Their team is knowledgeable, transparent, and truly has my best interests at heart. I have seen consistent returns and feel secure knowing my money is in good hands.",
  },
  {
    name: "Michael R.",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    text: "The returns I have seen with tradecryptix.com have exceeded my expectations. Their strategic approach to investing and ongoing support make them stand out in the industry. I highly recommend their services to anyone looking to grow their wealth.",
  },
  {
    name: "Jonathan M.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    text: "Investing tradecryptix.com has been one of the best decisions I have ever made. Their team is knowledgeable, transparent, and truly has my best interests at heart. I have seen consistent returns and feel secure knowing my money is in good hands.",
  },
];

const ClientSection = () => {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    // Delay rendering Swiper until after page has loaded
    setShowSwiper(true);
  }, []);
  return (
    <div className="w-full pb-[100px] pt-[100px] bg-white">
      <div className="container mx-auto px-4 mb-6">
        {showSwiper && (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full pb-10 relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4">
                  <h1 className="text-[40px] text-[#2b2a2a] font-bold mb-2">
                    What Our Clients Say
                  </h1>
                  <p className="text-[16px] text-[#6b6a6a] mb-6">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim
                  </p>
                  <div className="flex justify-center mb-6">
                    <Image
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      src={testimonial.image}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-[20px] text-[#000000] font-bold mb-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-[16px] text-[#000000] max-w-2xl mx-auto">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ClientSection;
