import React from "react";

const FooterList = ({ title, it1, it2, it3 }) => {
  return (
    <>
      <ul className="flex flex-col justify-start items-start gap-4">
        <li className="text-fontGray mb-7 max-lg:text-sm">{title}</li>
        <li>{it1}</li>
        <li>{it2}</li>
        <li>{it3}</li>
      </ul>
    </>
  );
};

export default FooterList;
