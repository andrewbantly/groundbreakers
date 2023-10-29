/**
 * Testimonials Component
 * 
 * Purpose:
 * The Testimonials component is designed to display customer feedback in a visually engaging and accessible format. It presents quotes from clients that affirm the quality of service provided by the company. This section aims to build trust with potential customers by sharing positive experiences from past clients.
 *
 * Structure:
 * - The component is structured as a section with a clear heading, which provides a semantic and accessible outline to the content.
 * - It uses a Flex container to evenly space individual testimonial boxes, allowing for a responsive design that adapts to various screen sizes.
 * - Each testimonial is enclosed in a Box that acts as a card, providing visual separation from the background and neighboring content.
 * - Text elements within each testimonial are sized to enhance readability across devices, with larger font sizes for headings to denote importance.
 *
 * Accessibility Considerations:
 * - The use of a semantic `Heading` element allows screen readers to identify the section's purpose quickly.
 * - Text contrast and font sizes adhere to accessibility guidelines to ensure readability for users with visual impairments.
 */
import { Box, Flex, Text, Heading } from '@chakra-ui/react';

export function Testimonials() {
  return (
    <Box id="testimonials">
      <Heading as="h2" size="xl" textAlign="center" m={6} color={"gray.800"}>Customer Stories</Heading>
      <Flex justifyContent="space-between">
        <Box flexBasis="48%" p={4} m={2}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center">
            "The team was top-notch, making the dig look easy and keeping us informed the whole time. They zipped through the work, left our place spotless, and now we're pool-ready! Seriously, if you're thinking pools, these are the folks to call!"
          </Text>
          <Box textAlign="center" mt={4}>
            <Text fontWeight={600} color={'blue.800'}>Bernadette</Text>
          </Box>
        </Box>

        <Box flexBasis="48%" p={4} m={2}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center">
            "We always wanted a backyard pool, and choosing GroundBreakers Excavation was the best first step we could have taken. At first, we were nervous about the digging part, but the team was professional and knew a lot about what they were doing. They showed up on time and were excited about the project, which made us feel at ease."
          </Text>
          <Box textAlign="center" mt={4}>
            <Text fontWeight={600} color={'blue.800'}>James</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
