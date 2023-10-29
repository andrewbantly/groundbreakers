import React, { useState } from 'react';
import {
  Box,
  Grid,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Heading,
} from '@chakra-ui/react';

export function PastProjects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');

 // Images for the carousel
 const projects = [
  '/photos/projects-image-01.jpg',
  '/photos/projects-image-02.jpg',
  '/photos/projects-image-03.jpg',
  '/photos/projects-image-04.jpg',
  '/photos/projects-image-05.jpg',
  '/photos/projects-image-06.jpg',
  '/photos/projects-image-07.jpg',
  '/photos/projects-image-08.jpg',
  '/photos/projects-image-09.jpg',
  '/photos/projects-image-10.jpg',
  '/photos/projects-image-11.jpg',
  '/photos/projects-image-12.jpg',
];

  const handleImageClick = (url) => {
    setSelectedImage(url);
    onOpen();
    setTimeout(() => { // Allow time for the modal to render
      document.getElementById('selectedImageModal').focus();
    }, 100);
  };

  return (
    <Box id="projects" mb={6}>
      <Heading as="h2" size="xl" textAlign="center" m={6} color={"gray.800"}>
        Our Projects
      </Heading>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
        {projects.map((url, index) => (
          <Box key={index} as="button" onClick={() => handleImageClick(url)}>
            <Image
              src={url}
              alt={`Pool excavation by GroundBreakers - Project ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Image src={selectedImage} alt="Selected project" width="100%" tabIndex="-1" id="selectedImageModal"/>
        </ModalContent>
      </Modal>
    </Box>
  );
}