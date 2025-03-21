import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ALSO_LIKE_LIST } from "@/utils/helper";
import Image, { StaticImageData } from "next/image";
import Heading from "../common/Heading";

interface MyProps {
  image: StaticImageData;
  imgAlt: string;
  title: string;
  ratingStar: StaticImageData;
  ratingAlt: string;
  rating: string;
  price?: number;
  discountPrice: number;
  discount?: string;
}
const AlsoLike = () => {
  return (
    <div className="pt-[72px] pb-[168px] max-md:pt-[50px] max-md:pb-[185px]">
      <Heading text="you might also like" myClass="mb-[55px] max-md:mb-8" />
      <div className="ml-4">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          className="max-w-[1272px] mx-auto pb-0"
          breakpoints={{
            0: {
              slidesPerView: 1.7,
            },
            600: {
              slidesPerView: 3,
            },
            1026: {
              autoplay: false,
            },
          }}
        >
          {ALSO_LIKE_LIST.map((obj: MyProps, i: number) => (
            <SwiperSlide key={i} className="max-lg:pb-16 max-sm:pb-12">
              <div className="bg-fade rounded-[20px] flex items-center justify-center px-[38px] py-[34px] max-sm:px-8 max-sm:py-6">
                <Image
                  src={obj.image}
                  alt={obj.imgAlt}
                  className="h-[230px] pointer-events-none w-[219px] max-xl:h-[180px] max-xl:min-w-[170px] max-md:h-[120px] max-md:min-w-[100px] max-sm:h-[150px] max-sm:min-w-[150px]"
                />
              </div>
              <p className="font-bold text-xl max-sm:text-base leading-[100%] mt-4 mb-2 max-sm:mt-2.5 max-sm:mb-1">
                {obj.title}
              </p>
              <div className="flex items-center gap-[13px]">
                <Image
                  src={obj.ratingStar}
                  alt={obj.ratingAlt}
                  className="h-[18.49px] pointer-events-none max-w-max max-sm:h-[15.47px]"
                />
                <p className="text-sm max-sm:text-xs leading-[100%]">
                  {obj.rating}
                  <span className="text-customGray">5</span>
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <p className="font-bold text-2xl max-md:text-xl leading-[100%]">
                  ${obj.discountPrice}
                </p>
                <p className="font-bold text-2xl max-md:text-xl leading-[100%] text-customGray">
                  {i === 0 ? `$${obj.price}` : i === 3 ? `$${obj.price}` : ``}
                </p>
                <p
                  className={`${
                    i === 1 ? "hidden" : i === 2 ? "hidden" : ""
                  } rounded-full py-[6px] px-[13.5px] bg-lightRed text-customRed font-medium text-xs max-sm:text-[10px] max-sm:px-2 max-sm:py-[3px] leading-[100%]`}
                >
                  {obj.discount}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AlsoLike;
