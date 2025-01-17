import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { zoomInAndOut } from "../../store/slices/resumeTemplateSlice/resumeDetailSlice";

const ZoomSlider = () => {
  const dispatch = useAppDispatch();
  const { configration } = useAppSelector((state) => state.resumeDetailSlice);

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(zoomInAndOut(parseFloat(e.target.value)));
  };
  return (
    <>
      <div
        style={{ height: "60px" }}
        className="absolute bottom-0 left-0 w-full p-4 bg-gray-200 flex justify-center"
      >
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={configration.zoomLevel}
          onChange={handleZoomChange}
          className="w-3/4"
        />
      </div>
    </>
  );
};

export default ZoomSlider;
