"use client"
import Review from "@/components/details/Review";
import AlsoLike from "@/components/details/AlsoLike";
import ProductOverview from "@/components/details/ProductOverview";
const page = () => {
  return (
    <div>
      <ProductOverview/>
      <Review />
      <AlsoLike />
    </div>
  );
};

export default page;
