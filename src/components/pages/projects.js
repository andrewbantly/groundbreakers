import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue, Heading } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function PastProjects() {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' }) || '90%'; // Fallback value if undefined
  const side = useBreakpointValue({ base: '30%', md: '10px' }) || '30%'; // Fallback value if undefined

  // Images for the carousel
  const projects = [
    '/photos/projects-image-01.jpg',
    '/photos/projects-image-02.jpg',
    '/photos/projects-image-03.jpg',
    '/photos/projects-image-04.jpg',
    '/photos/projects-image-05.jpg',
  ];

  return (
    <Box id="projects">
      <Heading as="h2" size="xl" textAlign="center" m={6}>
        Our Projects
      </Heading>
      <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
        <IconButton
          aria-label="left-arrow"
          icon={<BiLeftArrowAlt />}
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        />
        {/* Right arrow button */}
        <IconButton
          aria-label="right-arrow"
          icon={<BiRightArrowAlt />}
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        />
        <Slider {...settings} ref={setSlider}>
          {projects.map((url, index) => (
            <Box
              key={index}
              height={'600px'}
              width={'100%'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
