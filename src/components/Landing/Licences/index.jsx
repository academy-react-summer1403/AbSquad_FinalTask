import React from "react";
import { LicencesVal } from "../../../core/utilities/Licences/licences.utils.js";
const Licences = () => {
  return (
    <>
      {/* Container */}
      <div className="grid grid-cols-1 mt-16 gap-8  sm:grid-cols-2 xl:grid-cols-4">
        {LicencesVal.map((it, index) => {
          return (
            <div
              key={index}
              className="flex flex-col grayBox h-80 px-6 pt-4 gap-8 dark:text-primaryWhite cursor-pointer"
            >
              <h1 className="text-4xl relative pb-3 after:content-[' '] after:border after:border-solid after:border-primaryGray after:absolute after:right-0 after:bottom-0  after:w-full sm:text-4xl">
                {it.number}
              </h1>
              <h1 className="text-2xl"> {it.licences}</h1>
              <h3 className="text-base text-fontGray">{it.desc}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Licences;
