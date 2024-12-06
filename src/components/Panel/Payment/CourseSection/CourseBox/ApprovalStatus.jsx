import React from "react";

const ApprovalStatus = ({ accept }) => {
  console.log("ApprovalStatus received accept:", accept); // Log the `accept` value for debugging

  // Define the classes for true and false states
  const trueClass = {
    name: "تایید شده",
    bgColor: "bg-[#17C96433]",
    textColor: "text-[#17C964]",
  };

  const falseClass = {
    name: "تایید نشده",
    bgColor: "bg-[#F3126033]",
    textColor: "text-[#F31260]",
  };

  // Determine whether accept is true or false
  const isAccepted =
    accept === true || accept === "true" || accept === 1 || accept === "1"; // Handle different types for true
  const selectedClass = isAccepted ? trueClass : falseClass;

  return (
    <span
      className={`${selectedClass.textColor} ${selectedClass.bgColor} text-xs rounded-xl w-max mb-3 px-3 py-1 sm:text-sm z-10`}
    >
      {selectedClass.name}
    </span>
  );
};

export default ApprovalStatus;
