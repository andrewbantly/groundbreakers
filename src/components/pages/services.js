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
      position={'relative'}
      minH="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      paddingBottom={{ base: "6", sm: "10" }} 
      overflow="hidden" 
    >
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
