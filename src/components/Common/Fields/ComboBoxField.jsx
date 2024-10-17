import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const ComboBoxField = ({ items = "" }) => {
  return (
    <Autocomplete
      disablePortal
      options={items}
      className="CourseField"
      renderInput={(params) => <TextField {...params} label="انتخاب کنید" />}
    />
  );
};

export default ComboBoxField;
