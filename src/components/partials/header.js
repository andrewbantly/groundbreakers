import React from 'react';
import { Box, Flex, Heading, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';


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

    return (
        <Box bg={bg} color={color} px={4} py={2} boxShadow="md">
            <Flex
                flexDirection={{ base: 'row', md: 'row' }}
                alignItems='center'
                justifyContent={{ base: 'space-between', md: 'space-between' }}
                wrap={'wrap'}
            >
                <Box>
                    <Heading as="h1" size="xl">
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
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigation</DrawerHeader>
                    <DrawerBody>
                        <VStack padding={4}>
                            <ChakraLink as={ReactRouterLink} to='/#services' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Services
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#projects' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Past Projects
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#story' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Our Story
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#testimonials' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Testimonials
                            </ChakraLink>
                            <ChakraLink as={ReactRouterLink} to='/#contact' fontWeight="medium" _hover={{ color: hoverColor, textDecoration: "none" }}>
                                Contact
                            </ChakraLink>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>


        </Box>
    );
}
