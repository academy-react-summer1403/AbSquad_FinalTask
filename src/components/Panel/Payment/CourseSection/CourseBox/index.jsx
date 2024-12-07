import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { LuBookDown } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import "react-circular-progressbar/dist/styles.css";
import ApprovalStatus from "./ApprovalStatus";
import { GetStudentPayList } from "../../../../../core/Services/Api/Payment/GetPaymeantDATA/StudentGetList";
import { CourseItems } from "./CourseItems";
const CourseBox = ({ func }) => {
  const [payedList, setPayedList] = useState([]);
  const FetchStudentPayList = async () => {
    const res = await GetStudentPayList(); // Assuming this returns a Promise
    console.log(res);
    setPayedList(Array.isArray(res) ? res : []); // Safely ensure `res` is an array
  };

  useEffect(() => {
    FetchStudentPayList();
  }, []);

  return (
    <>
      {/* accept
: 
true
courseId
: 
"723bf735-e0ad-ef11-b6ed-e2b8c6c9e309"
courseUserId
: 
"bd054868-6eb3-ef11-b6ee-fd09e32c9077"
groupName
: 
"New Group"
insertDate
: 
"2024-12-06T04:37:27.007"
paid
: 
111
paymentId
: 
"fa9bdc74-6eb3-ef11-b6ee-fd09e32c9077"
paymentInvoiceImage
: 
"https://classapi.sepehracademy.ir/\\Files\\Payment\\Screenshot 2024-12-06 024225_39f8f7df-4623-44d5-8cb0-7cc504d1d131.png"
peymentDate
: 
"2024-11-07T00:00:00" */}

      {payedList.length === 0 ? (
        <p>Nothing to map</p>
      ) : (
        payedList.map((it, index) => (
          <CourseItems
            key={it.paymentId}
            groupName={it.groupName}
            accept={it.accept}
            paid={it.paid}
          />
        ))
      )}
    </>
  );
};

export { CourseBox };
