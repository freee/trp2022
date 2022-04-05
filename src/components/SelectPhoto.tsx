import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import { loadImage } from "../loadImage";

const toSquareImage = async (imageURL: string, size = 1080) => {
  const img = await loadImage(imageURL);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const zoom = size / Math.min(img.naturalHeight, img.naturalWidth);
  const context = canvas.getContext("2d");
  context?.drawImage(
    img,
    (zoom *
      (Math.min(img.naturalHeight, img.naturalWidth) - img.naturalWidth)) /
      2,
    (zoom *
      (Math.min(img.naturalHeight, img.naturalWidth) - img.naturalHeight)) /
      2,
    zoom * img.naturalWidth,
    zoom * img.naturalHeight
  );
  return canvas.toDataURL();
};
export const SelectPhoto = ({
  onPhotoSelected,
}: {
  onPhotoSelected: (imageURL: string) => void;
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        onClick={() => {
          inputRef.current?.click();
        }}
        variant="secondary"
      >
        写真を選択
      </Button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            const file = files[0];
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              (async () => {
                if (typeof reader.result === "string") {
                  onPhotoSelected(await toSquareImage(reader.result));
                }
              })();
            });
            if (file) {
              reader.readAsDataURL(file);
            }
          }
        }}
      />
    </>
  );
};
