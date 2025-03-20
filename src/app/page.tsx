"use client";
import Company from "@/components/Company";
import DressStyle from "@/components/DressStyle";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import OurHappyCustomer from "@/components/OurHappyCustomer";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers/>
    </>
  );
}
