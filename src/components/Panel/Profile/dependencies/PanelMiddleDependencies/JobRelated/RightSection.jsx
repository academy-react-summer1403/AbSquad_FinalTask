import React from "react";
import JobHistoryForm from "./dependencies/JobHistoryForm";

const RightSection = ({ triggerRefetch }) => {
  return (
    <div className="px-5">
      <JobHistoryForm triggerRefetch={triggerRefetch} />
    </div>
  );
};

export default RightSection;
