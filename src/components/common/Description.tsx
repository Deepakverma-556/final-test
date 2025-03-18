interface DescriptionProps {
  myClass?: string;
  text: string;
}
const Description = ({ myClass, text }: DescriptionProps) => {
  return <p className={`${myClass} leading-[22px] text-customGray max-sm:text-sm max-sm:leading-5`}>{text}</p>;
};

export default Description;
