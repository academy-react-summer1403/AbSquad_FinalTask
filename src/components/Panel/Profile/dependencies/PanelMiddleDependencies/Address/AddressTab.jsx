import React from "react";

const AddressTab = () => {
  return (
    <div className="flex flex-col gap-5 mt-3 p-8">
      <span className="text-primaryBlue mr-20 max-md:mr-0 max-md:text-[16px]">
        داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
      </span>
      <div className="w-[1016px] h-[261px] bg-gray-400 rounded-3xl mx-auto max-md:w-[300px]"></div>
    </div>
  );
};

export default AddressTab;
