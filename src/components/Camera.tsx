import { useContext, useEffect, useRef, useState } from "react";
import {
  AspectRatio,
  Button,
  Box,
  Center,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { FrameSelect } from "./FrameSelect";
import { FrameContext } from "../FrameContext";
import { publicPath } from "../publicPath";
import { SelectPhoto } from "./SelectPhoto";
import { videoToImageURL } from "../videoToImageURL";
import { useBrowser } from "../useBrowser";
type FacingModeValue = "user" | "environment";

export const Camera = ({
  onPhotoTaken,
}: {
  onPhotoTaken: (imageURL: string) => void;
}): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [devices, setDevices] = useState<Array<MediaDeviceInfo>>([]);
  const [deviceIndex, setDeviceIndex] = useState<number>(0);
  const deviceIdRef = useRef<string>("");
  const { isIOS } = useBrowser();
  const [facingMode, setFacingMode] = useState<FacingModeValue>("user");
  const { currentFrame } = useContext(FrameContext);
  const [videoProhibited, setVideoProhibited] = useState<boolean>(false);
  const [videoAvailable, setVideoAvailable] = useState<boolean>(false);
  const [photoTaken, setPhotoTaken] = useState<boolean>(false);

  const setCameraByDeviceId = async (deviceId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          deviceId: deviceId,
          width: { ideal: 1920, min: 480 },
          height: { ideal: 1080, min: 480 },
        },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      deviceIdRef.current = deviceId;
      setVideoAvailable(true);
    } catch {
      setVideoProhibited(true);
    }
  };
  const setCameraByFacingMode = async (mode: FacingModeValue) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: mode,
          width: { ideal: 1920, min: 480 },
          height: { ideal: 1080, min: 480 },
        },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setVideoAvailable(true);
    } catch {
      setVideoProhibited(true);
    }
  };

  const retryRef = useRef<boolean>(false);
  const updateDevices = async () => {
    if (navigator.mediaDevices?.enumerateDevices) {
      const videoDevices = (
        await navigator.mediaDevices.enumerateDevices()
      ).filter((device) => device.kind === "videoinput");
      setDevices(videoDevices);
    } else {
      setDevices([]);
    }
  };

  useEffect(() => {
    updateDevices();
    navigator.mediaDevices?.addEventListener("devicechange", updateDevices);
    return () => {
      navigator.mediaDevices?.removeEventListener(
        "devicechange",
        updateDevices
      );
    };
  }, []);

  useEffect(() => {
    if (devices.length > 0) {
      const currentIdx = devices.findIndex(
        (d) => d.deviceId === deviceIdRef.current
      );
      const idx = currentIdx >= 0 ? currentIdx : 0;
      const device = devices[idx];
      setDeviceIndex(idx);
      (async () => {
        await setCameraByDeviceId(device.deviceId);
        // retry getting devices if device id is empty
        if (!device.deviceId && !retryRef.current) {
          retryRef.current = true;
          updateDevices();
        } else {
          retryRef.current = false;
        }
      })();
    } else {
      setVideoProhibited(true);
    }
  }, [devices]);

  return (
    <>
      <Stack>
        <Box
          w="100%"
          position="relative"
          overflow="hidden"
          background="whiteAlpha.800"
          borderRadius="lg"
        >
          <AspectRatio width="100%" ratio={1} opacity={videoAvailable ? 1 : 0}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              style={{}}
              playsInline
              autoPlay
              ref={videoRef}
              onPlay={() => {
                setVideoAvailable(true);
              }}
              onSuspend={() => {
                setVideoAvailable(false);
                setVideoProhibited(true);
              }}
            />
          </AspectRatio>
          {videoAvailable ? (
            <>
              <Box inset={0} position="absolute">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={publicPath(currentFrame.path)} alt="" />
              </Box>
              <Box
                inset={0}
                position="absolute"
                borderRadius="lg"
                overflow="hidden"
                pointerEvents="none"
                backgroundColor="#fff"
                opacity={photoTaken ? 1 : 0}
                transitionProperty="opacity"
                transitionDuration="0.2s"
                aria-hidden="true"
              ></Box>
            </>
          ) : (
            <AspectRatio ratio={1} inset={0} position="absolute">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Center>
                <VStack>
                  {videoProhibited ? (
                    <Text>?????????????????????????????????????????????</Text>
                  ) : (
                    <Text>???????????????????????????</Text>
                  )}
                  <SelectPhoto onPhotoSelected={onPhotoTaken} />
                  <Button
                    variant="ghost"
                    colorScheme="brand"
                    onClick={updateDevices}
                  >
                    ????????????
                  </Button>
                </VStack>
              </Center>
            </AspectRatio>
          )}
          {videoAvailable && (devices.length >= 2 || isIOS) && (
            <Box
              position="absolute"
              bottom={2}
              left="0"
              borderRadius="lg"
              width="100%"
            >
              <Center>
                <Button
                  m={1}
                  colorScheme="brand"
                  variant="skeleton"
                  onClick={() => {
                    if (isIOS) {
                      setCameraByFacingMode(
                        facingMode === "user" ? "environment" : "user"
                      );
                      setFacingMode(
                        facingMode === "user" ? "environment" : "user"
                      );
                    } else if (deviceIndex < devices.length - 1) {
                      setDeviceIndex(deviceIndex + 1);
                      setCameraByDeviceId(devices[deviceIndex + 1].deviceId);
                    } else {
                      setDeviceIndex(0);
                      setCameraByDeviceId(devices[0].deviceId);
                    }
                  }}
                >
                  ??????????????????
                </Button>
              </Center>
            </Box>
          )}
        </Box>

        {videoAvailable && (
          <Button
            colorScheme="brand"
            onClick={() => {
              if (videoRef.current) {
                const url = videoToImageURL(videoRef.current);
                new Image().src = url;
                setPhotoTaken(true);
                setTimeout(() => onPhotoTaken(url), 200);
              }
            }}
          >
            ???????????????
          </Button>
        )}
        {videoAvailable && <SelectPhoto onPhotoSelected={onPhotoTaken} />}
        {videoAvailable && <FrameSelect />}
      </Stack>
    </>
  );
};
