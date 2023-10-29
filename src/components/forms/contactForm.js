import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
} from '@chakra-ui/react';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            )
            .join('&');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formState }),
        })
            .then(() => {
                alert('Success!');
                setFormState({
                    name: '',
                    email: '',
                    message: '',
                })
            })
            .catch((error) => alert(error));
    };

    const handleChange = (e) =>
        setFormState({ ...formState, [e.target.name]: e.target.value });

    return (
        <Box 
            as="form" 
            onSubmit={handleSubmit} 
            name="contact" 
            data-netlify="true" 
            p={4} 
            width="100%"
            maxW="500px"
            mx="auto"
            aria-label='Contact Form'
        >
            <input type="hidden" name="form-name" value="contact" />
            <FormControl id="name" isRequired mt={4}>
                <FormLabel>Your Name</FormLabel>
                <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
                <FormLabel>Your Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                />
            </FormControl>
            <FormControl id="message" isRequired mt={4}>
                <FormLabel>Message</FormLabel>
                <Textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                />
            </FormControl>
            <Button mt={4} bg="white" type="submit" color={'gray.800'}>
                Send
            </Button>
        </Box>
    );
};

export default ContactForm;
