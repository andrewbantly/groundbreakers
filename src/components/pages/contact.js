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
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export function Contact() {
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
            <Text my={4} color="gray.400">
              Fill up the form below to contact us
            </Text>
            <VStack spacing={4} align="start">
              <Button
                variant="ghost"
                color="white"
                leftIcon={<MdPhone color="#1970F1" />}
                _hover={{ border: '2px solid #1C6FEB', color: "#DCE2FF" }}
              >
                (916) 740-0800
              </Button>
              <Button
                variant="ghost"
                color="white"
                leftIcon={<MdEmail color="#1970F1" />}
                _hover={{ border: '2px solid #1C6FEB', color: "#DCE2FF" }}
              >
                briangroundbreakers8@gmail.com
              </Button>
              <Button
                variant="ghost"
                color="white"
                leftIcon={<MdLocationOn color="#1970F1" />}
                _hover={{ border: '2px solid #1C6FEB', color: "#DCE2FF" }}
              >
                Loomis, California
              </Button>
            </VStack>
          </VStack>
          <Box p={4} bg="white" borderRadius="lg" color="#0B0E3F" flex={{ base: '1', md: '3' }} mt={{ base: 4, md: 0 }}>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.300" />} />
                  <Input bg={'blackAlpha.300'} type="text" placeholder="John Doe" _placeholder={{ color: 'gray.600' }} />
                </InputGroup>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.300" />} />
                  <Input type="email" bg={'blackAlpha.300'} placeholder="example@domain.com" _placeholder={{ color: 'gray.600' }} />
                </InputGroup>
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Tell us about your project" bg={'blackAlpha.300'} _placeholder={{ color: 'gray.600' }} />
              </FormControl>
              <Button colorScheme="blue" variant="solid">
                Send Message
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
