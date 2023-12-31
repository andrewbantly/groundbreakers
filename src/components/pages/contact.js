/**
 * Contact Component
 * 
 * This component renders a contact section with a styled form and contact information, using Chakra UI for consistent and responsive styling.
 * 
 * The component is composed of a main Box container, which uses Flexbox to layout the contact information and the ContactForm component side by side, with responsive adjustments.
 * 
 * The contact information is presented using iconography for phone, email, and location, each accompanied by corresponding text.
 * 
 * The ContactForm is a nested component that is imported and used to capture and handle user submissions.
 * 
 * Dependencies: React, Chakra UI, and React Icons.
 */

import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    Flex,
    Icon,
    Image,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
} from 'react-icons/md';
import ContactForm from '../forms/contactForm';

export function Contact() {

    return (
        <Box bg="rgb(16,12,8)" w="full" p={4} id="contact" color="white">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="start"
                >
                    <VStack
                        align="start"
                        spacing={4}
                        flex={{ base: '1', md: '2' }}
                        maxW={{ base: '100%', md: 'lg' }}
                    >
                        <Heading ml={2}>Contact</Heading>
                        <Text color="gray.400" ml={2}>
                            Fill out the form to contact us
                        </Text>
                        <VStack spacing={4} align="start">
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                            >
                                <Icon as={MdPhone} color="white" marginRight="2" ml={2} />
                                <Text fontSize={'xl'}>(916) 740-0800</Text>
                            </Flex>
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                            >
                                <Icon as={MdEmail} color="white" marginRight="2" ml={2}/>
                                <Text fontSize={'xl'} >briangroundbreakers8@gmail.com</Text>
                            </Flex>
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                            >
                                <Icon as={MdLocationOn} color="white" marginRight="2" ml={2}/>
                                <Text fontSize={'xl'}>Loomis, California</Text>
                            </Flex>
                            <Image
                                src="/photos/Groundbreakers.jpg"
                                alt="Groundbreakers logo"
                                w="60%"
                                maxH="400px"
                                objectFit="cover"
                                mt={4}
                            />
                        </VStack>
                    </VStack>
                    <ContactForm />
                </Flex>
        </Box>
    );
}
