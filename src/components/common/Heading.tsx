interface Heading {
  myClass?: string;
  text: string;
}

const Heading = ({ myClass, text }: Heading) => {
  return <p className={`${myClass} !font-integralBold text-5xl leading-[100%] text-center max-md:text-4xl max-sm:text-[32px]`}>{text}</p>;
};

export default Heading;
