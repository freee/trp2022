import { useEffect, useState } from "react";

export const useBrowser = () => {
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [shareAvailable, setShareAvailable] = useState<boolean>(false);
  const [clipboardWriteTextAvailable, setClipboardWriteTextAvailable] =
    useState<boolean>(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (
      ua.indexOf("iPhone") >= 0 ||
      ua.indexOf("iPad") >= 0 ||
      ua.indexOf("iPod") >= 0
    ) {
      setIsIOS(true);
    }
    if ("share" in navigator) {
      setShareAvailable(true);
    }
    if ("clipboard" in navigator && "writeText" in navigator.clipboard) {
      setClipboardWriteTextAvailable(true);
    }
  }, []);
  return { isIOS, shareAvailable, clipboardWriteTextAvailable };
};
