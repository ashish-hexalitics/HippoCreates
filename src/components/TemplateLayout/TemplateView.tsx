import { pixelsToCm } from "./constant";

const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function TemplateView({ template }: any) {

  const sanitizedDocument = template.document.replace(
    /contenteditable\s*=\s*["]?true["]?/gi,
    "contentEditable='false'"
  );

  return (
    <div
      style={{ transform: "scale(1)", transformOrigin: "top left" }}
      className="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center  border-[#ddd] border-2 relative p-2"
    >
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
        className="border border-gray-300 bg-white relative overflow-hidden  hover:border-blue-500"
        style={{
          width: `${a4Portrait.width}px`,
          height: `${a4Portrait.height}px`,
          position: "relative",
          overflowY: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}

export default TemplateView;
