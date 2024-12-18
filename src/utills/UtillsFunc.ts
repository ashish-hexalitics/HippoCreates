export const getPaddingOptions = (paddingPix:string) => {
  return [
    {
      value: { paddingTop: paddingPix },
      label: "Padding Top",
    },
    {
      value: { paddingLeft: paddingPix },
      label: "Padding Left",
    },
    {
      value: { paddingRight: paddingPix },
      label: "Padding Right",
    },
    {
      value: { paddingBottom: paddingPix },
      label: "Padding Bottom",
    },
    {
      value: {
        paddingTop: paddingPix,
        paddingLeft: paddingPix,
      },
      label: "Padding Top Left",
    },
    {
      value: {
        paddingBottom: paddingPix,
        paddingLeft: paddingPix,
      },
      label: "Padding Top Right",
    },
    {
      value: {
        paddingRight: paddingPix,
        paddingTop: paddingPix,
      },
      label: "Padding Right Top",
    },
    {
      value: {
        paddingBottom: paddingPix,
        paddingRight: paddingPix,
      },
      label: "Padding Bottom Right",
    },
    {
      value: { padding: paddingPix },
      label: "Padding All",
    },
  ];
};
