import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import {
  useUpdateUserResumeInfoMutation,
} from "../../store/slices/resumeDetailsSlice/apiSlice";
import {
  updateUserResumeData,
} from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import type { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import toastHandler from "../../_helpers/toastHandler";
import { Toaster } from "react-hot-toast";

function AdditionalDetailsPage() {
  const navigate = useNavigate();
  const categoryId = localStorage.getItem("categoryId");
  const templateId = localStorage.getItem("templateId");
  const dispatch = useAppDispatch();

  const [updateUserResumeInfo] = useUpdateUserResumeInfoMutation();

  const resumeDetailsSlice = useAppSelector(
    (state: RootState) => state.resumeDetailsSlice
  );

  const formik = useFormik({
    initialValues: {
      summary: "",
      hobbies: "",
      languagesKnown: "",
      marriedStatus: false,
    },
    validationSchema: Yup.object({
      summary: Yup.string().required("Summary Name is required"),
      hobbies: Yup.string().required("Hobbies is required"),
      languagesKnown: Yup.string().required(
        "Field of Languages Known is required"
      ),
      marriedStatus: Yup.boolean().required("Marital Status is required"),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values)
        const response = await updateUserResumeInfo({
          ...values,
          userId: resumeDetailsSlice.user._id,
          key: "userInfo",
        }).unwrap();
        toastHandler(response.message);
        dispatch(updateUserResumeData(response.updatedUser));
        nextPage();
      } catch (error: any) {
        console.log(error.data.message);
      }
    },
  });

  useEffect(() => {
    if (resumeDetailsSlice) {
      formik.setValues({
        summary: resumeDetailsSlice?.userInfo?.summary || "",
        languagesKnown: resumeDetailsSlice?.userInfo?.languagesKnown || "",
        hobbies: resumeDetailsSlice?.userInfo?.hobbies || "",
        marriedStatus: Boolean(resumeDetailsSlice?.userInfo?.marriedStatus) || false,
      });
    }
  }, [resumeDetailsSlice, dispatch]);

  const nextPage = () => {
    navigate(`/view/template/${categoryId}/${templateId}`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-10">
      <Toaster />
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8">
          <h1 className="text-4xl font-extrabold text-white">
            Add Additional Details
          </h1>
          <p className="text-gray-200 mt-2">
            Provide any additional information that can help employers better
            understand your profile.
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Summary
              </label>
              <textarea
                placeholder="Write Summary E.g., write your self"
                name="summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border-2 p-3 rounded-md ${
                  formik.touched.summary && formik.errors.summary
                    ? "border-red-500"
                    : "border-gray-200"
                } focus:outline-none focus:border-teal-400`}
              />
              {formik.touched.summary && formik.errors.summary && (
                <p className="text-red-500 mt-1">{formik.errors.summary}</p>
              )}
            </div>
            <div className="grid grid-flow-col space-x-2">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hobbies
                </label>
                <input
                  type="text"
                  placeholder="E.g., Reading, Traveling"
                  name="hobbies"
                  value={formik.values.hobbies}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full border-2 p-3 rounded-md ${
                    formik.touched.hobbies && formik.errors.hobbies
                      ? "border-red-500"
                      : "border-gray-200"
                  } focus:outline-none focus:border-teal-400`}
                />
                {formik.touched.hobbies && formik.errors.hobbies && (
                  <p className="text-red-500 mt-1">{formik.errors.hobbies}</p>
                )}
              </div>
              <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Married Status
              </label>
              <select
                name="marriedStatus"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={`${formik.values.marriedStatus}`}
                className={`w-full border-2 p-3 rounded-md ${
                  formik.touched.marriedStatus && formik.errors.marriedStatus
                    ? "border-red-500"
                    : "border-gray-200"
                } focus:outline-none focus:border-teal-400`}
              >
                <option value={`false`}>No</option>
                <option value={`true`}>Yes</option>
              </select>
              {formik.touched.marriedStatus &&
                formik.errors.marriedStatus && (
                  <p className="text-red-500 mt-1">
                    {formik.errors.marriedStatus}
                  </p>
                )}
            </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Languages Known
              </label>
              <input
                type="text"
                placeholder="E.g., English, Spanish"
                name="languagesKnown"
                value={formik.values.languagesKnown}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border-2 p-3 rounded-md ${
                  formik.touched.languagesKnown && formik.errors.languagesKnown
                    ? "border-red-500"
                    : "border-gray-200"
                } focus:outline-none focus:border-teal-400`}
              />
              {formik.touched.languagesKnown &&
                formik.errors.languagesKnown && (
                  <p className="text-red-500 mt-1">
                    {formik.errors.languagesKnown}
                  </p>
                )}
            </div>

            <div className="col-span-2 flex justify-between">
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-teal-500 text-white font-bold shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Add Details
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/view/template/${categoryId}/${templateId}`);
                }}
                className="px-6 py-3 rounded-md bg-teal-500 text-white font-bold shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Skip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDetailsPage;
