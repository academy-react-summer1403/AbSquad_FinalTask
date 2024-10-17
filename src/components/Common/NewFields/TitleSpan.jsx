import React from "react";
const TitleSpan = ({ title = "titleeee", Icon, style = "" }) => {
  return (
    <>
      <div
        className={`flex flex-row justify-start gap-3 items-center w-full mb-2 ${style}`}
      >
        <Icon className="w-8 h-8" />
        <span className="block grow">{title}</span>
      </div>
    </>
  );
};

export default TitleSpan;
