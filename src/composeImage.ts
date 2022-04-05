import { loadImage } from "./loadImage";

export const composeImage = async (
  sources: string[],
  type?: string,
  quality?: number,
  canvas?: HTMLCanvasElement
) => {
  const myCanvas = canvas || document.createElement("canvas");
  const images = await Promise.all(sources.map((source) => loadImage(source)));
  if (images.length > 0) {
    const size = images.reduce<number>(
      (prev, current) =>
        Math.min(prev, current.naturalWidth, current.naturalHeight),
      Math.min(images[0].naturalHeight, images[0].naturalWidth)
    );
    myCanvas.width = size;
    myCanvas.height = size;
    const context = myCanvas.getContext("2d");
    images.forEach((image) => {
      const ratio = size / Math.min(image.naturalWidth, image.naturalHeight);
      context?.drawImage(
        image,
        (size - ratio * image.naturalWidth) / 2,
        (size - ratio * image.naturalHeight) / 2,
        ratio * image.naturalWidth,
        ratio * image.naturalHeight
      );
    });
  }
  return myCanvas.toDataURL(type, quality);
};
