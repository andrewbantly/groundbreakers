/**
 * Header Component
 * 
 * Purpose:
 * The Header component provides the primary navigation for the website, allowing users to jump to different content sections within a single-page application. It features both a traditional navigation bar for larger screens and a collapsible drawer for smaller screens, adapting responsively to the viewport size. The Header also includes the company name and licensing information, giving it a central role in branding and user trust.
 *
 * Structure:
 * - Contains a top-level Box element that sets the visual styling of the Header including background color, text color, and box shadow.
 * - Uses a Flex container to organize the heading and navigation links horizontally, adjusting for different screen sizes.
 * - Implements an IconButton that toggles a Drawer component for small screens, which contains the same navigation links found on larger screens.
 * - Uses Chakra UI's `useDisclosure` hook to manage the open/close state of the Drawer.
 * - The useEffect hook handles auto-scrolling to page sections based on the URL hash, improving the user experience by bringing the desired content into view.
 *
 * Accessibility Considerations:
 * - The Header must ensure that all navigational elements are accessible, including keyboard navigability and screen reader support.
 * - Semantic HTML elements such as `<nav>` for navigation and `<heading>` for titles can be used to enhance accessibility.
 * - ARIA attributes should be used where necessary to denote the role of elements, particularly for the collapsible navigation drawer.
 * - Focus management is crucial, especially after closing the drawer menu, to ensure that the focus returns to the appropriate element.
 *
 * Usage:
 * This Header component is intended to be placed at the top of each webpage, serving as the first point of interaction for users navigating the site's content. It provides consistent branding and navigation across different views.
 *
 * Notes:
 * - The use of React Router's `Link` with Chakra UI's styling options allows for seamless integration of SPA navigation with custom styling.
 * - The responsive design is achieved through Chakra UI's responsive style props and display properties, ensuring the navigation adapts gracefully to various screen sizes.
 * - Callbacks like `handleClose` are used to close the drawer after a link is clicked, optimizing the user experience for touch and smaller-screen devices.
 */
import React from 'react';
import { Box, Flex, Heading, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useCallback } from 'react';


export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const bg = "#6FA0BD";
    const color = "gray.800";
    const hoverColor = "white";
    const location = useLocation();

    useEffect(() => {
        // Check if the route includes the "#contact" fragment
        if (location.hash === "#contact") {
            // Scroll to the contact section when the route changes
            document.querySelector("#contact").scrollIntoView();
        }

        if (location.hash === '#testimonials') {
            document.querySelector("#testimonials").scrollIntoView();
        }
        if (location.hash === '#projects') {
            document.querySelector("#projects").scrollIntoView();
        }
        if (location.hash === '#services') {
            document.querySelector("#services").scrollIntoView();
        }
        if (location.hash === '#story') {
            document.querySelector("#story").scrollIntoView();
        }
    }, [location]);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Box bg={bg} color={color} px={4} py={2} boxShadow="md">
            <Flex
                flexDirection={{ base: 'row', md: 'row' }}
                alignItems='center'
                justifyContent={{ base: 'space-between', md: 'space-between' }}
                wrap={'wrap'}
            >
                <Box>
                    <Heading as="h1" size={{ base: 'md', md: 'xl' }}>
                        GroundBreakers Excavation
                    </Heading>
                    <Text>
                        CA LIC #811786
                    </Text>
                </Box>
                <Box display={{ base: "none", lg: "block" }} textAlign={{ base: 'center', md: 'right' }}>
                    <ChakraLink as={ReactRouterLink} to='/#services' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }} ml={4}>
                        Services
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/#projects' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }} ml={4}>
                        Past Projects
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/#story' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }} ml={4}>
                        Our Story
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/#testimonials' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }} ml={4}>
                        Testimonials
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/#contact' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }} ml={4}>
                        Contact
                    </ChakraLink>
                    <Text>(916) 740-0800</Text>
                </Box>
                <IconButton
                    ref={btnRef}
                    display={{ base: "block", lg: "none" }}
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    alignSelf="flex-start" />
            </Flex>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent bg={color} color={bg}>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigation</DrawerHeader>
                    <DrawerBody>
                        <VStack padding={4}>
                            <ChakraLink as={ReactRouterLink} to='/#services' fontWeight="medium" onClick={handleClose} _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Services
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#projects' fontWeight="medium" onClick={handleClose} _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Past Projects
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#story' fontWeight="medium" onClick={handleClose} _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Our Story
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#testimonials' fontWeight="medium" onClick={handleClose} _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Testimonials
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#contact' fontWeight="medium" onClick={handleClose} _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Contact
                            </ChakraLink>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>


        </Box>
    );
}