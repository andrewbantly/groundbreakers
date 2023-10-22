import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useEffect } from 'react'; // Add this import

export function Header() {
    const bg = useColorModeValue("gray.200", "gray.700");
    const color = useColorModeValue("gray.800", "white");
    const hoverColor = useColorModeValue("blue.800", "blue.400");
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
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'flex-start', md: 'center' }}
                justifyContent={{ base: 'center', md: 'space-between' }}
            >
                <Box>
                    <Heading as="h1" size="xl">
                        GroundBreakers Excavation
                    </Heading>
                    <Text>
                        CA LIC #811786
                    </Text>
                </Box>
                <Box textAlign={{ base: 'center', md: 'right' }}>
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
            </Flex>
        </Box>
    );
}
