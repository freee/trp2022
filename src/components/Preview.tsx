import {
  AspectRatio,
  Box,
  Button,
  Center,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FrameContext } from "../FrameContext";
import { publicPath } from "../publicPath";
import { composeImage } from "../composeImage";
import { FrameSelect } from "./FrameSelect";
import { useBrowser } from "../useBrowser";
import { NoWrap } from "./NoWrap";

const IMAGE_SIZE = 1080;

export const Preview = ({
  imageURL,
  onBack,
}: {
  imageURL: string;
  onBack: () => void;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [editedURL, setEditedURL] = useState("");
  const { currentFrame } = useContext(FrameContext);
  const path = currentFrame.path;
  const { isIOS, shareAvailable, clipboardWriteTextAvailable } = useBrowser();
  const toast = useToast();

  useEffect(() => {
    (async () => {
      setEditedURL(
        await composeImage(
          [imageURL, publicPath(path)],
          "image/jpeg",
          0.9,
          canvasRef.current || undefined
        )
      );
    })();
  }, [imageURL, path]);
  return (
    <>
      <Stack>
        <Box position="relative">
          <AspectRatio
            maxW="100%"
            ratio={1}
            borderRadius="lg"
            overflow="hidden"
            aria-hidden="true"
          >
            <Box
              position="relative"
              background="#fff"
              pointerEvents="none"
              transitionProperty="opacity"
              transitionDuration="0.2s"
            ></Box>
          </AspectRatio>
          {editedURL && (
            <AspectRatio
              maxW="100%"
              ratio={1}
              borderRadius="lg"
              overflow="hidden"
              position="absolute"
              inset="0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element  */}
              <img src={editedURL} alt="撮影した写真" />
            </AspectRatio>
          )}
          <Box position="absolute" top={2} left={2} borderRadius="lg">
            <Button
              m={1}
              colorScheme="brand"
              variant="skeleton"
              onClick={onBack}
            >
              カメラに戻る
            </Button>
          </Box>
        </Box>
        <FrameSelect />
        <Box p="4" background="rgba(255,255,255,0.8)" borderRadius="xl">
          <Stack>
            <Text align="center" fontSize="sm">
              <NoWrap>ハッシュタグ</NoWrap>
              <NoWrap>
                {clipboardWriteTextAvailable ? (
                  <Link
                    as="button"
                    onClick={async () => {
                      await navigator.clipboard.writeText(
                        " #TRP2022 #TRP2022_freee"
                      );
                      toast({
                        position: "bottom",
                        title: "ハッシュタグをコピーしました",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                    }}
                  >
                    <strong>#TRP2022 #TRP2022_freee</strong>
                  </Link>
                ) : (
                  <strong>#TRP2022 #TRP2022_freee</strong>
                )}
              </NoWrap>
              <NoWrap>をつけて、</NoWrap>
              <NoWrap>写真をSNSにシェアしよう！</NoWrap>
            </Text>
            {isIOS && (
              <Text fontSize="xs" align="center">
                <NoWrap>写真を長押し→保存して、</NoWrap>
                <NoWrap>ハッシュタグをつけて投稿しよう</NoWrap>
              </Text>
            )}
            <Center>
              {shareAvailable && !isIOS ? (
                <Button
                  colorScheme="brand"
                  onClick={() => {
                    if (canvasRef.current) {
                      canvasRef.current.toBlob(
                        (blob) => {
                          if (!blob) {
                            return;
                          }
                          const file = new File([blob], "photo.jpg", {
                            type: "image/jpeg",
                          });
                          navigator.share({
                            text: " #TRP2022 #TRP2022_freee ",
                            files: [file],
                          });
                        },
                        "image/jpeg",
                        0.9
                      );
                    }
                  }}
                >
                  写真をSNSにシェア
                </Button>
              ) : (
                <Button
                  as="a"
                  href="https://twitter.com/intent/tweet?text=%20%23TRP2022%20%23TRP2022_freee%20"
                  colorScheme="twitter"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Twitterに投稿
                </Button>
              )}
            </Center>
          </Stack>
        </Box>
        {editedURL && !isIOS && (
          <Button
            colorScheme="brand"
            variant="secondary"
            onClick={() => {
              if (canvasRef.current) {
                const a = document.createElement("a");
                a.href = editedURL;
                a.download = "photo.jpg";
                a.click();
              }
            }}
          >
            写真を保存
          </Button>
        )}
      </Stack>
      <canvas
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        ref={canvasRef}
        style={{ display: "none" }}
      ></canvas>
    </>
  );
};
