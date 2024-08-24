import { icons } from "../../../Icons/constant";
const { CiZoomIn, CiZoomOut, MdOutlineZoomInMap } = icons;
function ZoomTools({
  zoomIn,
  zoomOut,
  resetZoom,
  zoomLevel,
}: {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  zoomLevel: number;
}) {
  return (
    <div className="flex items-center">
      <button
        onClick={zoomOut}
        className="py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
      >
        <CiZoomOut />
      </button>
      <input className="px-2" value={`${Math.round(zoomLevel * 100)}%`} />
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
