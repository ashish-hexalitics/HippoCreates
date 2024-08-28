import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getUserResumeData,
  updateUserResumeData,
} from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import {
  useGetUserResumeInfoQuery,
  useUpdateUserResumeEmploymentsMutation,
} from "../../store/slices/resumeDetailsSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import type { RootState } from "../../store";
import { IUserEmployment } from "../../dto/employment.dto";

function ExperiencePage() {
  const { data } = useGetUserResumeInfoQuery();
  const dispatch = useAppDispatch();
  const [updateEmployment] = useUpdateUserResumeEmploymentsMutation();

  const [showFormFields, setShowFormFields] = useState<boolean>(true);

  const resumeDetailsSlice = useAppSelector(
    (state: RootState) => state.resumeDetailsSlice
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      company: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Job Title is required"),
      company: Yup.string().required("Employer is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      startDate: Yup.date().required("Start Date is required"),
      endDate: Yup.date().required("End Date is required"),
    }),
    onSubmit: (values) => {
      updateEmployment({
        ...values,
        userId: resumeDetailsSlice.user._id,
        key: "employments",
      }).then(() => {
        console.log("Employment details updated", values);
        dispatch(updateUserResumeData({ values }));
      });
    },
  });

  useEffect(() => {
    if (data?.data) {
      dispatch(getUserResumeData(data?.data));
      formik.setValues({
        title: data?.data?.employment?.title || "",
        company: data?.data?.employment?.company || "",
        city: data?.data?.employment?.city || "",
        country: data?.data?.employment?.country || "",
        startDate: data?.data?.employment?.startDate || "",
        endDate: data?.data?.employment?.endDate || "",
      });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (resumeDetailsSlice?.employments.length) {
      setShowFormFields(false);
    }
  }, [resumeDetailsSlice]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6">
          <h1 className="text-3xl font-bold text-white">
            Let’s work on your experience
          </h1>
          <p className="text-gray-200 mt-2">
            Start with your most recent job first.
          </p>
        </div>
        <div className="p-6">
          {resumeDetailsSlice?.employments &&
            Array.isArray(resumeDetailsSlice?.employments) &&
            resumeDetailsSlice?.employments.map(
              (employment: IUserEmployment, index: string) => (
                <div
                  key={index}
                  className="shadow-lg p-6 rounded-lg bg-white border border-gray-200 mb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        Job Title
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {employment.title}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        Employer
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {employment.company}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        City
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {employment.city}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        Country
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {employment.country}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        Start Date
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {new Date(employment.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        End Date
                      </label>
                      <p className="text-lg font-medium text-gray-900">
                        {new Date(employment.endDate).toLocaleDateString() ||
                          "Present"}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {showFormFields && (
              <>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.title && formik.errors.title
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                    placeholder="Retail Sales Associate"
                  />
                  {formik.touched.title && formik.errors.title && (
                    <p className="text-red-500 mt-1">{formik.errors.title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Employer
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.company && formik.errors.company
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                    placeholder="ZARA"
                  />
                  {formik.touched.company && formik.errors.company && (
                    <p className="text-red-500 mt-1">{formik.errors.company}</p>
                  )}
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
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.city && formik.errors.city
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                    placeholder="New Delhi"
                  />
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 mt-1">{formik.errors.city}</p>
                  )}
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
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.country && formik.errors.country
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                    placeholder="India"
                  />
                  {formik.touched.country && formik.errors.country && (
                    <p className="text-red-500 mt-1">{formik.errors.country}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.startDate && formik.errors.startDate
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <p className="text-red-500 mt-1">
                      {formik.errors.startDate}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.endDate && formik.errors.endDate
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                  />
                  {formik.touched.endDate && formik.errors.endDate && (
                    <p className="text-red-500 mt-1">{formik.errors.endDate}</p>
                  )}
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </>
            )}
            {!showFormFields && (
              <div className="col-span-2 flex justify-between">
                <button
                  onClick={() => setShowFormFields(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  Add More
                </button>
                <button
                  onClick={() => setShowFormFields(false)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  Skip
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
