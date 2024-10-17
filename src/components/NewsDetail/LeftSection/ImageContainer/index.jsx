import React from "react";
import NewsDetailImage from "./NewsDetailImage";

const ImageContainer = ({ image }) => {
  return (
    <div className="w-full sm:h-[428px] h-[267px] rounded-3xl overflow-hidden ">
      <NewsDetailImage image={image} />
    </div>
  );
};

export default ImageContainer;
