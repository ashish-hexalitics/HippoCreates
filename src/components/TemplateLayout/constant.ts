export const pixelsToCm = (pixels: number, dpi = 5.7) => {
  return (pixels / dpi) * 6;
};

interface IfilterStyles {
  None: string;
  Noir: string;
  Gray: string;
  Vintage: string;
  Bright: string;
  Dynamic: string;
  Faded: string;
  Vibrant: string;
}

export const filterStyles: IfilterStyles | any = {
  None: "none",
  Noir: "grayscale(100%)",
  Gray: "grayscale(50%)",
  Vintage: "sepia(50%)",
  Bright: "brightness(150%)",
  Dynamic: "contrast(125%)",
  Faded: "opacity(75%)",
  Vibrant: "saturate(150%)",
};

export const shadowStyles: Record<string, string> = {
  None: "none",
  Soft: "5px 5px 10px rgba(0,0,0,0.15)",
  Regular: "5px 5px 15px rgba(0,0,0,0.3)",
  Retro: "5px 5px 20px rgba(0,0,0,0.5)",
};
