"use client";
import { useState, useEffect } from "react";
import { PlusIcon, RoutingIcon, SelectIcon, SubtractIcon } from "@/utils/icons";
import {
  ALSO_LIKE_LIST,
  COLOR_LIST,
  NEW_ARRIVALS_LIST,
  SIZE_LIST,
  TOP_SELLING_LIST,
} from "@/utils/helper";
import { usePathname } from "next/navigation";
import ImageShow from "./ImageShow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type CartItem = {
  title: string;
  price: number;
  image: string | StaticImageData;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
};

const ProductOverview = () => {
  const pathname = usePathname();
  const urlTitle = pathname
    .split("/")
    .pop()
    ?.toLowerCase()
    .replace(/\s+/g, "-");

  const products = [
    ...(NEW_ARRIVALS_LIST || []),
    ...(TOP_SELLING_LIST || []),
    ...(ALSO_LIKE_LIST || []),
  ];
  const product = products.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === urlTitle
  );

  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    }
  }, []);

  const handleAddToCart = () => {
    if (!product) return;

    const selectedProduct: CartItem = {
      title: product.title,
      price: product.price ?? 0,
      image: product.image,
      selectedColor: COLOR_LIST[activeColor],
      selectedSize: SIZE_LIST[activeSize],
      quantity,
    };

    const existingProductIndex = cart.findIndex(
      (item) =>
        item.title === selectedProduct.title &&
        item.selectedColor === selectedProduct.selectedColor &&
        item.selectedSize === selectedProduct.selectedSize
    );

    if (existingProductIndex !== -1) {
      toast.warn(`${product.title} is already in the cart.`);
      return;
    }

    const updatedCart = [...cart, selectedProduct];
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    setCart(updatedCart);
    toast.success(`${product.title} added to cart!`);
  };

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  return (
    <div className="max-w-[1272px] px-4 mx-auto">
      <div className="border border-black/10"></div>
      <div className="flex gap-3 max-sm:gap-1.5 items-center pb-9 pt-6 max-lg:py-5">
        <Link
          href={"/"}
          className="flex gap-1 max-sm:text-sm text-black/60 items-center"
        >
          Home
          <span>
            <RoutingIcon />
          </span>
          Shop
          <span>
            <RoutingIcon />
          </span>
          Men
          <span>
            <RoutingIcon />
          </span>
        </Link>
        <Link
          href={"/cart"}
          className="flex gap-1 max-sm:text-sm text-black items-center"
        >
          T-shirts
        </Link>
      </div>
      <div className="flex gap-10 max-lg:gap-6 max-[1025px]:flex-col max-lg:items-stretch max-xl:items-center">
        <ImageShow product={product} />
        <div className="lg:max-w-[600px] w-full flex flex-col">
          <p className="!font-integralBold text-[40px] max-lg:text-3xl max-md:text-2xl max-md:leading-7 pb-3.5 max-md:pb-3 leading-[100%]">
            {product.title}
          </p>
          <div className="flex gap-4">
            <Image src={product.ratingStar} alt={product.imgAlt} className="h-6 w-[139px]"/>
            <p className="text-base">
              {product.rating}
              <span className="text-black/60">5</span>
            </p>
          </div>
          <div className="flex items-center gap-3 max-md:gap-2.5 pt-[14.29px] max-md:pt-3">
            <p className="font-bold text-[32px] max-md:text-2xl leading-[100%]">
              ${product.discountPrice}
            </p>
            <span className="w-max relative">
              <p className="relative text-black/30 text-[32px] max-md:text-2xl font-bold">
                ${product.price}
              </p>
            </span>
            {product.discount && (
              <span className="py-1.5 px-[13px] bg-custom-red/10 text-custom-red rounded-[62px] font-xs font-medium">
                {product.discount}
              </span>
            )}
          </div>
          <p className="text-black/60 leading-[22px] pt-5 max-md:text-sm">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="lg:max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
          <p className="text-black/60 max-md:text-sm">Select Colors</p>
          <div className="flex gap-4 mt-4">
            {COLOR_LIST.map((color, index) => (
              <button
                key={index}
                className={`size-[37px] cursor-pointer flex justify-center items-center rounded-full ${color}`}
                onClick={() => setActiveColor(index)}
              >
                {index === activeColor && <SelectIcon />}
              </button>
            ))}
          </div>
          <div className="lg:max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
          <p className="text-black/60 max-md:text-sm">Choose Size</p>
          <div className="flex gap-3 max-sm:gap-2 mt-4">
            {SIZE_LIST.map((size, index) => (
              <button
                key={index}
                className={`cursor-pointer bg-custom-gray text-black/60 max-md:text-sm py-[11px] px-6 max-md:px-5 max-[385px]:!px-4 max-md:py-2.5 rounded-[62px] ${
                  index === activeSize && "!bg-black text-white font-medium"
                }`}
                onClick={() => setActiveSize(index)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="lg:max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
          <div className="flex items-center gap-5">
            <div className="flex items-center bg-custom-gray justify-between rounded-[62px] py-3.5 px-5 max-md:py-3 max-md:px-4 w-full max-w-[110px] md:max-w-[170px] ">
              <button
                className="h-6 cursor-pointer"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <SubtractIcon />
              </button>
              <p className="font-medium">{quantity}</p>
              <button
                className="cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white cursor-pointer max-md:text-sm h-[52px] max-md:h-[44px] max-w-[400px] w-full rounded-full hover:bg-transparent hover:text-black hover:border-black border border-black transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductOverview;
