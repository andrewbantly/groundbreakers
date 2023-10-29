/**
 * Custom Theme Configuration for Chakra UI
 *
 * Overview:
 * This custom theme for Chakra UI extends the default theme with specific breakpoints, font settings, color schemes, and global styles to provide a consistent and tailored aesthetic across the application.
 *
 * Breakpoints:
 * - 'sm': 360px for small mobile devices.
 * - 'md': 768px for tablets and small desktops.
 * - 'lg': 1024px for large tablets and medium desktops.
 * - 'xl': 1280px for large desktops.
 * - '2xl': 1536px for extra-large desktops and monitors.
 * These breakpoints ensure responsive design and fluidity for different screen sizes.
 *
 * Fonts:
 * The theme specifies 'Istok Web' and 'Rajdhani' as the primary font families for headings and body text, enhancing the textual clarity and overall readability.
 *
 * Colors:
 * - 'brand': A series of color shades (900, 800, 700) to provide a cohesive branding palette.
 * - 'background': A light background color to maintain visual comfort and content legibility.
 * Additional colors can be added to the palette to suit specific design requirements.
 *
 * Global Styles:
 * - The 'body' style sets a consistent background and text color across the website.
 * - The 'a' (anchor) style defines the default and hover states for all hyperlink elements,
 * enhancing the interactive experience without underlines on hover to keep a clean visual.
 */

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
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
