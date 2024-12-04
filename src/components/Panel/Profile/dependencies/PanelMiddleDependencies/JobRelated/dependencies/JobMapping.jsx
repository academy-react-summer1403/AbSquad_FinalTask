import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { GetJobHistoryForUser } from "../../../../../../../core/Services/Api/Panel/JobRelated/GetJobHistoryForUser";
import { DeleteJobAPI } from "../../../../../../../core/Services/Api/Panel/JobRelated/DeleteJob";
import CustomModal from "../../../../../../Common/Modal/CustomModal";
import { EditJobAPI } from "../../../../../../../core/Services/Api/Panel/JobRelated/EditJob";
const JobMapping = () => {
  const [jobLists, setJobLists] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // Job to edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Dropdown index
  const [jobDataForEdit, setJobDataForEdit] = useState("");

  const FetchJobHistoryAPI = async () => {
    try {
      const res = await GetJobHistoryForUser();
      setJobLists(res?.jobLists || []);
    } catch (error) {
      console.error("Error fetching job history:", error);
      setJobLists([]);
    }
  };

  useEffect(() => {
    FetchJobHistoryAPI();
  }, []);
  const EditAPIcall = async (SendData) => {
    const res = await EditJobAPI(SendData);
    console.log(res);
  };
  const handleEditClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setOpenDropdownIndex(null); // Close dropdown
  };

  const handleDeleteClick = async (jobId) => {
    const confirmDelete = window.confirm(
      "آیا مطمئن هستید می‌خواهید این شغل را حذف کنید؟"
    );
    if (confirmDelete) {
      try {
        await DeleteJobAPI(jobId); // Call the delete API
        setJobLists((prevJobs) => prevJobs.filter((job) => job.id !== jobId)); // Update state
        alert("شغل با موفقیت حذف شد");
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("حذف شغل با خطا مواجه شد");
      }
    }
    setOpenDropdownIndex(null); // Close dropdown
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col bg-primaryWhite rounded-2xl p-3 gap-2 ">
      <div className="flex flex-row justify-between gap-20 font-bold border-b pb-2 text-gray-700">
        <div className="flex-1 text-center">عنوان شغل</div>
        <div className="flex-2 text-center">توضیحات شغل</div>
        <div className="flex-1 text-center">وب‌سایت</div>
        <div className="flex-1 text-center">تاریخ شروع</div>
        <div className="flex-1 text-center">تاریخ پایان</div>
        <div className="flex-1 text-center">عملیات</div>
      </div>

      {jobLists.map((job, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center border-b py-2 gap-20 text-gray-600"
        >
          <div className="flex-1 text-center">{job.jobTitle}</div>
          <div className="flex-2 text-center truncate">{job.aboutJob}</div>
          <div className="flex-1 text-center truncate">
            {job.companyWebSite}
          </div>
          <div className="flex-1 text-center">
            {new Date(job.workStartDate).toLocaleDateString("fa-IR")}
          </div>
          <div className="flex-1 text-center">
            {job.inWork
              ? "در حال کار"
              : new Date(job.workEndDate).toLocaleDateString("fa-IR")}
          </div>
          <div className="flex-1 text-center relative">
            {/* Dropdown menu */}
            <button
              onClick={() => toggleDropdown(index)}
              className="px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              گزینه‌ها
            </button>
            {openDropdownIndex === index && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border z-10">
                <div
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleEditClick(job)}
                >
                  ویرایش
                </div>
                <div
                  className="px-4 py-2 text-sm text-red-500 hover:bg-red-100 cursor-pointer"
                  onClick={() => handleDeleteClick(job.id)}
                >
                  حذف
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Modal for editing with Formik */}
      <CustomModal open={isModalOpen} onClose={handleModalClose}>
        {selectedJob && (
          <Formik
            initialValues={{
              jobTitle: selectedJob.jobTitle,
              aboutJob: selectedJob.aboutJob,
              companyWebSite: selectedJob.companyWebSite,
            }}
            validationSchema={Yup.object({
              jobTitle: Yup.string().required("عنوان شغل الزامی است"),
              aboutJob: Yup.string().required("توضیحات شغل الزامی است"),
              // companyWebSite: Yup.string().url("آدرس وب‌سایت نامعتبر است"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              EditAPIcall(values);

              setJobDataForEdit(values);
              console.log("Form jobjob:", jobDataForEdit); // Log the form values
              console.log("Form Values:", values); // Log the form values

              setSubmitting(false);
              handleModalClose(); // Close the modal
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h2 id="modal-title" className="text-lg font-bold mb-4">
                  ویرایش اطلاعات شغل
                </h2>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1">
                    عنوان شغل:
                  </label>
                  <Field
                    name="jobTitle"
                    className="w-full border rounded p-2 bg-primaryGray text-gray-800"
                  />
                  {errors.jobTitle && touched.jobTitle && (
                    <div className="text-red-500 text-sm">
                      {errors.jobTitle}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1">
                    توضیحات شغل:
                  </label>
                  <Field
                    name="aboutJob"
                    as="textarea"
                    className="w-full border rounded p-2 bg-primaryGray text-gray-800"
                  />
                  {errors.aboutJob && touched.aboutJob && (
                    <div className="text-red-500 text-sm">
                      {errors.aboutJob}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1">
                    وب‌سایت:
                  </label>
                  <Field
                    name="companyWebSite"
                    className="w-full border rounded p-2 bg-primaryGray text-gray-800"
                  />
                  {errors.companyWebSite && touched.companyWebSite && (
                    <div className="text-red-500 text-sm">
                      {errors.companyWebSite}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                >
                  {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
                </button>
              </Form>
            )}
          </Formik>
        )}
      </CustomModal>
    </div>
  );
};

export default JobMapping;
