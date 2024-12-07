import React from "react";
import PageTitle from "./PageTitle";
import { FilterSection } from "./CourseSection/FilterSection";
import { CourseSection } from "./CourseSection";
const Payment = () => {
  return (
    <div className="w-full bg-primaryWhite py-5 rounded-2xl flex flex-col  gap-y-10 mt-4 p-8 mb-5">
      <PageTitle />
      <FilterSection />
      <CourseSection />
    </div>
  );
};

export default Payment;
