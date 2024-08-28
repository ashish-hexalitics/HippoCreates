import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getUserResumeData,
  updateUserResumeData,
} from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import {
  useGetUserResumeInfoQuery,
  useUpdateUserResumeInfoMutation,
} from "../../store/slices/resumeDetailsSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import type { RootState } from "../../store";

function ContactPage() {
  const { data } = useGetUserResumeInfoQuery();
  const [updateUserResumeInfo] = useUpdateUserResumeInfoMutation();
  const dispatch = useAppDispatch();

  const resumeDetailsSlice = useAppSelector(
    (state: RootState) => state.resumeDetailsSlice
  );

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Last Name is required"),
    city: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("City is required"),
    country: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Country is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]{6}$/, "Pin Code must be exactly 6 digits")
      .required("Pin Code is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    otherEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      zipCode: "",
      phone: "",
      otherEmail: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form data", values);
      const response = await updateUserResumeInfo({
        ...values,
        userId: resumeDetailsSlice.user._id,
        key: "userInfo",
      }).unwrap();
      console.log(response);
      dispatch(updateUserResumeData(values));
    },
  });

  useEffect(() => {
    if (data?.data) {
      dispatch(getUserResumeData(data?.data));
      formik.setValues({
        firstName: data?.data?.userInfo?.firstName || "",
        lastName: data?.data?.userInfo?.lastName || "",
        city: data?.data?.userInfo?.city || "",
        country: data?.data?.userInfo?.country || "",
        zipCode: data?.data?.userInfo?.zipCode || "",
        phone: data?.data?.userInfo?.phone || "",
        otherEmail: data?.data?.userInfo?.otherEmail || "",
      });
    }
  }, [data, dispatch]);

  console.log(resumeDetailsSlice);
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6">
          <h1 className="text-3xl font-bold text-white">
            Let's start with your header
          </h1>
          <p className="text-gray-200 mt-2">
            Include your full name and at least one way for employers to reach
            you.
          </p>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center bg-gray-100">
                <span className="text-gray-400 text-xl">+</span>
              </div>
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                Add a photo
              </button>
            </div>
            <div className="w-full md:w-2/3 mt-6 md:mt-0">
              <form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // For blur event
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Diya"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-red-500 mt-1">
                      {formik.errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Agarwal"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="text-red-500 mt-1">
                      {formik.errors.lastName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="New Delhi"
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <p className="text-red-500 mt-1">{formik.errors.city}</p>
                  ) : null}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="India"
                  />
                  {formik.touched.country && formik.errors.country ? (
                    <p className="text-red-500 mt-1">{formik.errors.country}</p>
                  ) : null}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="110034"
                  />
                  {formik.touched.zipCode && formik.errors.zipCode ? (
                    <p className="text-red-500 mt-1">{formik.errors.zipCode}</p>
                  ) : null}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="+91 11 1234 5677"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="text-red-500 mt-1">{formik.errors.phone}</p>
                  ) : null}
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="otherEmail"
                    value={formik.values.otherEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="d.agarwal@sample.in"
                  />
                  {formik.touched.otherEmail && formik.errors.otherEmail ? (
                    <p className="text-red-500 mt-1">
                      {formik.errors.otherEmail}
                    </p>
                  ) : null}
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
