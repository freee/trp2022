import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FrameContext, Frames } from "../FrameContext";
import { publicPath } from "../publicPath";

export const FrameSelect = () => {
  const { currentFrame, dispatch } = useContext(FrameContext);

  return (
    <>
      <Box
        as="ul"
        display="flex"
        backgroundColor="whiteAlpha.800"
        borderRadius="lg"
        overflowX="auto"
        p="2"
        flexWrap="nowrap"
        listStyleType="none"
      >
        {Frames.map((f, i) => (
          <Box
            as="li"
            key={i}
            m="2"
            borderColor={
              currentFrame.path === f.path ? "brand.400" : "gray.200"
            }
            background="#fff"
            borderStyle="solid"
            borderWidth="1px"
            borderRadius="lg"
            p="2"
          >
            <Box
              as="button"
              aria-pressed={currentFrame.path === f.path}
              onClick={() => dispatch({ type: "set", frame: f })}
            >
              <Box width="32" height="32" background="gray.300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${publicPath(f.thumbnail)}`} alt={f.name} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
