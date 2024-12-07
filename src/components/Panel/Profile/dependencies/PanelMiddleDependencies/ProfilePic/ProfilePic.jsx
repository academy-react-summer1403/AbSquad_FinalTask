import React, { useState } from "react";
import { useSelector } from "react-redux";
import PicComp from "./PicComp";
import AddNewPic from "./AddNewPic";

const ProfilePic = ({ setRefetch = { setRefetch } }) => {
  const userImages = useSelector((state) => state.userSlice.profile.userImage);
  const [selectedPic, setSelectedPic] = useState(null); // Index of the selected picture
  const [option, setOption] = useState(""); // Option for additional actions (e.g., options menu)
  const [imageId, setImageId] = useState(""); // To store the ID of the selected picture

  // Handle selection of a picture
  const handleSelected = (index, id) => {
    setSelectedPic(index); // Update selected picture index
    setImageId(id); // Store the selected picture's ID
  };

  // Handle opening options for a picture
  const optionsOpen = (index) => setOption(index);

  console.log(userImages, "User Images: "); // Debugging user images
  console.log(imageId, "Selected Image ID: "); // Debugging selected image ID

  return (
    <div className="flex gap-8 flex-wrap max-md:justify-center p-3">
      {userImages && userImages.length > 0 ? (
        userImages.map((image, index) => {
          const imageSrc = image?.puctureAddress || ""; // Default to empty string if address is not available
          const ImageID = image?.id; // ID of the current image

          return (
            <PicComp
              key={ImageID || index} // Use ImageID or fallback to index as key
              imageSrc={imageSrc} // Image source URL
              isSelected={selectedPic === index} // Check if this picture is selected
              onSelected={() => handleSelected(index, ImageID)} // Pass index and ImageID to the handler
              optionsOpen={() => optionsOpen(index)} // Pass index to optionsOpen handler
              option={option === index} // Check if the option menu is open for this picture
              ImageID={ImageID} // Pass the image ID as a prop to PicComp
              setRefetch={setRefetch} // Refetch handler
            />
          );
        })
      ) : (
        <p>No images available</p> // Show message if no images are available
      )}

      {/* Add new picture button */}
      <div className="ml-auto max-md:mr-8">
        <AddNewPic setRefetch={setRefetch} />
      </div>
    </div>
  );
};

export default ProfilePic;
