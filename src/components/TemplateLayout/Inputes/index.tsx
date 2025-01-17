import React from "react";
import ColorInpute from "./ColorInpute";
import TextInpute from "./TextInpute";
import NumberInpute from "./NumberInpute";

function InputComponent({
  type,
  name,
  value,
  onChange,
  label,
}: {
  type: string;
  name: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const renserInput = () => {
    switch (type) {
      case "color":
        return <ColorInpute name={name} value={value} onChange={onChange} />;
      case "text":
        return <TextInpute name={name} value={value} onChange={onChange} />;
      case "number":
        return <NumberInpute name={name} value={value} onChange={onChange} />;
      default:
        return <p className="text-red-300 font-bold">Invalid type</p>;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
      <label className="text-sm font-semibold text-gray-700">{label}:</label>
      {renserInput()}
    </div>
  );
}

export default InputComponent;
