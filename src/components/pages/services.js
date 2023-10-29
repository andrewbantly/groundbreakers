/**
 * ServicesPage Component - Landing Page Hero Section
 *
 * Purpose:
 * The ServicesPage component serves as the hero section of the landing page for GroundBreakers Excavating, immediately engaging visitors with a dynamic background video that visually represents the company's services. It provides a captivating entry point to the website, offering an overview of the key services available.
 *
 * Structure:
 * - The component utilizes a full viewport height `Box` to establish a prominent hero section.
 * - A background video is set to auto-play, loop, and muted, to create a visually engaging atmosphere without audio distraction.
 * - Centered within the Box is a `Container`, which creates a contrasting layer for the text, ensuring legibility over the video.
 * - The `VStack` and `SimpleGrid` within the Container organize the service offerings into a clean and responsive grid layout.
 * - Each service is presented in a `Box`, styled to pop against the video background with a semi-transparent white background, shadow for depth, and rounded corners.
 * - Service titles and descriptions are clearly displayed with appropriate font sizes and weights to capture user attention.
 *
 * Accessibility Features:
 * - The background video is purely decorative and does not convey essential information, preventing distraction for users with cognitive disabilities.
 * - A hidden description for the video is provided, accessible to screen readers, to explain the content for users who cannot visually perceive it.
 * - Text contrasts are maintained for readability against the varying hues of the video background.
 * - Responsive design principles ensure the section is navigable and legible across different devices and screen sizes.
 * - Keyboard accessibility is considered for any interactive elements, supporting navigation for users with motor disabilities.

 */
import React from 'react';
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack
} from '@chakra-ui/react';

// Services data
const services = [
  {
    title: 'Pool Excavation',
    content: 'Specialized in prepping and excavating custom in-ground pools for over 20 years.',
  },
  {
    title: 'Precision Dirt Work',
    content: 'Including cutting foundation pads, trenching, finish grading, compaction, and site preparation.',
  },
  {
    title: 'Material Removal',
    content: 'Removal of dirt, rocks, concrete, construction debris, or any type of ground material.',
  },
];

export function ServicesPage() {
  return (
    <Box
      id='services'
      position={'relative'}
      minH="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      paddingBottom={{ base: "6", sm: "10" }}
      overflow="hidden"
    >
      <Box id="video-description" hidden>
        A video timelapse showing the process of groundbreakers excavating a site.
      </Box>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
        aria-describedby="video-description"
        >
        <source src="/photos/services.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container maxW={'container.xl'} zIndex={10} pb={4}>
        <VStack spacing={8} pt={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            {services.map((service, index) => (
              <Box
                key={index}
                bg={'rgba(255, 255, 255, 0.8)'}
                boxShadow={'xl'}
                rounded={'md'}
                p={5}
                color={'gray.800'}
              >
                <Text fontFamily={'heading'} fontSize={'3xl'}>
                  {service.title}
                </Text>
                <Text fontSize={'xl'}>
                  {service.content}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
