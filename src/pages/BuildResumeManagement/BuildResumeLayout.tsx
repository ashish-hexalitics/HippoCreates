import { useEffect } from "react";
import MainContent from "../../components/UtilizerLayout/MainContent";
import StepBar from "../../components/UtilizerLayout/StepBar";
import { Route, Routes } from "react-router-dom";
import { utilizerRoutes } from "../../routes/routes";
import {
  useGetUserResumeInfoQuery,
  useGetUserCompletionStatusQuery,
} from "../../store/slices/resumeDetailsSlice/apiSlice";
import {
  getUserResumeData,
  updateUserResumeData,
} from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import { useAppDispatch } from "../../store/hooks";

function BuildResumeLayout() {
  const dispatch = useAppDispatch();
  const { data } = useGetUserResumeInfoQuery();
  const { data: completionStatusData } = useGetUserCompletionStatusQuery();

  useEffect(() => {
    if (data?.data) {
      dispatch(getUserResumeData(data?.data));
    }
    if (completionStatusData?.completionStatus) {
      console.log(completionStatusData?.completionStatus);
      // key: "step",
      dispatch(
        updateUserResumeData({
          step: completionStatusData?.completionStatus,
        })
      );
    }
  }, [data, completionStatusData]);

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="w-full h-full flex flex-col sm:flex-col md:flex-row lg:flex-row">
        <StepBar />
        <Routes>
          {utilizerRoutes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <MainContent>
                  <Component />
                </MainContent>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default BuildResumeLayout;
