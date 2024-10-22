import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import Button from "../Common/Button/Button";
import { Form, Formik, Field } from "formik";
import "./hitest.css";
import { PhoneNumberPost } from "../../core/Services/Api/AuthPage/register/registerLevel1";
import { handleToken } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { handlePhoneNumber } from "../../redux/PhoneSlice";
const PhoneInput = ({ titleF, handleNext }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const PhoneNumber = values.PhoneNumber;
    const res = await PhoneNumberPost({ PhoneNumber });
    handleNext();
    dispatch(handlePhoneNumber(PhoneNumber));
  };

  return (
    <Formik initialValues={{ PhoneNumber: "" }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="max-md:w-[345px] max-md:mx-auto">
            <span className="text-xl md:mx-12">{titleF}</span>
            <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl text-5xl mt-2 md:mx-12 max-md:w-[345px] max-md:items-start">
              <Field
                className="CourseField md:w-[538px]"
                placeholder="شماره همراه خود را وارد کنید"
                name="PhoneNumber"
                type="text" // added type to ensure proper input handling
              />
            </div>
            <Button
              phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto mt-10"
              text="ارسال کد تایید"
              type="submit" // This ensures the button triggers form submit
              // onClick={handleNext}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PhoneInput;
