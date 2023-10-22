import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Istok Web', 'Rajdhani', sans-serif",
    body: "'Istok Web', 'Rajdhani', sans-serif",
  },
  colors: {
    brand: {
      900: "#1a365d",  // Replace with your actual color code
      800: "#153e75",  // Replace with your actual color code
      700: "#2a69ac",  // Replace with your actual color code
    },
    // Add more color ranges or individual colors as needed
    background: "#f0f0f0", // Replace with your actual color code for background
  },
  // You can also set global styles
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "background", // use the color key in `theme.colors`
        color: "black",  // Replace with your actual color code for text color
      },
      // styles for the `a`
      a: {
        color: "brand.700", // use the color key in `theme.colors`
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
