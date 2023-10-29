/**
 * About Component
 * 
 * Purpose:
 * Renders the "About" section of the website, providing users with the backstory of GroundBreakers Excavation and what clients can expect from their services. This component is designed to be accessible and to follow best practices in semantic HTML and assistive technology compatibility.
 *
 * Structure:
 * - The main container is a `Box` with a `section` role for semantic grouping.
 * - A `Container` controls the maximum width of the content for better readability.
 * - Two main `Box` components divide the section into text and image areas:
 *   - The first `Box` contains `Heading` and `Text` components, detailing the company's history and values.
 *   - The second `Box` includes an `Image` component with a descriptive `alt` attribute.
 * - Styling is applied for a visually appealing layout, with responsive adjustments for different screen sizes.
 * - The component emphasizes color contrast to maintain readability and visibility for all users.
 *
 * Accessibility Features:
 * - Semantic elements and ARIA roles where needed to ensure content structure is conveyed to screen readers.
 * - Text colors are chosen to ensure sufficient contrast against the background.
 * - Descriptive alt text for the image provides context for users who rely on screen readers.
 * - Responsive design ensures that content is accessible on devices with varying screen sizes.
 */

import { Container, Box, Image, Heading, Text } from '@chakra-ui/react';

export function About() {
    return (
        <Box bg={'blue.900'} py={12} color={'white'} id="story">
            <Container maxW={'full'}>
                <Box
                    display={{ base: 'block', md: 'flex' }}
                    alignItems={{ base: 'center', md: 'initial' }}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                >
                    <Box flex={1} p={8}>
                        <Heading as="h2">Pool Excavation Specialists</Heading>
                        <Text
                            textTransform={'uppercase'}
                            color={'#6FA0BD'}
                            fontSize={'md'}
                            fontWeight={'bold'}
                            alignSelf={'flex-start'}
                            rounded={'md'}
                            mt={2}
                        >
                            Our Story
                        </Text>
                        <Text color={'white'} fontSize={'xl'}>
                            GroundBreakers Excavation started in 2002, by founder Mark Smith who has been part of the building industry his entire life. Mark is a master operator and has trained his son Brian as the next generation of GroundBreakers.
                        </Text>
                        <Text
                             textTransform={'uppercase'}
                             color={'#6FA0BD'}
                             fontSize={'md'}
                             fontWeight={'bold'}
                             alignSelf={'flex-start'}
                             rounded={'md'}
                             mt={2}
                        >
                            What You Can Expect
                        </Text>
                        <Text color={'white'} fontSize={'xl'}>
                           Our team has a commitment to delivering superior workmanship, ensuring that work is executed with precision.

                            We invest in and utilize only top-tier, professional-grade equipment. When you entrust your excavation needs to GroundBreakers Excavating, you can be assured of timely, professional, and superior service, conducted by a team that values and prioritizes your project's success.
                        </Text>
                    </Box>
                    <Box flex={1}>
                        <Image
                            rounded={'md'}
                            alt={'Image of Mark and Brian Smith of Groundbreakers'}
                            src={'/photos/smith-family.jpg'}
                            objectFit={'cover'}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
