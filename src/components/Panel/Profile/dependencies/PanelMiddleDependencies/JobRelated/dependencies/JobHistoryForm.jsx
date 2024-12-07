import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "../../../../../../Common/Button/Button";
import { CreateJobHistory } from "../../../../../../../core/Services/Api/Panel/JobRelated/CreateJobHistory";
import toast from "react-hot-toast";
const validationSchema = Yup.object({
  jobTitle: Yup.string().required("عنوان شغل الزامی است"),
  aboutJob: Yup.string().required("توضیحات شغل الزامی است"),
  // companyWebSite: Yup.string()
  //   .url("آدرس وب‌سایت معتبر نیست")
  //   .required("وب‌سایت شرکت الزامی است"),
  // companyLinkdin: Yup.string().required("لینکدین شرکت الزامی است"),
  workStartDate: Yup.date().required("تاریخ شروع الزامی است"),
  workEndDate: Yup.date().required("تاریخ پایان الزامی است"),
  inWork: Yup.boolean().required("وضعیت شغلی الزامی است"),
  companyName: Yup.string().required("نام شرکت الزامی است"),
});

const JobHistoryForm = ({ triggerRefetch }) => {
  const CreateJobHistoryAPI = async (values) => {
    try {
      const res = await CreateJobHistory(values);
      console.log(res);
      toast.success("با موفقیت شغل شما اضافه شد");
      triggerRefetch(); // Trigger re-fetch in LeftSection
    } catch (error) {
      toast.error("خطا در اضافه کردن شغل");
      console.error(error);
    }
  };
  return (
    <Formik
      initialValues={{
        jobTitle: "",
        aboutJob: "",
        companyWebSite: "",
        companyLinkdin: "",
        workStartDate: "",
        workEndDate: "",
        inWork: false,
        companyName: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        console.log("first");
        CreateJobHistoryAPI(values);
        toast.success("با موفقیت شغل شما اضافه شد");
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>عنوان شغل</label>
            <Field
              name="jobTitle"
              placeholder="عنوان شغل"
              className="ProfileForm"
            />
            {errors.jobTitle && touched.jobTitle ? (
              <div className="text-red-500">{errors.jobTitle}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>توضیحات شغل</label>
            <Field
              name="aboutJob"
              placeholder="توضیحات شغل"
              className="ProfileForm"
            />
            {errors.aboutJob && touched.aboutJob ? (
              <div className="text-red-500">{errors.aboutJob}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>وب‌سایت شرکت</label>
            <Field
              name="companyWebSite"
              placeholder="وب‌سایت شرکت"
              className="ProfileForm"
            />
            {errors.companyWebSite && touched.companyWebSite ? (
              <div className="text-red-500">{errors.companyWebSite}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>لینکدین شرکت</label>
            <Field
              name="companyLinkdin"
              placeholder="لینکدین شرکت"
              className="ProfileForm"
            />
            {errors.companyLinkdin && touched.companyLinkdin ? (
              <div className="text-red-500">{errors.companyLinkdin}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>تاریخ شروع</label>
            <Field type="date" name="workStartDate" className="ProfileForm" />
            {errors.workStartDate && touched.workStartDate ? (
              <div className="text-red-500">{errors.workStartDate}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>تاریخ پایان</label>
            <Field type="date" name="workEndDate" className="ProfileForm" />
            {errors.workEndDate && touched.workEndDate ? (
              <div className="text-red-500">{errors.workEndDate}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>در حال کار</label>
            <Field type="checkbox" name="inWork" className="ProfileForm" />
            {errors.inWork && touched.inWork ? (
              <div className="text-red-500">{errors.inWork}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label>نام شرکت</label>
            <Field
              name="companyName"
              placeholder="نام شرکت"
              className="ProfileForm"
            />
            {errors.companyName && touched.companyName ? (
              <div className="text-red-500">{errors.companyName}</div>
            ) : null}
          </div>

          <Button
            variant="contained"
            color="primary"
            text="ارسال اطلاعات"
            type="submit"
          />
        </Form>
      )}
    </Formik>
  );
};

export default JobHistoryForm;
