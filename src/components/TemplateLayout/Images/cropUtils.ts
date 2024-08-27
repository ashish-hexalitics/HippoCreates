// cropUtils.js
export const getCroppedImg = (imageSrc: string, crop: any) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const { width, height } = crop;
  
        canvas.width = width;
        canvas.height = height;
  
        ctx.drawImage(
          image,
          crop.x,
          crop.y,
          width,
          height,
          0,
          0,
          width,
          height
        );
  
        resolve(canvas.toDataURL('image/jpeg'));
      };
    });
  };
  