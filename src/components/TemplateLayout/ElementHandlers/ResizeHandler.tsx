// import React from "react";
const resizeElement = (
  <>
    <div className="react-resizable-handle react-resizable-handle-se"></div>
    <div className="react-resizable-handle react-resizable-handle-sw"></div>
    <div className="react-resizable-handle react-resizable-handle-nw"></div>
    <div className="react-resizable-handle react-resizable-handle-ne"></div>
    <div className="react-resizable-handle react-resizable-handle-n"></div>
    <div className="react-resizable-handle react-resizable-handle-s"></div>
    <div className="react-resizable-handle react-resizable-handle-e"></div>
    <div className="react-resizable-handle react-resizable-handle-w"></div>
    <div className="react-resizable-handle-border"></div>
  </>
);

function ResizeHandler({ content }: { content: string }) {
  switch (content) {
    case "Text":
      return (
        <>
          <div className="react-resizable-handle react-resizable-handle-e"></div>
          <div className="react-resizable-handle react-resizable-handle-w"></div>
          <div className="react-resizable-handle-border"></div>
        </>
      );

    case "rectangle":
    case "circle":
      return resizeElement

    default:
      return renderResize(content);
  }
}

export default ResizeHandler;

const renderResize = (content: string) => {
  if (content.startsWith("data:image/")) {
    return resizeElement;
  } else {
    return null;
  }
};
