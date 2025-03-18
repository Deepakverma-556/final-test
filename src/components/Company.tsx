import { COMPANY_LIST } from "@/utils/helper";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CompanyProp {
  image: StaticImageData;
  imgAlt: string;
  link: string;
}
const Company = () => {
  return (
    <div className="bg-black -mt-[5px] max-lg:mt-0">
      <div className="max-w-[1272px] mx-auto px-4 flex items-center justify-between py-[42px] max-md:py-[39px] flex-wrap max-lg:justify-center gap-[34px]">
        {COMPANY_LIST.map((obj: CompanyProp, i: number) => (
          <Link key={i} href={obj.link} target="blank">
            <Image
              src={obj.image}
              alt={obj.imgAlt}
              className={`${
                i === 0
                  ? "max-sm:h-[22px]"
                  : i === 1
                  ? "max-sm:h-[22px]"
                  : i === 3
                  ? "max-sm:-mt-3 max-sm:h-[21px]"
                  : i === 4
                  ? "max-sm:-mt-3 max-sm:h-[21px]"
                  : "max-sm:h-[24px]"
              } max-w-max max-md:h-[30px]`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Company;
