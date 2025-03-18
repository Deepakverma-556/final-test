import { HERO_ABOUT_LIST } from "@/utils/helper";
import CustomButton from "./common/CustomButton";
import Description from "./common/Description";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-lightGray overflow-hidden">
      <div className="max-w-[1272px] mx-auto px-4">
        <div className="flex flex-wrap -mx-3 justify-between">
          <div className="w-1/2 px-3 max-lg:w-full">
            <h1 className="!font-integralBold text-[64px] max-md:text-5xl leading-[100%] max-sm:text-4xl pt-[103px] max-lg:pt-16 max-md:pt-10 max-md:pb-5 pb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <Description
              myClass="max-w-[545px]"
              text="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
            />
            <CustomButton
              text="Shop Now"
              myClass="px-[67.76px] py-[17.2px] mt-8 mb-12 max-md:mt-6 max-md:mb-7 max-sm:w-full"
            />
            <div className="flex items-center gap-8 max-sm:gap-7 pb-[116px] max-lg:pb-2 max-sm:flex-wrap max-sm:justify-center">
              {HERO_ABOUT_LIST.map((obj, i) => (
                <div key={i} className="flex items-center gap-8 max-sm:gap-7">
                  <div key={i} className={`${i === 2 ? "border-none" : ""}`}>
                    <h4 className="font-bold text-[40px] max-sm:text-2xl leading-[100%] pb-1">
                      {obj.title}
                    </h4>
                    <Description text={obj.description} />
                  </div>
                  {i === 0 && (
                    <div
                      className={`h-[74px] max-sm:h-[52px] w-[1px] bg-customLightGray`}
                    ></div>
                  )}
                  {i === 1 && (
                    <div
                      className={`h-[74px] max-sm:h-[52px] w-[1px] bg-customLightGray max-[485px]:hidden`}
                    ></div>
                  )}
                  {i === 2 && ""}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 px-3 max-lg:w-full">
            <Image
              src={"/assets/images/webp/hero.webp"}
              alt="hero"
              height={632}
              width={663}
              className="mt-14 h-[632px] w-[663px] max-xl:h-[500px] max-xl:w-[500px] max-lg:mx-auto max-sm:hidden"
            />
          </div>
        </div>
      </div>
      <Image
        src={"/assets/images/webp/hero.webp"}
        alt="hero"
        height={390}
        width={380}
        className="mt-0 h-[390px] min-w-[380px] sm:hidden mx-auto"
      />
    </div>
  );
}

export default Hero;
