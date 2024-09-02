import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getUserResumeData,
  updateUserResumeData,
} from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import {
  useGetUserResumeInfoQuery,
  useCreateUserResumeSkillsMutation,
  // useGetUserResumeSkillsQuery,
} from "../../store/slices/resumeDetailsSlice/apiSlice";
import { useGetAllSkillsQuery } from "../../store/slices/skilSlice/apiSlice";
import { getSkills } from "../../store/slices/skilSlice/skillSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store";
import { IUserSkill, ISkill } from "../../dto/skill.dto";
import { useNavigate } from "react-router-dom";

function SkillsPage() {
  const { data , refetch} = useGetUserResumeInfoQuery();
  const dispatch = useAppDispatch();
  const [createUserResumeSkills] = useCreateUserResumeSkillsMutation();
  const { data: allSkills } = useGetAllSkillsQuery();
  const navigate = useNavigate();
  const [showFormFields, setShowFormFields] = useState<boolean>(true);

  const resumeDetailsSlice = useAppSelector(
    (state: RootState) => state.resumeDetailsSlice
  );

  const { skills } = useAppSelector((state: RootState) => state.skillSlice);

  const formik = useFormik({
    initialValues: {
      skillId: "",
      proficiencyLevel: "",
    },
    validationSchema: Yup.object({
      skillId: Yup.string().required("Skill Name is required"),
      proficiencyLevel: Yup.string().required("Proficiency Level is required"),
    }),
    onSubmit: (values) => {
      createUserResumeSkills({
        ...values,
        userId: resumeDetailsSlice.user._id,
        key: "skills",
      }).then(() => {
        dispatch(updateUserResumeData({ values }));
        refetch()
      });
    },
  });

  useEffect(() => {
    if (resumeDetailsSlice?.skills?.length) {
      setShowFormFields(false);
    }
  }, [resumeDetailsSlice]);

  useEffect(() => {
    if (allSkills?.skills) {
      dispatch(getSkills(allSkills?.skills));
    }
  }, [allSkills]);

  useEffect(() => {
    if (data?.data) {
      dispatch(getUserResumeData(data?.data));
    }
  }, [data, dispatch]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-10">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8">
          <h1 className="text-4xl font-extrabold text-white">
            Let’s talk about your skills
          </h1>
          <p className="text-gray-200 mt-2">
            Highlight your strengths and key skills relevant to the job you’re
            applying for.
          </p>
        </div>
        <div className="p-6">
          {resumeDetailsSlice?.skills &&
            Array.isArray(resumeDetailsSlice?.skills) &&
            !showFormFields &&
            resumeDetailsSlice?.skills.map(
              (skill: IUserSkill, index: string) => (
                <div
                  key={index}
                  className="shadow-lg p-6 rounded-lg bg-white border border-gray-200 mb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Institute Name
                      </label>
                      <p className="text-lg font-semibold text-teal-600">
                        {typeof skill.skillId === "object"
                          ? skill.skillId.name
                          : skill.skillId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold mb-1">
                        Proficiency Level
                      </label>
                      <p className="text-lg font-semibold text-teal-600">
                        {skill.proficiencyLevel}
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
                    Skill
                  </label>
                  <select
                    name="skillId"
                    value={formik.values.skillId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.skillId && formik.errors.skillId
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                  >
                    <option value={""}>Select</option>
                    {skills.map((skill: ISkill, key: string) => (
                      <option key={key} value={skill._id}>
                        {skill.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.skillId && formik.errors.skillId && (
                    <p className="text-red-500 mt-1">{formik.errors.skillId}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Proficiency Level
                  </label>
                  <select
                    name="proficiencyLevel"
                    value={formik.values.proficiencyLevel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-2 p-3 rounded-md ${
                      formik.touched.proficiencyLevel &&
                      formik.errors.proficiencyLevel
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:border-teal-400`}
                  >
                    <option value={""}>Select</option>
                    <option value={"beginner"}>Beginner</option>
                    <option value={"intermediate"}>Intermediate</option>
                    <option value={"advanced"}>Advanced</option>
                    <option value={"expert"}>Expert</option>
                  </select>
                  {formik.touched.proficiencyLevel &&
                    formik.errors.proficiencyLevel && (
                      <p className="text-red-500 mt-1">
                        {formik.errors.proficiencyLevel}
                      </p>
                    )}
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    Save Skill
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
                    navigate(`/build-resume/additional-details`);
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

export default SkillsPage;
