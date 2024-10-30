import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PicComp from "./PicComp";
import AddNewPic from "./AddNewPic";

const ProfilePic = ({ setRefetch = { setRefetch } }) => {
  const userImages = useSelector((state) => state.userSlice.profile.userImage);
  const [selectedPic, setSelectedPic] = useState(null);
  const [option, setOption] = useState("");

  const handleSelected = (index) => setSelectedPic(index);
  const optionsOpen = (index) => setOption(index);

  console.log(userImages, "User Images: ", userImages);

  return (
    <div className="flex gap-8 flex-wrap max-md:justify-center p-3">
      {userImages && userImages.length > 0 ? (
        userImages.map((image, index) => {
          const imageSrc = image ? image.puctureAddress || "" : "";
          const ImageID = image.id;
          return (
            <PicComp
              key={image?.id || index}
              imageSrc={imageSrc}
              isSelected={selectedPic === index}
              onSelected={() => handleSelected(index)}
              optionsOpen={() => optionsOpen(index)}
              option={option === index}
              ImageID={ImageID}
              setRefetch={setRefetch}
            />
          );
        })
      ) : (
        <p>No images available</p>
      )}

      <div className="ml-auto max-md:mr-8">
        <AddNewPic setRefetch={setRefetch} />
      </div>
    </div>
  );
};

export default ProfilePic;
