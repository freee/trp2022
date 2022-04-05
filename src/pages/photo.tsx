import {
  Button,
  Center,
  Container,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";
import { Advertisement } from "../components/Advertisement";
import { Camera } from "../components/Camera";
import { Preview } from "../components/Preview";
import { FrameContextProvider } from "../FrameContext";

const CAMERA_STAGE = 0;
const PREVIEW_STAGE = 1;

const stages = {
  CAMERA_STAGE: 0,
  PREVIEW_STAGE: 1,
} as const;

const Photo: NextPage = () => {
  const [stage, setStage] =
    useState<typeof stages[keyof typeof stages]>(CAMERA_STAGE);
  const [imageURL, setImageURL] = useState<string>("");
  const headRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Head>
        <title>写真を撮る - TRP2022 Photo Booth by freee</title>
      </Head>
      <main>
        <VisuallyHidden>
          <h1 aria-live="polite" aria-atomic="true" ref={headRef}>
            {stage === CAMERA_STAGE && "写真を撮りましょう"}
            {stage === PREVIEW_STAGE && "フレームを選んでSNSに投稿しましょう"}
          </h1>
        </VisuallyHidden>
        <Container mt="4">
          <Stack>
            <FrameContextProvider>
              {stage === CAMERA_STAGE && (
                <Camera
                  onPhotoTaken={(imageURL) => {
                    setImageURL(imageURL);
                    setStage(PREVIEW_STAGE);
                  }}
                />
              )}
              {stage === PREVIEW_STAGE && (
                <Preview
                  imageURL={imageURL}
                  onBack={() => setStage(CAMERA_STAGE)}
                />
              )}
            </FrameContextProvider>
          </Stack>
        </Container>
      </main>
      <aside>
        <Advertisement />
      </aside>
      <nav>
        <Center mt="2">
          <Link href="/" passHref>
            <Button as="a" variant="skeleton" colorScheme="brand" border="0">
              最初の画面に戻る
            </Button>
          </Link>
        </Center>
      </nav>
    </>
  );
};

export default Photo;
