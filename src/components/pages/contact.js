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
        <Box bg="#3B3B3D" w="full" p={4} id="contact" color="white">
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
                        <Heading>Contact</Heading>
                        <Text color="gray.400">
                            Fill out the form to contact us
                        </Text>
                        <VStack spacing={4} align="start">
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                                role="presentation"
                            >
                                <Icon as={MdPhone} color="white" marginRight="2" />
                                <Text fontSize={'xl'}>(916) 740-0800</Text>
                            </Flex>
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                                role="presentation"
                            >
                                <Icon as={MdEmail} color="white" marginRight="2" />
                                <Text fontSize={'xl'}>briangroundbreakers8@gmail.com</Text>
                            </Flex>
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                                role="presentation"
                            >
                                <Icon as={MdLocationOn} color="white" marginRight="2" />
                                <Text fontSize={'xl'}>Loomis, California</Text>
                            </Flex>
                            <Image
                                src="/photos/Groundbreakers.jpg"
                                alt="Groundbreakers"
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
