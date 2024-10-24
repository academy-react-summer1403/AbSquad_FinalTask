import React from "react";
import PanelCloseButton from "../../../Common/Panel/PanelCloseButton";
const CloseSection = ({ func }) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <span>دوره</span>
        <PanelCloseButton func={func} />
      </div>
    </>
  );
};

export { CloseSection };
