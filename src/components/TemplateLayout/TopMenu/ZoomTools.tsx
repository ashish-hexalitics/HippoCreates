import { icons } from "../../../Icons/constant";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
const { CiZoomIn, CiZoomOut, MdOutlineZoomInMap } = icons;
import { zoomInAndOut } from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";
function ZoomTools() {
  const dispatch = useAppDispatch();
  const {
    configration: { zoomLevel },
  } = useAppSelector((state) => state.resumeDetailSlice);

  const zoomIn = () => {
    dispatch(zoomInAndOut(zoomLevel + 0.1));
  };

  const zoomOut = () => {
    dispatch(zoomInAndOut(zoomLevel - 0.1));
  };

  const resetZoom = () => {
    dispatch(zoomInAndOut(1));
  };

  
  return (
    <div className="flex items-center">
      <button
        onClick={zoomOut}
        className="py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
      >
        <CiZoomOut />
      </button>
      <input
        className="px-2 disabled:bg-gray-300 w-20"
        value={`${Math.round(zoomLevel * 100)}%`}
        disabled
      />
      <button
        onClick={zoomIn}
        className="py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
      >
        <CiZoomIn />
      </button>
      <button
        onClick={resetZoom}
        className="ml-2 py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
      >
        <MdOutlineZoomInMap />
      </button>
    </div>
  );
}

export default ZoomTools;
