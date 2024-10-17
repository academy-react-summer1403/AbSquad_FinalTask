import React, { useState } from "react";
import TextField from "../Common/Fields/TextField";
import "./hitest.css";
import { MdPhoneIphone } from "react-icons/md";
import { div } from "framer-motion/client";
import { FaHouse } from "react-icons/fa6";
const PhoneInput = ({ titleF }) => {
  const [PhoneNumber, SetPhoneNumber] = useState("");
  console.log(PhoneNumber);
  return (
    <div className=" max-md:w-[345px] max-md:mx-auto">
      <span className="text-xl md:mx-12">{titleF}</span>
      <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl text-5xl mt-2 md:mx-12  max-md:w-[345px] max-md:items-start ">
        <TextField
          placeholder="شماره همراه خود را وارد کنید"
          icon={MdPhoneIphone}
          onChange={(e) => SetPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
