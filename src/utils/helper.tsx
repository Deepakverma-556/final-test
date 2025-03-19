import versace from "../../public/assets/images/png/versace.png";
import zara from "../../public/assets/images/png/zara.png";
import gucci from "../../public/assets/images/png/gucci.png";
import prada from "../../public/assets/images/png/prada.png";
import calvin from "../../public/assets/images/png/calvin.png";
import tShirt from "../../public/assets/images/webp/t-shirt.webp";
import skinnyFit from "../../public/assets/images/webp/skinny-fit.webp";
import checked from "../../public/assets/images/webp/checked-shirt.webp";
import stripedTShirt from "../../public/assets/images/webp/striped-t-shirt.webp";
import stripedShirt from "../../public/assets/images/webp/striped-shirt.webp";
import graphicTShirt from "../../public/assets/images/webp/graphic-t-shirt.webp";
import shorts from "../../public/assets/images/webp/shorts.webp";
import skinnyJeans from "../../public/assets/images/webp/skinny-jeans.webp";
import fourAndHalfStar from "../../public/assets/images/png/4.5-star.png";
import threeAndHalfStar from "../../public/assets/images/png/3.5-star.png";
import fiveStar from "../../public/assets/images/png/5-star.png";
import fourStar from "../../public/assets/images/png/4-star.png";
import threeStar from "../../public/assets/images/png/3-star.png";
import visa from "../../public/assets/images/png/visa.png";
import masterCard from "../../public/assets/images/png/master-card.png";
import paypal from "../../public/assets/images/png/paypal.png";
import pay from "../../public/assets/images/png/pay.png";
import gpay from "../../public/assets/images/png/g-pay.png";
import { Facebook, Github, Insta, Twitter } from "./icons";

export const HEADER_DROP_DOWN_LIST = [
  {
    title: "Shop",
    optionOne: "Clothes",
    optionTwo: "Shoes",
  },
];

export const HEADER_LIST = [
  {
    title: "On Sale",
    link: "#sale",
  },
  {
    title: "New Arrivals",
    link: "#arrivals",
  },
  {
    title: "Brands",
    link: "#brands",
  },
];

export const HERO_ABOUT_LIST = [
  {
    title: "200+",
    description: "International Brands",
  },
  {
    title: "2,000+",
    description: "High-Quality Products",
  },
  {
    title: "30,000+",
    description: "Happy Customers",
  },
];

export const COMPANY_LIST = [
  {
    image: versace,
    imgAlt: "versace",
    link: "https://www.versace.com",
  },
  {
    image: zara,
    imgAlt: "zara",
    link: "https://www.zara.com",
  },
  {
    image: gucci,
    imgAlt: "gucci",
    link: "https://www.gucci.com",
  },
  {
    image: prada,
    imgAlt: "prada",
    link: "https://www.prada.com",
  },
  {
    image: calvin,
    imgAlt: "calvin",
    link: "https://www.calvin.com",
  },
];

export const NEW_ARRIVALS_LIST = [
  {
    image: tShirt,
    imgAlt: "t-shirt",
    title: "T-shirt with Tape Details",
    ratingStar: fourAndHalfStar,
    ratingAlt: "4.5-star",
    rating: "4.5/",
    discountPrice: "$120",
  },
  {
    image: skinnyFit,
    imgAlt: "skinny-fit",
    title: "Skinny Fit Jeans",
    ratingStar: threeAndHalfStar,
    ratingAlt: "3.5-star",
    rating: "3.5/",
    discountPrice: "$240",
    price: "$260",
    discount: "-20%",
  },
  {
    image: checked,
    imgAlt: "checked-shirt",
    title: "Checkered Shirt",
    ratingStar: fourAndHalfStar,
    ratingAlt: "4.5-star",
    rating: "4.5/",
    discountPrice: "$180",
  },
  {
    image: stripedTShirt,
    imgAlt: "striped-t-shirt",
    title: "Sleeve Striped T-shirt",
    ratingStar: fourAndHalfStar,
    ratingAlt: "4.5-star",
    rating: "4.5/",
    discountPrice: "$130",
    price: "$160",
    discount: "-30%",
  },
];

export const TOP_SELLING_LIST = [
  {
    image: stripedShirt,
    imgAlt: "striped-shirt",
    title: "Vertical Striped Shirt",
    ratingStar: fiveStar,
    ratingAlt: "5-star",
    rating: "5.0/",
    discountPrice: "$212",
    price: "$232",
    discount: "-20%",
  },
  {
    image: graphicTShirt,
    imgAlt: "graphic-t-shirt",
    title: "Courage Graphic T-shirt",
    ratingStar: fourStar,
    ratingAlt: "4-star",
    rating: "4.0/",
    discountPrice: "$145",
  },
  {
    image: shorts,
    imgAlt: "shorts",
    title: "Loose Fit Bermuda Shorts",
    ratingStar: threeStar,
    ratingAlt: "3-star",
    rating: "3.0/",
    discountPrice: "$80",
  },
  {
    image: skinnyJeans,
    imgAlt: "skinny-jeans",
    title: "Faded Skinny Jeans",
    ratingStar: fourAndHalfStar,
    ratingAlt: "4.5-star",
    rating: "4.5/",
    discountPrice: "$210",
  },
];

export const FOOTER_SOCIAL_ICON_LIST = [
  {
    icon: <Twitter myClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <Facebook myClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <Insta myClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <Github myClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
];

export const FOOTER_LIST = [
  {
    title: "COMPANY",
    list: [
      { title: "About", link: "#about" },
      { title: "Features", link: "#features" },
      { title: "Works", link: "#works" },
      { title: "Career", link: "#career" },
    ],
  },
  {
    title: "HELP",
    list: [
      { title: "Customer Support", link: "#customer-support" },
      { title: "Delivery Details", link: "#delivery-details" },
      { title: "Terms & Conditions", link: "#terms-conditions" },
      { title: "Privacy Policy", link: "#privacy-policy" },
    ],
  },
  {
    title: "FAQ",
    list: [
      { title: "Account", link: "#about" },
      { title: "Manage Deliveries", link: "#manage-deliveries" },
      { title: "Orders", link: "#orders" },
      { title: "Payments", link: "#payments" },
    ],
  },
  {
    title: "RESOURCES",
    list: [
      { title: "Free eBooks", link: "#free-ebooks" },
      { title: "Development Tutorial", link: "#development-tutorial" },
      { title: "How to - Blog", link: "#how-to-blog" },
      { title: "Youtube Playlist", link: "#youtube-playlist" },
    ],
  },
];

export const PAYMENTS_MODE_LIST = [
  {
    image: visa,
    link: "https://www.visa.co.in/",
  },
  {
    image: masterCard,
    link: "https://www.visa .co.in/",
  },
  {
    image: paypal,
    link: "https://www.paypal.co.in/",
  },
  {
    image: pay,
    link: "https://www.pay.co.in/",
  },
  {
    image: gpay,
    link: "https://www.googlepay.co.in/",
  },
];
