import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./LeftSectionField.css";
import Button from "../../../../../Common/Button/Button";
import CalField from "../../../../../Common/Fields/CalField";
import { DatePicker } from "zaman";
import { setProfileInfo } from "../../../../../../redux/userSlice";
import { useDispatch } from "react-redux";
import { UpdateProfileInfo } from "../../../../../../core/Services/Api/Panel/UpdateProfileInfo";
const validationSchema = Yup.object({
  firstName: Yup.string().required("نام خانوادگی را وارد کنید"),
  lastName: Yup.string().required("نام را وارد کنید"),
  aboutMe: Yup.string().required("درباره من را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره همراه را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره همراه معتبر نیست"),
  nationalCode: Yup.string()
    .required("کد ملی را وارد کنید")
    .matches(/^[0-9]{10}$/, "کد ملی معتبر نیست"),
  birthDate: Yup.date().required("تاریخ تولد را وارد کنید"),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل را وارد کنید"),
  address: Yup.string().required("آدرس سکونت را وارد کنید"),
  gender: Yup.string().required("جنسیت را انتخاب کنید"),
});
console.log(localStorage.token);
const RightSec = () => {
  const dispatch = useDispatch();
  const UpDateProfileData = async (values) => {
    try {
      const formData = new FormData();
      formData.append("LName", values.lastName);
      formData.append("FName", values.firstName);
      formData.append("UserAbout", values.aboutMe);
      // formData.append("LinkdinProfile", values.linkdinProfile);
      // formData.append("TelegramLink", values.telegramLink);
      // formData.append("ReceiveMessageEvent", values.receiveMessageEvent);
      formData.append("HomeAdderess", values.address);
      formData.append("NationalCode", values.nationalCode);
      formData.append("Gender", values.gender);
      formData.append("BirthDay", "1753-01-01T00:00:00.000Z");
      // formData.append("Latitude", values.latitude);
      // formData.append("Longitude", values.longitude);
      // dispatch(setProfileInfo(values));
      const response = await UpdateProfileInfo(formData);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error updating profile data:", error);
    }
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        aboutMe: "",
        phoneNumber: "",
        nationalCode: "",
        birthDate: "",
        email: "",
        address: "",
        gender: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);

        UpDateProfileData(values);
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="flex flex-col md:flex-row md:flex-wrap gap-4">
          <div className="flex flex-col gap-4 max-md:w-full">
            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="flex flex-col">
                <label>نام</label>
                <Field
                  name="firstName"
                  className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline"
                  placeholder="نام"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-500">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label>نام خانوادگی</label>
                <Field
                  name="lastName"
                  className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline"
                  placeholder="نام خانوادگی"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500">{errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col">
              <label>درباره من</label>
              <Field
                name="aboutMe"
                className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline !w-full max-md:h-[93px]"
                placeholder="یک متن درباره خود وارد کنید"
              />
              {errors.aboutMe && touched.aboutMe ? (
                <div className="text-red-500">{errors.aboutMe}</div>
              ) : null}
            </div>

            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="flex flex-col">
                <label>شماره همراه</label>
                <Field
                  name="phoneNumber"
                  className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline"
                  placeholder="شماره همراه"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="text-red-500">{errors.phoneNumber}</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label>کد ملی</label>
                <Field
                  name="nationalCode"
                  className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline"
                  placeholder="کد ملی"
                />
                {errors.nationalCode && touched.nationalCode ? (
                  <div className="text-red-500">{errors.nationalCode}</div>
                ) : null}
              </div>
            </div>

            <div className="flex justify-between gap-20">
              <div className="flex flex-col flex-grow">
                <label>تاریخ تولد</label>
                <DatePicker
                  value={[values.birthDate]}
                  name="birthDate"
                  onChange={(dateObj) => {
                    const date =
                      dateObj.value instanceof Date
                        ? dateObj.value.toISOString().split("T")[0]
                        : dateObj.value;
                    setFieldValue("birthDate", date);
                    console.log(date);
                  }}
                  inputClass="filterStyle dark:bg-primaryBlack dark:outline !dark:focus:outline relative z-[60] text-center"
                  round="x4"
                />
                {errors.birthDate && touched.birthDate ? (
                  <div className="text-red-500">{errors.birthDate}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-4">
                <label>جنسیت</label>
                <div className="flex gap-5">
                  <div>
                    <Field type="radio" name="gender" value="true" />
                    <span>مرد</span>
                  </div>
                  <div>
                    <Field type="radio" name="gender" value="false" />
                    <span>زن</span>
                  </div>
                  {errors.gender && touched.gender ? (
                    <div className="text-red-500">{errors.gender}</div>
                  ) : null}
                  <span className="text-primaryBlue ">انتخاب کنید</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label>ایمیل</label>
              <Field
                name="email"
                className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline !w-full"
                placeholder="ایمیل"
              />
              {errors.email && touched.email ? (
                <div className="text-red-500">{errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label>آدرس سکونت</label>
              <Field
                name="address"
                className="ProfileForm dark:bg-primaryBlack dark:outline dark:text-primaryWhite dark:focus:outline !w-full max-md:h-[93px]"
                placeholder="آدرس سکونت"
              />
              {errors.address && touched.address ? (
                <div className="text-red-500">{errors.address}</div>
              ) : null}
            </div>
            <Button
              variant="contained"
              color="primary"
              phoneStyle="h-[56px] w-[169px] flex gap-3 text-lg dark:!text-primaryWhite mt-8"
              text=" اعمال تغییرات "
              type="submit"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RightSec;
