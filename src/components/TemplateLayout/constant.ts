export const pixelsToCm = (pixels:number, dpi = 5.7) => {
  return (pixels / dpi) * 2.54;
};
