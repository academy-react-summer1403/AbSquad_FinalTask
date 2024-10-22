import React from "react";
import { Field } from "formik";
const CustomField = (field, form, touched = "", errors = "", ...props) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        {...field} // Formik's field props (value, onChange, etc.)
        {...props} // Additional props like placeholder, type, etc.
      />
      {/* Display validation error if the field is touched and has an error */}
      {touched[field.name] && errors[field.name] && (
        <div className="text-red-500">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default CustomField;
