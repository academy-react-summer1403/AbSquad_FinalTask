import React from "react";

const ApprovalStatus = ({ statusId = "false", textSize = "" }) => {
  const Options = [
    {
      id: true,
      name: "تایید شده",
      bgColor: "bg-[#17C96433]",
      textColor: "text-[#17C964]",
    },
    {
      id: false,
      name: "تایید نشده",
      bgColor: "bg-[#F3126033]",
      textColor: "text-[#F31260]",
    },
    {
      id: "admin",
      name: "در انتظار ادمین",
      bgColor: "bg-[#7828C833]",
      textColor: "text-[#7828C8]",
    },
  ];
  return (
    <>
      {Options.map((it, index) => {
        return (
          statusId == it.id && (
            <span
              key={index}
              className={`${textSize} ${it.textColor} ${it.bgColor} text-xs rounded-xl w-max  mb-3 px-3 py-1 sm:text-sm z-10`}
            >
              {it.name}
            </span>
          )
        );
      })}
    </>
  );
};

export default ApprovalStatus;
