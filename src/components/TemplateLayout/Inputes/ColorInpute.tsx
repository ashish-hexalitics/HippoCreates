import React from "react";

function ColorInpute({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="color"
      name={name}
      className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
      value={value}
      onChange={onChange}
    />
  );
}

export default ColorInpute;
