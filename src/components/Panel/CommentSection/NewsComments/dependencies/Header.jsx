import React from "react";
import { useSelector } from "react-redux";

const Header = ({ newsComments }) => {
  const profile = useSelector((state) => state.userSlice.profile);
  console.log(newsComments, "test");
  return (
    <div className="flex flex-col gap-3 dark:bg-primaryBlack dark:text-primaryWhite">
      <div> تعداد کامنت: {newsComments.totalCount}</div>
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
