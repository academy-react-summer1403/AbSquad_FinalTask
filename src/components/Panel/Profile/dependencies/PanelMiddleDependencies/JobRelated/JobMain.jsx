import React, { useState } from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const JobMain = () => {
  const [refetch, setRefetch] = useState(false);

  // Toggle the refetch state to trigger useEffect in LeftSection
  const triggerRefetch = () => {
    setRefetch((prev) => !prev);
  };

  return (
    <div className="flex justify-between p-10">
      <RightSection triggerRefetch={triggerRefetch} />
      <LeftSection refetch={refetch} />
    </div>
  );
};

export default JobMain;
