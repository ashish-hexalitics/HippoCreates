const GuideLines = ({ guideLines }: { guideLines: React.ComponentState }) => {
  return (
    <>
      {guideLines.x !== null && (
        <div
          className="absolute bg-blue-500"
          style={{
            left: `${guideLines.x}px`,
            top: 0,
            width: "2px",
            height: "100%",
            zIndex: 10,
          }}
        />
      )}
      {guideLines.y !== null && (
        <div
          className="absolute bg-blue-500"
          style={{
            top: `${guideLines.y}px`,
            left: 0,
            width: "100%",
            height: "2px",
            zIndex: 10,
          }}
        />
      )}
    </>
  );
};

export default GuideLines;