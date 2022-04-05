import { extendTheme } from "@chakra-ui/react";
const colors = {
  brand: {
    100: "#ebf3ff",
    200: "#dce8ff",
    300: "#aac8ff",
    400: "#73a5ff",
    500: "#2864f0",
    600: "#3264dc",
    700: "#285ac8",
    800: "#1e46aa",
    900: "#23418c",
  },
};

export const theme = extendTheme({
  colors,
  components: {
    Button: {
      variants: {
        secondary: {
          color: "brand.700",
          border: "1px",
          borderColor: "brand.700",
          backgroundColor: "#ffffff",
          _hover: {
            backgroundColor: "brand.100",
          },
        },
        skeleton: {
          color: "brand.700",
          border: "1px",
          borderColor: "brand.700",
          backgroundColor: "whiteAlpha.700",
          _hover: {
            backgroundColor: "brand.100",
          },
        },
      },
    },
  },
});
