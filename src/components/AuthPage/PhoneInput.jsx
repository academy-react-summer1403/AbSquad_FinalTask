import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import Button from "../Common/Button/Button";
import { Form, Formik, Field } from "formik";
import "./hitest.css";
import { PhoneNumberPost } from "../../core/Services/Api/AuthPage/register/registerLevel1";
import { handleToken } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { handlePhoneNumber } from "../../redux/PhoneSlice";
const PhoneInput = ({ titleF, handleNext, step, stepForgot }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const PhoneNumber = values.PhoneNumber;
    if (step == 0) {
      try {
        const res = await PhoneNumberPost(PhoneNumber);
        console.log("Response structure:", JSON.stringify(res, null, 2));
        console.log(res.success);
        console.log(res, "this is for res");
        if (res.success === true) {
          console.log("first");
          toast.success(res.message);دد
          handleNext();
          dispatch(handlePhoneNumber(PhoneNumber));
        }
        const num = res.data.ErrorMessage.length - 1;

        // console.log(num);
        // console.log(res.data.ErrorMessage[num]);
        // console.log(res.data, "aaaa");

        // if (true) {
        //   toast.error(res.data.ErrorMessage[num]);
        //   console.log("first");
        //   console.log(res.data.ErrorMessage[num]);
        // } else {
        //   toast.error("An unexpected error occurred.");
        // }
      } catch (error) {}
    } else if (stepForgot == 0) {
      console.log("aldaldlas");
    }
  };

  return (
    <Formik initialValues={{ PhoneNumber: "" }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <Toaster />
          </div>
          <div className="max-md:w-[345px] max-md:mx-auto">
            <span className="text-xl md:mx-12">{titleF}</span>
            <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl text-5xl mt-2 md:mx-12 max-md:w-[345px] max-md:items-start">
              <Field
                className="CourseField md:w-[538px]"
                placeholder={`${titleF} خود را وارد کنید`}
                name="PhoneNumber"
                type="text" // added type to ensure proper input handling
              />
            </div>
            {step == 0 && (
              <Button
                phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto mt-10"
                text="ارسال کد تایید"
                type="submit" // This ensures the button triggers form submit
                // onClick={handleNext}
              />
            )}
            {stepForgot == 0 && (
              <Button
                phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto mt-10"
                text="ارسال کد تایید"
                type="submit"
              />
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PhoneInput;
