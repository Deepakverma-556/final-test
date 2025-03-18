interface MyProps {
  myClass?: string;
  text: string;
}
function CustomButton({ myClass, text }: MyProps) {
  return (
    <button
      className={`${myClass} bg-black cursor-pointer rounded-full font-medium leading-4 transition-all duration-300 border border-black text-white hover:text-black hover:bg-white`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
