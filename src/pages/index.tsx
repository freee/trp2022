import {
  Button,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { publicPath } from "../publicPath";
import { NoWrap } from "../components/NoWrap";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Head>
          <title>TRP2022 Photo Booth by freee</title>
        </Head>
        <Container>
          <Stack spacing="8" mt="12">
            <Heading as="h1" color="brand.500" textShadow="0 0 3px #fff">
              <Text align="center">TRP2022 Photo Booth </Text>
              <Text align="center" fontSize="2xl">
                by freee
              </Text>
            </Heading>

            <Box
              pr="2"
              pl="2"
              pt="4"
              pb="4"
              background="whiteAlpha.800"
              borderRadius="xl"
            >
              <Center>
                <Box maxWidth="80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={publicPath("freee_logo_rainbow_L.png")}
                    alt="freee レインボーロゴ"
                  />
                </Box>
              </Center>
              <Text align="center" fontSize="xs" color="gray.700">
                <NoWrap>freeeは</NoWrap>
                <NoWrap>「スモールビジネスを、世界の主役に。」</NoWrap>
                <NoWrap>というミッションを実現していくために、</NoWrap>
                <NoWrap> 「解放」「自然体」「ちょっとした楽しさ」を</NoWrap>
                <NoWrap>届けることで、</NoWrap>
                <NoWrap>スモールビジネスに携わる</NoWrap>
                <NoWrap>すべての人を</NoWrap>
                <NoWrap>「自由」にしていきます。</NoWrap>
              </Text>
              <Text align="center" mt="8" fontWeight="bold">
                <NoWrap>自然体でTRP2022を</NoWrap>
                <NoWrap>楽しんでいる</NoWrap>
                <NoWrap>あなたのいまの姿を</NoWrap>
                <NoWrap>SNSに投稿しましょう。</NoWrap>
              </Text>

              <Center mt="4">
                <Link href="/photo" passHref>
                  <Button colorScheme="brand" as="a">
                    写真を撮る
                  </Button>
                </Link>
              </Center>
              <Text fontSize="sm" align="center" mt="4">
                次の画面に移動したら、
                <wbr />
                カメラの使用を「許可」してください。
              </Text>
            </Box>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default Home;
