import { Container, Box, Image, Heading, Text, useColorModeValue, Spacer } from '@chakra-ui/react';

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
                        <Heading>Pool Excavation Specialists</Heading>
                        <Text
                            textTransform={'uppercase'}
                            color={'#6FA0BD'}
                            fontSize={'md'}
                            fontWeight={'bold'}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}
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
                             p={2}
                             alignSelf={'flex-start'}
                             rounded={'md'}
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
                            alt={'feature image'}
                            src={'/photos/smith-family.jpg'}
                            objectFit={'cover'}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
