import React from "react";
import { Field, Formik } from "formik";
import "./CourseField.css";

const TextField = ({ name, placeholder, type, icon: Icon, ...rest }) => {
  return (
    <Formik>
      <div className="flex items-center CourseField">
        {Icon && <Icon className="text-primaryBlack mr-2" />}
        <Field
          className="CourseField md:w-[538px]"
          name={name}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </Formik>
  );
};

export default TextField;
