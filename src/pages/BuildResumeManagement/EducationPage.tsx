import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getUserResumeData,
  updateUserResumeData,
} from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import {
  useGetUserResumeInfoQuery,
  useCreateUserResumeEducationsMutation,
} from "../../store/slices/resumeDetailsSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store";
import { IEducation } from "../../dto/education.dto";
import { useNavigate } from "react-router-dom";

function EducationPage() {
  const { data, refetch } = useGetUserResumeInfoQuery();
  const dispatch = useAppDispatch();
  const [createUserResumeEducations] = useCreateUserResumeEducationsMutation();
  const navigate = useNavigate();

  const [showFormFields, setShowFormFields] = useState<boolean>(true);

  const resumeDetailsSlice = useAppSelector(
    (state: RootState) => state.resumeDetailsSlice
  );

  const formik = useFormik({
    initialValues: {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      city: "",
      state: "",
      country: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: Yup.object({
      institution: Yup.string().required("School Name is required"),
      degree: Yup.string().required("Degree is required"),
      fieldOfStudy: Yup.string().required("Field of Study is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      startDate: Yup.date().required("Start Date is required"),
      endDate: Yup.date().required("End Date is required"),
    }),
    onSubmit: (values) => {
      createUserResumeEducations({
        ...values,
        userId: resumeDetailsSlice.user._id,
        key: "educations",
      }).then(() => {
        dispatch(updateUserResumeData({ values }));
        refetch();
      });
    },
  });

  useEffect(() => {
    if (data?.data) {
      dispatch(getUserResumeData(data?.data));
      formik.setValues({
        institution: data?.data?.education?.institution || "",
        degree: data?.data?.education?.degree || "",
        fieldOfStudy: data?.data?.education?.fieldOfStudy || "",
        city: data?.data?.education?.city || "",
        state: data?.data?.education?.state || "",
        country: data?.data?.education?.country || "",
        startDate: data?.data?.education?.startDate || "",
        endDate: data?.data?.education?.endDate || "",
      });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (resumeDetailsSlice?.educations?.length) {
      setShowFormFields(false);
    }
  }, [resumeDetailsSlice]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-10">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8">
          <h1 className="text-4xl font-extrabold text-white">
            Let’s talk about your education
          </h1>
          <p className="text-gray-200 mt-2">
            Tell us about any colleges, vocational programs, or training courses
            you took. Even if you didn’t finish, it’s important to list them.
          </p>
        </div>
        <div className="p-6">
          {resumeDetailsSlice?.educations &&
            Array.isArray(resumeDetailsSlice?.educations) &&
            !showFormFields &&
            resumeDetailsSlice?.educations.map(
              (education: IEducation, index: string) => (
                <div
                  key={index}
                  className="shadow-lg p-6 rounded-lg bg-white border border-gray-200 mb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Institute Name
                      </label>
                      <p className="text-sm font-medium text-gray-900">
                        {education.institution}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Institute Location
                      </label>
                      <p className="text-sm font-medium text-gray-900">
                        {education.city} ,{education.state} ,{education.country}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Degree
                      </label>
                      <p className="text-sm font-medium text-gray-900">
                        {education.degree}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Field of Study
                      </label>
                      <p className="text-sm font-medium text-gray-900">
                        {education.fieldOfStudy}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Graduation Month
                      </label>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(education.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Graduation Year
                      </label>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(education.endDate).toLocaleDateString() ||
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
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formik.values.institution}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.institution && formik.errors.institution
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                    placeholder="Oxford Software Institute & Oxford School of English"
                  />
                  {formik.touched.institution && formik.errors.institution && (
                    <p className="text-red-500 mt-1">
                      {formik.errors.institution}
                    </p>
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
                    className={`w-full border-2 p-4 rounded-lg bg-white shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      formik.touched.city && formik.errors.city
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                    placeholder="New Delhi"
                  />
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 mt-1">{formik.errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-4 rounded-lg bg-white shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      formik.touched.state && formik.errors.state
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                    placeholder="Delhi"
                  />
                  {formik.touched.state && formik.errors.state && (
                    <p className="text-red-500 mt-1">{formik.errors.state}</p>
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
                    className={`w-full border-2 p-4 rounded-lg bg-white shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      formik.touched.country && formik.errors.country
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                    placeholder="India"
                  />
                  {formik.touched.country && formik.errors.country && (
                    <p className="text-red-500 mt-1">{formik.errors.country}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Degree
                  </label>
                  <select
                    name="degree"
                    value={formik.values.degree}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.degree && formik.errors.degree
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                  >
                    <option>Select</option>
                    <option>Diploma</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                  </select>
                  {formik.touched.degree && formik.errors.degree && (
                    <p className="text-red-500 mt-1">{formik.errors.degree}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    placeholder="Field of Study"
                    name="fieldOfStudy"
                    value={formik.values.fieldOfStudy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.fieldOfStudy && formik.errors.fieldOfStudy
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                  />
                  {formik.touched.fieldOfStudy &&
                    formik.errors.fieldOfStudy && (
                      <p className="text-red-500 mt-1">
                        {formik.errors.fieldOfStudy}
                      </p>
                    )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Graduation Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-4 rounded-lg bg-white shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      formik.touched.startDate && formik.errors.startDate
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <p className="text-red-500 mt-1">
                      {formik.errors.startDate}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Graduation End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-4 rounded-lg bg-white shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      formik.touched.endDate && formik.errors.endDate
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  />
                  {formik.touched.endDate && formik.errors.endDate && (
                    <p className="text-red-500 mt-1">{formik.errors.endDate}</p>
                  )}
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    Save Education
                  </button>
                </div>
              </>
            )}
            {!showFormFields && (
              <div className="col-span-2 flex justify-between">
                <button
                  onClick={() => setShowFormFields(true)}
                  className="px-6 py-3 rounded-md bg-teal-500 text-white font-bold shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  Add More
                </button>
                <button
                  onClick={() => {
                    navigate(`/build-resume/skills`);
                  }}
                  className="px-6 py-3 rounded-md bg-teal-500 text-white font-bold shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
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

export default EducationPage;
