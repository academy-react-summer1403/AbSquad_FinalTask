import React from "react";
import { useSelector } from "react-redux";

const Header = ({ courseComments }) => {
  const profile = useSelector((state) => state.userSlice.profile);
  console.log(courseComments, "test");
  return (
    <div className="flex flex-col gap-3">
      <div> تعداد کامنت: {courseComments.totalCount}</div>
      <div className="flex flex-col gap-1">
        <div>
          {profile.fName} {profile.lName}
        </div>
        <div>{profile.email}</div>
      </div>
    </div>
  );
};

export default Header;
