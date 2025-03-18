"use client";
import { HEADER_DROP_DOWN_LIST, HEADER_LIST } from "@/utils/helper";
import { Cart, Cross, SearchIcon } from "@/utils/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [remove, setRemove] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div>
      <div
        className={`${remove ? "hidden" : ""} bg-black py-3 max-sm:py-[11px]`}
      >
        <div className="max-w-[1272px] mx-auto px-4 relative">
          <p className="text-sm max-sm:text-xs font-normal leading-[100%] text-white text-center">
            Sign up and get 20% off to your first order.{" "}
            <Link href={"/"} className="underline font-medium">
              Sign Up Now
            </Link>
          </p>
          <button
            onClick={() => setRemove(true)}
            className="absolute max-sm:hidden right-4 top-0 cursor-pointer"
          >
            <Cross />
          </button>
        </div>
      </div>

      {/* navbar */}
      <div className="max-w-[1272px] mx-auto px-4 flex items-center justify-between py-6 max-md:py-5">
        <div className="flex items-center max-md:gap-[18px]">
          <button
            onClick={() => setOpen(!open)}
            className="overflow-hidden relative z-50 md:hidden h-[14px] w-[18px] flex flex-col justify-between items-center"
          >
            <span
              className={`bg-black rounded-md w-full h-1 max-md:h-[2.5px] block transition-all duration-300 ${
                open ? "translate-x-10" : ""
              }`}
            ></span>
            <span
              className={`bg-black rounded-md after:rounded-lg w-full h-1 max-md:h-[2.67px] block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:max-md:h-[2.5px] after:transition-all after:duration-300 transition-all duration-300 ${
                open ? "rotate-45 after:rotate-90 after:!bg-black" : ""
              }`}
            ></span>
            <span
              className={`bg-black rounded-md w-full h-1 max-md:h-[2.5px] block transition-all duration-300 ${
                open ? "-translate-x-10" : ""
              }`}
            ></span>
          </button>
          <Link
            href={"/"}
            className="!font-integralBold text-[32px] leading-[100%] -mt-2 max-md:-mt-1 max-md:text-[25.2px]"
          >
            SHOP.CO
          </Link>
        </div>
        <div className="flex items-center gap-6 max-lg:gap-4 max-md:hidden">
          {HEADER_DROP_DOWN_LIST.map((obj, i) => (
            <select
              key={i}
              className="cursor-pointer outline-none appearance-none"
            >
              <option value={obj.title}>{obj.title}</option>
              <option value={obj.optionOne}>{obj.optionOne}</option>
              <option value={obj.optionTwo}>{obj.optionTwo}</option>
            </select>
          ))}
          {HEADER_LIST.map((obj, i) => (
            <ul key={i} className="flex items-center">
              <li>
                <Link href={obj.link}>{obj.title}</Link>
              </li>
            </ul>
          ))}
        </div>
        <label
          htmlFor="search"
          className="flex items-center max-w-[577px] rounded-full xl:w-full bg-lightGray pl-4 max-md:hidden"
        >
          <span className="cursor-pointer">
            <SearchIcon customFillOpacity="0.4" />
          </span>
          <input
            id="search"
            type="text"
            className="py-3 px-3 w-full rounded-full outline-none bg-lightGray"
            placeholder="Search for products..."
          />
        </label>
        <div className="max-md:flex gap-3">
          <button className="cursor-pointer md:hidden">
            <SearchIcon myClass="fillOpacity-100" />
          </button>
          <button className="cursor-pointer">
            <Cart />
          </button>
        </div>
        <div
          className={`w-full h-full bg-white transition-all duration-500 left-0 md:-top-full z-40 fixed flex justify-center items-center ${
            open ? "top-0 left-0" : "-top-full"
          }`}
        >
          <div className="flex flex-col items-center gap-6 max-lg:gap-4">
            {HEADER_DROP_DOWN_LIST.map((obj, i) => (
              <select
                key={i}
                className="cursor-pointer outline-none appearance-none text-xl font-semibold"
              >
                <option value={obj.title}>{obj.title}</option>
                <option value={obj.optionOne}>{obj.optionOne}</option>
                <option value={obj.optionTwo}>{obj.optionTwo}</option>
              </select>
            ))}
            {HEADER_LIST.map((obj, i) => (
              <ul key={i} className="flex items-center">
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href={obj.link}
                    className="text-xl font-semibold"
                  >
                    {obj.title}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
