import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { publicPath } from "../publicPath";
import { NoWrap } from "./NoWrap";

export const Advertisement = () => (
  <Container mt="4">
    <Flex
      backgroundColor="whiteAlpha.800"
      p="4"
      borderRadius="lg"
      alignItems="center"
    >
      <Box width="40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={publicPath("freee_logo_rainbow_M.png")}
          alt="freee レインボーロゴ"
        />
      </Box>
      <Box>
        <Text fontSize="small">
          <NoWrap>freee株式会社では、</NoWrap>
          <NoWrap>すべての人がじぶんらしく、</NoWrap>
          <br />
          <NoWrap>自然体に活躍できる</NoWrap>
          <NoWrap>世界を目指しています。</NoWrap>
        </Text>
        <HStack mt="2">
          <Button
            as="a"
            href="https://corp.freee.co.jp/"
            variant="outline"
            size="sm"
            colorScheme="gray"
            target="_blank"
            rel="noopener noreferer"
          >
            会社概要
          </Button>
          <Button
            as="a"
            href="https://jobs.freee.co.jp/"
            variant="outline"
            size="sm"
            colorScheme="gray"
            target="_blank"
            rel="noopener noreferer"
          >
            採用情報
          </Button>
        </HStack>
      </Box>
    </Flex>
  </Container>
);
