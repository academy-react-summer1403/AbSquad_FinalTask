import React, { useState } from "react";
import PicComp from "./PicComp";
import AddNewPic from "./AddNewPic";

const ProfilePic = () => {
  const [selectedPic, setSelectedPic] = useState(null);
  const handleSelected = (index) => {
    setSelectedPic(index);
  };
  const [Option, setOption] = useState("");
  const OptionsOpen = (index) => {
    setOption(index);
  };

  return (
    <div className="flex gap-8 flex-wrap max-md:justify-center p-3">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <PicComp
            key={index}
            isSelected={selectedPic === index}
            onSelected={() => handleSelected(index)}
            OptionsOpen={() => OptionsOpen(index)}
            Option={Option === index}
          />
        ))}

      <div className="ml-auto max-md:mr-8">
        <AddNewPic />
      </div>
    </div>
  );
};

export default ProfilePic;
