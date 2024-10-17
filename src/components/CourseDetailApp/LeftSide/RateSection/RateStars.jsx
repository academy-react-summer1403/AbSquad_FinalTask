import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

const RateStars = () => {
  const [starValue, setStarValue] = useState(0);
  return (
    <div className="flex flex-row text-3xl">
      <Rating
        sx={{ direction: "ltr", color: "#E5EA19" }}
        size="large"
        value={starValue}
        onChange={(event, newValue) => {
          setStarValue(newValue);
        }}
      />
    </div>
  );
};

export default RateStars;
