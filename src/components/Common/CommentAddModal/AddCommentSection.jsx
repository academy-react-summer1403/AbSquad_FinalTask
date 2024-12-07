﻿import React, { useEffect, useState } from "react";
import ProfileComp from "../ProfileComp";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { SlEmotsmile } from "react-icons/sl";
import { Field, Form, Formik } from "formik";
import { AddCourseComments } from "../../../core/Services/Api/CourseComments/add.comment.api";
import { toast } from "react-hot-toast";
import { setProfileInfo } from "../../../redux/userSlice";
import { GetProfileInfo } from "../../../core/Services/Api/Panel/GetProfileInfo";
import { useSelector, useDispatch } from "react-redux";
import { AddNewsComments } from "../../../core/Services/Api/NewsComments/add.comment.api";
const AddCommentSection = ({ type = "", newsId = "" }) => {
  const dispatch = useDispatch();
  // Token Getting And Check
  const [tokenExist, setTokenExist] = useState("");
  const student = useSelector((state) => state.userSlice.profile);
  useEffect(() => {
    // Checking The Token
    const token = localStorage.token;
    setTokenExist(token);
    // Getting Student Info
  }, []);
  // Fetching Profile
  const FetchProfile = async () => {
    try {
      const ProfileInfo = await GetProfileInfo(tokenExist);
      dispatch(setProfileInfo(ProfileInfo));
    } catch {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchProfile();
  }, [tokenExist]);
  const handleAddComment = async (data) => {
    if (type == "course") {
      const res = await AddCourseComments(data);
      if (res?.status == "success") {
        // Show success toast if the comment is successfully added
        toast.success("Your comment was successfully submitted!", {
          duration: 3000, // Duration of the toast in ms
          position: "top-right", // Position of the toast
          style: {
            background: "#4BB543", // Green background for success
            color: "#fff", // White text
            borderRadius: "8px", // Rounded corners
            padding: "12px", // Padding inside the toast
            fontSize: "16px", // Font size
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
          },
        });
      }
    } else {
      const res = await AddNewsComments(data);
      console.log(res);
    }
  };

  const handleSubmit = (values) => {
    if (type == "course") {
      const formData = new FormData();
      formData.append("CourseId", CourseId.split("=")[1]);
      formData.append("Title", values.commentTitle);
      formData.append("Describe", values.mainComment);
      handleAddComment(formData);
    } else {
      handleAddComment({
        title: values.commentTitle,
        describe: values.mainComment,
        newsId: newsId,
        userId: localStorage.getItem("id"),
        userIpAddress: "192.168.1.1",
      });
    }
  };

  return (
    <div className="flex flex-col items-start justify-center w-full">
      {/* Profile Pic */}
      <div className="flex justify-start w-full">
        <ProfileComp
          name={`${student.fName} ${student.lName}`}
          reply="hel"
          skill="دانشجو"
          pic={student.currentPictureAddress}
        />
      </div>

      {/* Sending Section And FORM */}
      <Formik
        initialValues={{ commentTitle: "", mainComment: "" }}
        onSubmit={handleSubmit}
      >
        <Form className="w-full">
          <div className="flex flex-row w-full justify-start items-end mt-3 h-28 gap-4 relative">
            {/* Send Button */}
            <button
              type="submit"
              className="group bg-primaryBlue  rounded-full cursor-pointer hover:bg-primaryViolet p-3 sm:p-4 max-sm:absolute max-sm:right-3 max-sm:bottom-2"
            >
              <PiPaperPlaneTiltLight
                className="w-full h-full text-primaryWhite max-sm:w-5"
                size="32px"
              />
            </button>

            {/* Inputs Container */}
            <div className="border grow h-full rounded-[40px] flex flex-col overflow-hidden px-5 max-sm:pr-16 max-sm:pl-0">
              <div className="border-b basis-1/2 flex justify-start items-center">
                <Field
                  name="commentTitle"
                  className="bg-primaryWhite dark:bg-primaryBlack outline-none w-full"
                  type="text"
                  placeholder={"عنوان نظر خود را وارد کنید"}
                />
              </div>
              <div className="basis-1/2 flex justify-start items-center">
                <Field
                  name="mainComment"
                  className="bg-primaryWhite dark:bg-primaryBlack outline-none w-full"
                  type="text"
                  placeholder={"متن نظر خود را وارد کنید"}
                />
              </div>
            </div>

            {/* Emojies */}
            <div className="border border-primaryGray rounded-full max-sm:absolute p-3 sm:p-4 max-sm:top-2 max-sm:right-3">
              <SlEmotsmile size={"32px"} className="w-full h-full max-sm:w-5" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCommentSection;
