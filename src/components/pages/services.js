
import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  SimpleGrid,
  VStack,
  Stack,
  Image
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
      bgImage="url('/photos/services-image.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position={'relative'}
      minH="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      paddingBottom={{ base: "6", sm: "10" }} 
    >
      <Container maxW={'container.xl'} zIndex={10}>
        <VStack spacing={10} p={10}>
            <Image
              src="/photos/Groundbreakers.jpg"
              alt="Groundbreakers"
              w={{ base: "80%", sm: "100%", md: "70%", lg: "60%", xl: "50%", "2xl": "45%" }}
              minH={{ base: "150px", sm: "200px", md: "250px", lg: "300px", xl: "350px", "2xl": "400px" }}
              maxH="400px" 
              objectFit="contain"
              mx="auto"
            />
            {/* <Text
              fontSize={'2xl'}
              color={'white'}
              textAlign="center"
              textShadow="2px 2px 2px rgba(0, 0, 0, 0.3)">
              Specializing in pool excavation in Sacramento for over 20 years
            </Text> */}
          {/* </Stack> */}

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            {services.map((service, index) => (
              <Box 
                key={index}
                bg={'white'}  // Solid white background
                boxShadow={'xl'}  // Shadow effect
                rounded={'md'}  // Rounded corners
                p={5}  // Padding
                color={'gray.800'}  // Text color for readability
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
