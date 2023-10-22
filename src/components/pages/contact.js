import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Icon,
    Image,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';

export function Contact() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit")
        console.log(formState)
        try {
          const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            body: JSON.stringify(formState),
          });
          setFormState({
            name: '',
            email: '',
            message: '',
          })
          // Handle response from our function
          if (!response.ok) {
            // Not a 200 response, handle error
            console.error('Error sending email', response);
          } else {
            console.log('Email sent successfully');
            // Reset form or show success message
          }
        } catch (err) {
          // Handle errors when calling the function or network errors
          console.error('Error sending email', err);
        }
    };

    return (
        <Box bg="#9DC4FB" w="full" p={4} id="contact" color="white">
            <Box p={4} bg="#02054B" borderRadius="lg">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="start"
                >
                    <VStack align="start" spacing={4} flex={{ base: '1', md: '2' }}>
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
                                <Icon as={MdPhone} color="#1970F1" marginRight="2" />
                                <Text fontSize={'xl'}>(916) 740-0800</Text>
                            </Flex>
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                                role="presentation"
                            >
                                <Icon as={MdEmail} color="#1970F1" marginRight="2" />
                                <Text fontSize={'xl'}>briangroundbreakers8@gmail.com</Text>
                            </Flex>
                            <Flex
                                as="div"
                                align="center"
                                color="white"
                                cursor="default"
                                role="presentation"
                            >
                                <Icon as={MdLocationOn} color="#1970F1" marginRight="2" />
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
                    <Box p={4} bg="white" borderRadius="lg" color="#0B0E3F" flex={{ base: '1', md: '3' }} mt={{ base: 4, md: 0 }}>
                        <VStack spacing={4}>
                            <form onSubmit={handleSubmit} method="POST" netlify>
                                <FormControl id="name">
                                    <FormLabel>Your Name</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.300" />} />
                                        <Input
                                            bg={'blackAlpha.300'}
                                            type="text"
                                            placeholder="John Doe"
                                            _placeholder={{ color: 'gray.600' }}
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.300" />} />
                                        <Input
                                            type="email"
                                            bg={'blackAlpha.300'}
                                            placeholder="example@domain.com"
                                            _placeholder={{ color: 'gray.600' }}
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="message">
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        placeholder="Tell us about your project"
                                        bg={'blackAlpha.300'}
                                        _placeholder={{ color: 'gray.600' }}
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <Button type="submit" colorScheme="blue" variant="solid">
                                    Send Message
                                </Button>
                            </form>
                        </VStack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
