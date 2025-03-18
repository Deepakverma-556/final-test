"use client";
import Company from "@/components/Company";
import DressStyle from "@/components/DressStyle";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <NewArrivals />
      <TopSelling />
      <DressStyle/>
    </>
  );
}
