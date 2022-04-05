export const videoToImageURL = (videoElm: HTMLVideoElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = videoElm.videoWidth;
  canvas.height = videoElm.videoHeight;
  const context = canvas.getContext("2d");
  context?.drawImage(videoElm, 0, 0, videoElm.videoWidth, videoElm.videoHeight);
  return canvas.toDataURL();
};
