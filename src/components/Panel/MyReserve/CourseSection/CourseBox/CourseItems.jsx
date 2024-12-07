import React, { useEffect, useState } from "react";
import { IoEyeOutline, IoLogoPaypal } from "react-icons/io5";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import ApprovalStatus from "./ApprovalStatus";
import { GetCourseDetail } from "../../../../../core/Services/Api/CourseDetail/course.detail.api";
import { handleDateFormat } from "../../../../../core/utilities/DateConverter/data.convert.utils";
import { Formik, Form, Field } from "formik";
import ReactModal from "react-modal";
import { PaymentFirstStep } from "../../../../../core/Services/Api/Payment/StudentPaymentSteps/PaymentFirstStep";
import { useNavigate } from "react-router-dom";
const CourseItems = ({ func, statusId, courseId }) => {
  const nav = useNavigate();
  const [courseDetail, setCourseDetail] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleGetCourseDetail = async (id) => {
    const res = await GetCourseDetail("CourseId=" + id);
    setCourseDetail(res);
  };

  useEffect(() => {
    if (courseId) handleGetCourseDetail(courseId);
  }, [courseId]);

  // Converting Dates
  const [formattedDateStart, setFormattedDateStart] = useState("");
  useEffect(() => {
    if (courseDetail.startTime !== undefined)
      setFormattedDateStart(handleDateFormat(courseDetail.startTime));
  }, [courseDetail.startTime]);

  // Function to handle modal submission
  const handleModalSubmit = async (values) => {
    console.log("Form Values:", values); // Logging form values
    setIsModalOpen(false);

    try {
      const res = await PaymentFirstStep(values, courseId);
      console.log(res); // Logging the response
    } catch (error) {
      console.error("Error during payment submission:", error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 2xl:border-none rounded-2xl hover:bg-primaryGray"
      >
        {/* Whole Rect */}
        <div className="basis-full flex flex-row gap-y-1 2xl:flex-row 2xl:items-center">
          {/* Course Image */}
          <div className="2xl:basis-[18%] h-full basis-1/2 2xl:pr-5">
            <img
              className="w-11/12 2xl:w-4/5 2xl:h-[80px] h-20 rounded-lg border"
              src={
                courseDetail.imageAddress !== "testimg"
                  ? courseDetail.imageAddress
                  : "/ErrImg.jpg"
              }
              alt=""
            />
          </div>
          {/* Second Part Of Div */}
          <div className="grow 2xl:basis-full flex flex-col gap-y-1 2xl:flex-row 2xl:items-center">
            {/* Name Of The Course */}
            <div className="text-base 2xl:text-xl 2xl:basis-[18%] truncate">
              {courseDetail.title}
            </div>

            {/* Teachers */}
            <div className="flex 2xl:w-[20%]">
              <textarea
                maxLength={10}
                readOnly
                disabled
                value={"محسن اسفندیاری، مهدی اصغری"}
                className="text-fontGray text-sm 2xl:text-base 2xl:text-primaryBlack resize-none bg-transparent truncate overflow-hidden h-7 2xl:basis-3/4"
              />
            </div>

            {/* Date Of Course */}
            <div className="hidden 2xl:flex text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base 2xl:basis-[17.5%]">
              {formattedDateStart}
            </div>
            {/* Price of Course */}
            <div className="hidden 2xl:flex 2xl:text-base 2xl:basis-[18%]">
              <span className="text-xl">
                {parseInt(courseDetail.cost).toLocaleString()}
              </span>{" "}
              تومان
            </div>
            {/* Sign Up Status */}
            <div className="">
              <ApprovalStatus statusId={statusId} />
            </div>
            {/* Icons */}
            <div className="hidden 2xl:flex justify-end items-center 2xl:text-base 2xl:grow">
              <div className="flex justify-end">
                <div className="flex justify-center items-center gap-3 h-full rounded-full p-2">
                  <IoEyeOutline
                    onClick={() => {
                      nav(`/CourseDetail/CourseId=${courseId}`);
                    }}
                    size="24px"
                    className="text-fontGray hover:text-primaryBlue cursor-pointer"
                  />
                  <IoLogoPaypal
                    onClick={() => {
                      setIsModalOpen(true);
                      console.log(isModalOpen);
                    }} // Open modal
                    size="24px"
                    className="text-fontGray hover:text-primaryBlue cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {/* Modal */}
      {/* Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          setStep(1); // Reset to the first step when closing the modal
        }}
        className="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primaryBlue rounded-3xl w-[300px] flex flex-col justify-center items-center shadow-lg"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
        ariaHideApp={false}
      >
        {(() => {
          const [step, setStep] = useState(1); // Step state

          return (
            <Formik
              initialValues={{
                Paid: "",
                PaymentDate: "",
                PaymentInvoiceNumber: "",
                PaymentImage: null, // Field for the image
              }}
              onSubmit={(values) => {
                if (step === 1) {
                  console.log("level 1");
                } else if (step === 2) {
                  console.log("level 2");
                }
              }}
            >
              {({ setFieldValue }) => (
                <Form className="p-4">
                  <h2 className="text-lg font-bold mb-4">
                    {step === 1 ? "اطلاعات پرداخت" : "آپلود تصویر"}
                  </h2>

                  {/* Step 1: Payment Information */}
                  {step === 1 && (
                    <>
                      <div className="mb-4">
                        <label className="block mb-2">میزان پرداخت</label>
                        <Field
                          name="Paid"
                          type="number"
                          placeholder="Enter Paid Amount"
                          className="w-full p-2 border rounded bg-primaryGray text-black"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2">زمان پرداخت</label>
                        <Field
                          name="PaymentDate"
                          type="date"
                          className="w-full p-2 border rounded bg-primaryGray text-black"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2">شماره پیگیری</label>
                        <Field
                          name="PaymentInvoiceNumber"
                          type="text"
                          placeholder="Enter Invoice Number"
                          className="w-full p-2 border rounded bg-primaryGray text-black"
                        />
                      </div>
                      <div className="flex justify-between gap-2">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(2)} // Move to Step 2
                          className="px-4 py-2 bg-gray-300 rounded"
                        >
                          مرحله بعد
                        </button>
                      </div>
                    </>
                  )}

                  {/* Step 2: Upload Image */}
                  {step === 2 && (
                    <>
                      <div className="mb-4">
                        <label className="block mb-2">آپلود تصویر</label>
                        <input
                          type="file"
                          name="PaymentImage"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "PaymentImage",
                              event.currentTarget.files[0]
                            );
                          }}
                          className="w-full p-2 border rounded bg-primaryGray text-black"
                        />
                      </div>
                      <div className="flex justify-between gap-2">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(1)} // Move back to Step 1
                          className="px-4 py-2 bg-gray-300 rounded"
                        >
                          بازگشت
                        </button>
                      </div>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          );
        })()}
      </ReactModal>
    </>
  );
};

export { CourseItems };
