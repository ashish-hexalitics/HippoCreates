import { useEffect } from "react";
import { useGetUserCompletionStatusQuery } from "../../store/slices/resumeDetailsSlice/apiSlice";
import { useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Common/Loader/index";

function CheckProfileStatus() {
  const navigate = useNavigate();
  const { isLoading } = useGetUserCompletionStatusQuery();

  const resumeDetailsSlice = useAppSelector(
    (state: RootState) => state.resumeDetailsSlice
  );

  useEffect(() => {
    const resume = resumeDetailsSlice.step.filter((res: any) => !res.completed);
    if (resume && resume.length > 0 && !isLoading) {
      navigate(`/${resume[0].route}`);
    }
  }, [resumeDetailsSlice, isLoading]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-10">
      <Loading />
    </div>
  );
}

export default CheckProfileStatus;
