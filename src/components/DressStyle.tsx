import Image from "next/image";
import Heading from "./common/Heading";

const DressStyle = () => {
  return (
    <div className="px-4">
      <div className="bg-lightGray max-w-[1272px] mx-auto px-16 max-sm:px-6 rounded-[40px] pt-[70px] max-md:pt-10 pb-[76px] max-md:pb-7">
        <Heading text="browse by dress style" myClass="pb-16 max-md:pb-7" />
        <div className="sm:grid-cols-3 sm:grid gap-5 max-sm:flex max-sm:gap-4 max-sm:flex-col">
          <Image src={"/assets/images/webp/casual.webp"} alt="casual" width={407} height={289} className="h-full max-sm:h-[190px] max-sm:w-full max-sm:object-cover rounded-[20px] pointer-events-none"/>
          <Image src={"/assets/images/webp/formal.webp"} alt="formal" width={684} height={289} className="sm:col-span-2 max-sm:h-[190px] max-sm:w-full w-full rounded-[20px] max-sm:hidden pointer-events-none"/>
          <Image src={"/assets/images/png/formal.png"} alt="formal" width={684} height={289} className="max-sm:h-[190px] object-cover sm:hidden w-full rounded-[20px] pointer-events-none"/>
          <Image src={"/assets/images/png/party.png"} alt="party" width={684} height={289} className="max-sm:h-[190px] object-cover sm:hidden w-full rounded-[20px] pointer-events-none"/>
          <Image src={"/assets/images/webp/party.webp"} alt="party" width={684} height={289} className="sm:col-span-2 max-sm:h-[190px] max-sm:w-full w-full rounded-[20px] max-sm:hidden pointer-events-none"/>
          <Image src={"/assets/images/webp/gym.webp"} alt="gym" width={407} height={289} className="h-full w-full max-sm:h-[190px] max-sm:w-full max-sm:object-cover rounded-[20px] pointer-events-none"/>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
