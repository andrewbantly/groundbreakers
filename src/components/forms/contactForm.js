import {
    Box,
    VStack,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';

export function ContactForm() {

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
          if (!response.ok) {
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
    

    return(
        <Box p={2} bg="white" borderRadius="lg" color="#0B0E3F" flex={{ base: '1', md: '3' }} mt={{ base: 4, md: 0 }}>
                        <VStack spacing={4} align="stretch">
                            <form name="contact" onSubmit={handleSubmit} method="POST" netlify>
                            <input type="hidden" name="form-name" value="contact" />
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
                                <Button type="submit" colorScheme="blue" variant="solid" mt={2}>
                                    Send Message
                                </Button>
                            </form>
                        </VStack>
                    </Box>
    )
}