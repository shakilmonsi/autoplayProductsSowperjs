import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import  image  from "../asests/Mariana Anderson.png"

import  "./ApurData.css"


const ApurData = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { data: reviews = [] } = useQuery({
//     queryKey: ["reviews"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/reviews");
//       return res.data;
//     },
//   });

const reviews = [
    
    {
        name:"shskskkskksk",
        designation:"designation",
        review:"review",
        image: image

    },


    {
        name:"shskskkskksk",
        designation:"designation",
        review:"review",
        image: image

    },


    {
        name:"shskskkskksk",
        designation:"designation",
        review:"review",
        image: image

    },


    {
        name:"shskskkskksk",
        designation:"designation",
        review:"review",
        image: image

    },



]



  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  useEffect(() => {
    // Update the number of slides per view based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        // Medium screens
        setSwiperSlidesPerView(2);
      } else {
        // Small screens
        setSwiperSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-[75px] mb-[98px] md:mx-12 xl:mx-[135px] relative">
      <h2 className="text-4xl font-bold mb-5 text-center">
        What Our Patients Says
      </h2>
      <p className="text-[16px] text-center mb-12 px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga,
        excepturi odio dolores dignissimos a, asperiores magnam facere esse
        quaerat in, mollitia magni deserunt repellat accusamus tenetur officiis.
        Dolorem, ipsum!
      </p>
      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper mt-10 h-80 relative"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <div className="flex flex-col border border-gray-200 rounded-xl px-5 pt-[33px] pb-[40px] h-full">
              <div className="flex justify-between ">
                <div className="flex items-center">
                  <div>
                    <img
                      src={review.image}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="ms-[18px]">
                    <h1 className="text-xl font-semibold text-left">
                      {review.name}
                    </h1>
                    <h3 className="text-[16px] font-medium mb-4">
                      {review.designation}
                    </h3>
                  </div>
                </div>
                <div>
                  <RiDoubleQuotesR className="text-5xl star-color "/>
                </div>
              </div>

              <p className="text-[16px] review my-4">{review.review}</p>
              <div className="mb-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  {Array.from(
                    { length: Math.floor(review.rateus) },
                    (_, index) => (
                      <FaStar key={index} className="star-color text-lg me-2" />
                    )
                  )}
                  {review.rateus % 1 === 0.5 && (
                    <FaStarHalf className="star-color text-lg" />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Left Border with Previous Button */}
      <div className="swiper-button-prev-container">
        <div className="swiper-button-prev">
          <FiChevronLeft />
        </div>
      </div>

      {/* Right Border with Next Button */}
      <div className="swiper-button-next-container">
        <div className="swiper-button-next">
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};





export default ApurData;