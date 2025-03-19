import React from "react";
import Link from "next/link";
import Description from "./Description";
import Image from "next/image";
import {
  FOOTER_LIST,
  FOOTER_SOCIAL_ICON_LIST,
  PAYMENTS_MODE_LIST,
} from "@/utils/helper";
import CustomEmail from "./CustomEmail";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-lightGray px-4 relative">
      <CustomEmail myClass="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-[1240px] mx-auto">
        <div className="flex gap-[113.5px] max-lg:gap-0 pt-[140px] pb-[50px] max-sm:pt-[180px] max-sm:pb-6 max-md:pb-10 max-md:pt-[200px] max-lg:pb-12 max-lg:pt-[180px] max-lg:flex-col gap-y-10">
          <div className="max-w-[248px] max-lg:max-w-[unset] w-full">
            <Link
              href={"/"}
              className="text-[33.45px] leading-[100%] max-lg:text-3xl max-md:text-[25.2px] !font-integralBold"
            >
              SHOP.CO
            </Link>
            <Description
              myClass="!text-sm leading-[152%] text-black/60 mt-6 max-sm:mt-3.5 max-md:mt-4 max-lg:mt-5"
              text="We have clothes that suits your style and which you’re proud to wear. From women to men."
            />
            <div className="flex gap-3 pt-9 max-sm:pt-5 max-md:pt-6 max-lg:pt-7">
              {FOOTER_SOCIAL_ICON_LIST.map((item, index) => (
                <Link
                  href={item.link}
                  target="_blank"
                  className="size-7 bg-white border border-solid border-black/20 flex hover:bg-black group transition-all duration-300 justify-center items-center rounded-full"
                  key={index}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between flex-wrap gap-[113px] max-sm:justify-start max-sm:gap-y-6 max-sm:gap-[50px] max-xl:gap-18 max-md:gap-6 max-lg:pt-10 max-sm:pt-6">
              {FOOTER_LIST.map((item, i) => (
                <div key={i} className="max-sm:max-w-[130px] max-sm:w-full">
                  <p className="uppercase font-medium leading-[18px] max-md:text-sm">
                    {item.title}
                  </p>
                  <ul className="pt-[26px] max-md:pt-4">
                    {item.list.map((item, i) => (
                      <li key={i} className="pb-4">
                        <Link
                          href={item.link}
                          className="leading-[19px] text-customGray whitespace-nowrap max-md:text-sm relative after:absolute after:h-[0.5px] after:w-0 after:bg-customGray after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-black/10 h-[1px]"></div>
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:justify-center sm:gap-4 pt-5 max-sm:pt-4 max-md:pb-[77px] pb-[82px]">
          <p className="text-sm leading-[100%] text-black/60">
            Shop.co © 2000-{year}, All Rights Reserved
          </p>
          <div className="flex items-center gap-3 max-md:gap-[10.3px] max-md:pt-4">
            {PAYMENTS_MODE_LIST.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                target="blank"
                className="bg-white w-[46px] h-[30px] max-sm:h-[25px] max-sm:[39px] flex items-center justify-center rounded-[5px]"
              >
                <Image
                  width={46.61}
                  height={30.3}
                  alt="payment-company"
                  src={item.image}
                  className={`${
                    i === 0
                      ? "h-2.5 w-8 max-sm:h-[9px] max-sm:w-7"
                      : i === 1
                      ? "h-[15px] w-[25px] max-sm:h-[13px] max-sm:w-[21px]"
                      : i === 2
                      ? "h-[9px] w-[34px] max-sm:h-[7px] max-sm:w-7"
                      : i === 3
                      ? "h-[11px] w-[26px] max-sm:h-[9px] max-sm:w-[22px]"
                      : "h-[11px] w-7 max-sm:h-[9px] max-sm:w-6"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
