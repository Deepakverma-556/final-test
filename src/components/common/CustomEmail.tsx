"use client";
import { EmailIcon } from "@/utils/icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton";
import { Slide, toast, ToastContainer } from "react-toastify";
emailjs.init("w_qmvSmvlfC7ZIszP");
interface MyProp {
  myClass?: string;
}

const CustomEmail = ({ myClass }: MyProp) => {
  const [formValue, setFormValue] = useState({
    email: "",
  });
  const SERVICE_ID = "service_rajt1jk";
  const TEMPLATE_ID = "template_4hhcmon";
  const [error, setError] = useState(false);
  const emailRegax = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (formValue.email.length > 0 && emailRegax.test(formValue.email)) {
      setError(false);
      setFormValue({
        email: "",
      });
      toast("submit successfully");
      emailjs.send(SERVICE_ID, TEMPLATE_ID, formValue);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" transition={Slide} />
      <div className={`${myClass} max-w-[1272px] mx-auto w-full px-4`}>
        <div
          className={`w-full rounded-[20px] flex max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-8 items-center justify-between bg-black py-[43px] px-[64px] max-sm:px-6 max-sm:py-8 max-md:px-7 max-md:py-10 max-lg:px-8`}
        >
          <div className="max-w-[551px] max-lg:max-w-[unset]">
            <h3 className="text-white leading-[45px] !font-integralBold text-[40px] max-lg:text-4xl max-md:text-[32px] max-md:leading-[35px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-[349px] flex flex-col gap-2.5 w-full max-lg:mx-auto"
          >
            <div className="w-full py-3 px-[17px] bg-white items-center rounded-[62px] flex">
              <div className="flex w-full items-center gap-3.5">
                <label className="cursor-pointer" htmlFor="mail">
                  <EmailIcon />
                </label>
                <div className="w-full">
                  <input
                    value={formValue.email}
                    onChange={(e) =>
                      setFormValue({ ...formValue, email: e.target.value })
                    }
                    className="w-full outline-none leading-[100%] text-black"
                    id="mail"
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <p className="text-red-500">
              {error && formValue.email.length === 0
                ? "Required"
                : !emailRegax.test(formValue.email) &&
                  formValue.email.length > 0
                ? "email is invalid"
                : ""}
            </p>
            <CustomButton
              text="Subscribe to Newsletter"
              myClass="!bg-white !text-black w-full py-3.5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomEmail;
