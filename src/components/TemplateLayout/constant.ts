export const pixelsToCm = (pixels, dpi = 5.7) => {
  return (pixels / dpi) * 2.54;
};
